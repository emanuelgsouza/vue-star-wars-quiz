// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('should render the initial elements, like heading and the button', () => {
    cy.visit('/')

    cy.findByRole('heading', { name: /planets quiz/i }).should('exist')

    cy.findByRole('link', { name: /start the quiz!/i }).should('exist')
  })

  it.only('should back to Home page when it is in quiz clicking on the Back to initial page label', () => {
    cy.visit('/')

    cy.findByRole('link', { name: /start the quiz!/i }).click()

    cy.findByLabelText('Back to initial page').click()

    cy.url().should('equal', `${Cypress.config('baseUrl')}#/`)
  })
})
