describe('Navbar Test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/');
      });
    it('Visit website', () => {
        cy.visit('http://zero.webappsecurity.com/');
    })
    it('Should display online banking content',() => {
        cy.contains('Online Banking').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
    });
    it('Should display feedback content',() => {
        cy.contains('Feedback').click()
        cy.url().should('include','feedback.html')
    });
    it('Should display home page content',() => {
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
    });
    it('Should successfully Login with valid email and password', () => {
        cy.get('#signin_button').click();
        cy.url().should('include','login.html');

        cy.get('#user_login').type('username');
        cy.get('#user_password').type('password');
        cy.get('#user_remember_me').click();
        cy.get('.btn.btn-primary').click();
        cy.url().should('include','account-summary.html');
    });
    it('Should successfully Transfer with valid account', () => {
        //Login account
        cy.get('#signin_button').click();
        cy.url().should('include','login.html');

        cy.get('#user_login').type('username');
        cy.get('#user_password').type('password');
        cy.get('#user_remember_me').click();
        cy.get('.btn.btn-primary').click();
        cy.url().should('include','account-summary.html');
        //Click account activity
        cy.get('#account_activity_tab > a').click();
        cy.url().should('include','account-activity.html');
        //Click Transfer funds
        cy.get('#transfer_funds_tab > a').click();
        cy.url().should('include','transfer-funds.html');
        //Fill data user
        cy.get('select#tf_fromAccountId').select('Credit Card(Avail. balance = $ -265)');
        cy.get('select#tf_toAccountId').select('Checking(Avail. balance = $ -500.2)');
        cy.get('#tf_amount').type('10000');
        cy.get('#tf_description').type('Asik Bisa Transfer');
        cy.get('#btn_submit').click();
        cy.url().should('include','transfer-funds-verify.html');
        //Click submit
        cy.get('#btn_submit').click();
        cy.url().should('include','transfer-funds-confirm.html');
        cy.get('.alert-success').should('be.visible').and('contain.text', 'You successfully submitted your transaction.');
    })   
});
