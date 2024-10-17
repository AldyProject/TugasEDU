describe('Working with inputs', () => {
    it('Tugas Navbar', () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#onlineBankingMenu > div > strong').click();
        cy.get('#feedback > div > strong').click();
        cy.get('.brand').click();
        cy.get('#signin_button').click();
        cy.get('#user_login').type('username');
        cy.get('#user_password').type('password');
        cy.get('#user_remember_me').click();
        cy.get('.btn.btn-primary').click();
        cy.get('#account_activity_tab > a').click();
        cy.get('#transfer_funds_tab > a').click();
        cy.get('select#tf_fromAccountId').select('Credit Card(Avail. balance = $ -265)');
        cy.get('select#tf_toAccountId').select('Checking(Avail. balance = $ -500.2)');
        cy.get('#tf_amount').type('10000');
        cy.get('#tf_description').type('Asik Bisa Transfer');
        cy.get('#btn_submit').click();
        cy.get('#btn_submit').click();
        cy.get('.offset2 > a').click();
        cy.get(':nth-child(3) > .dropdown-toggle > .caret').click();
        cy.get('#logout_link').click();
    });
});