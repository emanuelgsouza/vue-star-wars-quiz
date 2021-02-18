// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('should render the initial elements, like heading and the button', () => {
    cy.visit('/')
    cy.contains('Planets Quiz')
  })
})
