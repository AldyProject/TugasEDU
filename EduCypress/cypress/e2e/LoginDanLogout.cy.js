describe('Working login and logout', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/login.html');
    });
    // visit website
    it('Should visit website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
      });
    //Login successfully
    it('Should successfully log in', () => {
      cy.get('#user_login').type('username'); 
      cy.get('#user_password').type('password');
      cy.get('#user_remember_me').click();
      cy.get('.btn.btn-primary').click();
  
      cy.url().should('include', 'account-summary.html'); 
    });
    
    //Logout successfully
    it('Should successfully log out', () => {
        //Login username and password
      cy.get('#user_login').type('username'); 
      cy.get('#user_password').type('password');
      cy.get('#user_remember_me').click();
      cy.get('.btn.btn-primary').click();
      //Logout account summary
      cy.get(':nth-child(3) > .dropdown-toggle > .caret').click();
      cy.get('#logout_link').click();
  
      cy.url().should('include', 'index.html'); 
    });
  });
  
