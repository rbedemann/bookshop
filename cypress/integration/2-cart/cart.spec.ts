describe('Cart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  function addItem() {
    cy.get('.books .book a').first().click();

    cy.get('[role=presentation] button').click();
  }

  it('adds items to the cart', () => {
    addItem();
    cy.get('.cart-item-count span').should('have.text', '1');
  });

  it('shows item in cart', () => {
    addItem();

    cy.visit('http://localhost:1234/cart');
    cy.get('.cart-item').should('have.length', 1)
    cy.get('header a').last().click()

    cy.get('.cart-item .cart-item-amount').should('have.text', '1');
    cy.get('.cart-item .cart-item-title').should('have.text', 'Fundamentals of Wavelets');
    cy.get('.cart-item .cart-item-author').should('have.text', 'Goswami, Jaideva');
  });

  it('increases amount of item in cart', () => {
    addItem();

    cy.visit('http://localhost:1234/cart');
    cy.get('.cart-item .cart-item-amount').should('have.text', '1');

    cy.get('.cart-item .cart-item-increase').click()
    cy.get('.cart-item .cart-item-amount').should('have.text', '2');
  });

  it('decreases amount of item in cart', () => {
    addItem();

    cy.visit('http://localhost:1234/cart');
    cy.get('.cart-item .cart-item-amount').should('have.text', '1');

    cy.get('.cart-item .cart-item-increase').click()
    cy.get('.cart-item .cart-item-decrease').click()
    cy.get('.cart-item .cart-item-amount').should('have.text', '1');
  });

  it('removes item from cart', () => {
    addItem();

    cy.visit('http://localhost:1234/cart');
    cy.get('.cart-item .cart-item-remove').click();

    cy.get('.cart-item').should('have.length', 0)
  });

  it('removes all items from cart', () => {
    addItem();

    cy.visit('http://localhost:1234/cart');
    cy.get('.cart-remove-all').click();

    cy.get('.cart-item').should('have.length', 0)
  });
});
