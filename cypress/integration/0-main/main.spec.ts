describe('Main', () => {

  it('navigates home', () => {
    cy.visit('http://localhost:1234/cart');

    cy.get('header a').first().click()

    cy.location('pathname').should('equal', '/books');
  });

});
