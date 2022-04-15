describe('Assertions', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=1Qzvpl0KwcglnxxeAwe5oNNZMwjTADYj', {fixture: 'example.json'})
    cy.visit('http://localhost:3000/')
  })

  it('User should see front page with nav bar and input field and search button, and lists of articles with buttons to see more details', () => {
    cy.get('nav')
    .contains('The New York Times:')
    cy.get('input')
    .type('ballet')
    cy.get('.search-button')
    cy.get('.front-page-articles')
    .children('article')
    .should('have.length', 2)
    .eq(1)
    .contains('When Classical Music')
    .get('img').should('exist')
    .get('.details-button')
    .contains('More Details Here')
  })

})