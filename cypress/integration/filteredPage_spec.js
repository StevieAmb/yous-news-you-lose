describe('Assertions', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=1Qzvpl0KwcglnxxeAwe5oNNZMwjTADYj', {fixture: 'example.json'})
    cy.visit('http://localhost:3000/')
  })

  it('User should be able to use input field in Nav Bar to search for a specific article', () => {
    cy.get('nav')
    .contains('The New York Times:')
    cy.get('input')
    .type('ballet')
    cy.get('.search-button').click()
    cy.url('http://localhost:3000/searched')
    cy.get('.front-page-articles')
    .contains('War Brings')
    .get('img')
    .get('.abstract')
    .contains('Ballet has long')
  })


})