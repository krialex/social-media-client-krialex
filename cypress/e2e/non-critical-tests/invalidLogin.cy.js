describe('Invalid login', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('/');
  });

  it('should show an error message with invalid credentials', () => {
    cy.get('.modal-footer')
      .find('button[data-bs-target="#loginModal"]')
      .click();
    cy.get('#registerModal')
      .invoke('attr', 'style', 'display: none')
      .should('have.attr', 'style', 'display: none');

    cy.get('#loginModal').should('be.visible');
    cy.get('#loginEmail')
      .type('invalid@hhh.no', { delay: 0 })
      .should('have.value', 'invalid@hhh.no');
    cy.get('#loginForm').should('be.visible');
    cy.get('#loginPassword')
      .type('wrong', { delay: 0 })
      .should('have.value', 'wrong');

    cy.get('#loginForm').find('button[type="submit"]').click();
    cy.get('.error-message').should('be.visible');
  });
});
