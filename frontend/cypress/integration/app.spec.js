// cypress/integration/app.spec.js

describe('Initial', () => {
  it('should render homepage', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
  }),
  it('should find more than 1 film', () => {
    cy.visit('http://localhost:3000/login')
    if (cy.url().should('include', '/login')) {
      cy.get('input[type=submit]').click()
    }

    // Start from the index page
    cy.visit('http://localhost:3000/browse')

    // The new page should contain an h1 with "About page"
    cy.get('div[class*="browse__Movies"]').find('a').its('length').should('be.gte', 1)
  }),
  it('should have actors to the film', () => {
    cy.visit('http://localhost:3000/login')
    if (cy.url().should('include', '/login')) {
      cy.get('input[type=submit]').click()
    }

    cy.visit('http://localhost:3000/movie/1')
    cy.get('div[class*="movie__CastWrapper"]').its('length').should('be.gte', 1)
  })
})