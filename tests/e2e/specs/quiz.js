// https://docs.cypress.io/api/introduction/api.html

const data = require('../../../src/data/data.json')
const personsData = data.peopleData.people

const getHomeworldFromData = (person) => {
  const element = personsData.find(personData => {
    return personData.name === person
  })

  return element.homeworld.name
}

describe('Quiz Logic', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.findByRole('link', { name: /start the quiz!/i }).click()

    cy.findByRole('button', { name: /check/i }).as('checkButton')
  })

  it('should render the quiz when click on "Start the Quiz!" button', () => {
    cy.url().should('include', 'quiz')

    cy.findByLabelText('Back to initial page').should('exist')

    cy.findByRole('heading', { name: /what planet was/ig }).should('exist')

    cy.get('@checkButton').should('exist')
  })

  it('should disable the button when does not have a selected option', () => {
    cy.get('@checkButton').should('have.prop', 'disabled', true)

    cy.get('label').eq(1).click()

    cy.get('@checkButton').should('have.prop', 'disabled', false)
  })

  it('should back to the first question when refreshing inside a quiz', () => {
    cy.get('label').eq(1).click()

    cy.contains('0/10')

    cy.get('@checkButton').click()

    cy.contains('1/10')

    cy.reload()

    cy.contains('0/10')

    cy.url().should('include', 'quiz')
  })

  it('should execute the quiz correctly', () => {
    cy.wrap([]).as('executions')

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 5)

      cy.contains(`${i}/10`)

      cy.findByTestId('person').invoke('text').as('person')

      cy.get('label').eq(randomNumber).as('selected')

      cy.get('@selected').invoke('text').then((value) => {
        cy.get('@executions').then((executions) => {
          cy.get('@person').then((person) => {
            executions.push({
              person,
              selected: value.trim(),
              step: i,
              homeworld: getHomeworldFromData(person)
            })
          })
        })
      })

      cy.get('@selected').click()

      cy.get('@checkButton').click()
    }

    cy.url().should('include', 'finish')

    cy.contains('Did you like this quiz?')

    cy.contains('Answers')

    cy.findByRole('button', { name: /start the quiz again/ig })

    cy.get('@executions').then((executions) => {
      for (const execution of executions) {
        const result = execution.selected === execution.homeworld ? 'Hit!' : 'Wrong!'

        cy
          .get(`[data-testid="step-card"][data-step="${execution.step}"]`)
          .as('stepCard')

        cy.get('@stepCard').contains(execution.person).should('exist')
        cy.get('@stepCard').contains(execution.selected).should('exist')
        cy.get('@stepCard').contains(execution.homeworld).should('exist')
        cy.get('@stepCard').contains(result).should('exist')
      }
    })
  })
})
