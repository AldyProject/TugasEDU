describe('Working with inputs', () => {
    it('Successfull login and checkout', () => {
        cy.visit('https://saucedemo.com/');
              cy.fixture("user").then( user1 => {
                const username = user1.username
                const password = user1.password
                //cy.login(username, password)
                const FName = user1.FName
                const LName = user1.LName
                const Zip = user1.Zip
                //input username
                cy.get('#user-name.input_error.form_input').clear()
                cy.get('#user-name.input_error.form_input').type(username)
                //input password
                cy.get('#password.input_error.form_input').clear()
                cy.get('#password.input_error.form_input').type(password)
                //Click login
                cy.get('#login-button.submit-button.btn_action').click()  
                
                //Click add to cart
                cy.get('#add-to-cart-sauce-labs-backpack.btn.btn_primary.btn_small.btn_inventory').click()
                cy.get('#add-to-cart-sauce-labs-light.btn.btn_primary.btn_small.btn_inventory').click()

             // Click cart
                cy.get('shopping_cart_link').click()

               //Click button countinue
                cy.get('#checkout.btn.btn_action.btn_medium.checkout_button').click()

               //Input Firstname, Lastname and Zip/postal
               //input Firstname
                cy.get('#first-name.input_error.form_input').clear()
                cy.get('#first-name.input_error.form_input').type(FName)

                //input LastName
                cy.get('#last-name.input_error.form_input').clear()
                cy.get('#last-name.input_error.form_input').type(LName)

                //input Zip/postal
                cy.get('#postal-code.input_error.form_input').clear()
                cy.get('#postal-code.input_error.form_input').type(Zip)

                //Click continue
                cy.get('#continue.submit-button.btn.btn_primary.cart_button.btn_action').click()

                //Click Finish
                cy.get('#finish.btn.btn_action.btn_medium.cart_button').click()

                //Click Back Home
                cy.get('#back-to-products.btn.btn_primary.btn_small').click()
                //Click burger menu
                cy.get('#react-burger-menu-btn').click()

                //Click Logout
                cy.get('#logout_sidebar_link.bm-item.menu-item').click()
                })
                
            });
        });