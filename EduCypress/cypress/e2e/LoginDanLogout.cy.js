describe('Working with login and logout', () => {
    
    let value; 
    beforeEach(() => {
      value = 0; 
    });
  
    it('Visit website', () => {
      cy.visit('http://zero.webappsecurity.com/login.html');
    });
  
    // Login user
    it('Should successfully log in', () => {
      cy.get('#user_login').type('username');
      cy.get('#user_password').type('password');
      cy.get('#user_remember_me').click();
      cy.get('.btn.btn-primary').click();
      
      // Optionally check if login was successful
      cy.url().should('include', 'account-summary.html'); // Adjust the URL as needed
    });
  
    // Logout user
    it('Should successfully log out', () => {
      cy.get(':nth-child(3) > .dropdown-toggle > .caret').click();
      cy.get('#logout_link').click();
      
      // Optionally check if logout was successful
      cy.url().should('include', 'login.html'); // Adjust the URL as needed
    });
  });
  
