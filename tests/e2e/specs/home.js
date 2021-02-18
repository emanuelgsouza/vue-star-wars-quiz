// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('should render the initial elements, like heading and the button', () => {
    cy.visit('/')

    cy.findByRole('heading', { name: /planets quiz/i }).should('exist')

    cy.findByRole('link', { name: /start the quiz!/i }).should('exist')
  })
})
