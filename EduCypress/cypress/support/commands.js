// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    //ketik username
    cy.get('#user_login').type('username');
    //ketik password
    cy.get('#user_password').type('password');
    //Click Remember me
    cy.get('#user_remember_me').click();
    //Click Login
    cy.get('.btn.btn-primary').click();
    //Click Pay Bilss
    cy.get('#pay_bills_tab > a').click();
    //Select Payee Bank of America
    cy.get('select#sp_payee').select('Bank of America');
    //Select Payee Bank of America
    cy.get('select#sp_account').select('Credit Card');
    // Ketik jumlah uang
    cy.get('#sp_amount').type('1000');
    //Ketik tanggal
    cy.get('#sp_date').type('2024-10-02');
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click();
    //Ketik description
    cy.get('#sp_description').type('Halo saya aldy sudah berhasil pembayaran');
    //Click Pay
    cy.get('#pay_saved_payees').click();
})