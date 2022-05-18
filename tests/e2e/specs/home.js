describe('Home Page', () => {
  it('should back to Home page when it is in quiz clicking on the Back to initial page label', () => {
    cy.visit('/')

    cy.findByRole('link', { name: /start the quiz!/i }).click()

    cy.findByLabelText('Back to initial page').click()

    cy.url().should('equal', `${Cypress.config('baseUrl')}#/`)
  })

  it('should back to Home page when the user tries to navigate to the finish page but it does not have any finished quiz', () => {
    cy.visit('/#/finish')

    cy.url().should('equal', `${Cypress.config('baseUrl')}#/`)
  })
})
