describe('Working with inputs', () => {

    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });

    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
    });
    
    it('Should Click Remember me', () => {
        cy.get('#user_remember_me').click();
    });
    
    it('Should Click save', () => {
        cy.get('.btn.btn-primary').click();
    });
});