describe('my first test', () => {
    it('clicking "type" shows the right headings', () => {
      cy.visit('https://example.cypress.io');
  
      //cy.pause();
  
      cy.contains('type').click();
  
      cy.url().should('include', '/commands/actions');
  
      cy.get('.action-email')
        .type('aldysuryanto@gmail.com')
        .should('have.value', 'aldysuryanto@gmail.com');
    });
  });