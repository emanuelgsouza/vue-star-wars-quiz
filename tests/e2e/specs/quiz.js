// https://docs.cypress.io/api/introduction/api.html

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
})
