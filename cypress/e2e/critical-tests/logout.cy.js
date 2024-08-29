describe('Logout', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('/');
    cy.get('.modal-footer')
      .find('button[data-bs-target="#loginModal"]')
      .click();
    cy.get('#registerModal')
      .invoke('attr', 'style', 'display: none')
      .should('have.attr', 'style', 'display: none');

    cy.get('#loginForm').should('be.visible');
    cy.wait(1000);
    cy.get('#loginEmail', { timeout: 10000 })
      .type('kikki@stud.noroff.no', { delay: 0 })
      .should('have.value', 'kikki@stud.noroff.no');

    cy.get('#loginForm').should('be.visible');
    cy.wait(1000);
    cy.get('#loginPassword', { timeout: 150000 })
      .type('password', { delay: 0 })
      .should('have.value', 'password');
      
    cy.get('#loginForm').find('button[type="submit"]').click();
    cy.url().should('include', '?view=profile&name=kikki');
    cy.window().then((win) => {
      expect(win.localStorage.getItem('token')).to.exist;
    });
  });

  it('Should log out the user when logout button is clicked', () => {
    cy.get('button[data-auth="logout"]').click();
    cy.url().should('not.include', '?view=profile&name=kikki');
    cy.window().then((win) => {
      expect(win.localStorage.getItem('token')).to.be.null;
    });
    cy.get('button[data-bs-target="#loginModal"]').should('be.visible');
  });
});
