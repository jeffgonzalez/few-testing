describe('The Home Page', () => {
  it('Has The Greeting', () => {
    cy.visit('/')
    cy.url().should('include', 'home')
    cy.get('[data-app-title]').should('contain', 'Angular Testing')
  })

})
