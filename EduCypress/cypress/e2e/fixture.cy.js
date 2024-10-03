describe('Working with inputs', () => {
    it('Successfull login and checkout', () => {
          cy.visit("https://www.saucedemo.com/" , { timeout: 120000, waitForAnimations: false });
              cy.fixture("admin").then( admin => {
                const username1 = admin.username1
                const password1 = admin.password1
                const FName1 = admin.FName1
                const LName1 = admin.LName1
                const Zip1 = admin.Zip1
                //input username
                cy.get('#user-name.input_error.form_input').clear()
                cy.get('#user-name.input_error.form_input').type(username1)
                //input password
                cy.get('#password.input_error.form_input').clear()
                cy.get('#password.input_error.form_input').type(password1)
                //Click login
                cy.get('#login-button.submit-button.btn_action').click()  
                
                //Click add to cart
                cy.get('#add-to-cart-sauce-labs-backpack').click()
                cy.get('#add-to-cart-sauce-labs-bike-light').click()

             // Click cart
             cy.get('[data-test="shopping-cart-link"]').click()
               //Click button countinue
                cy.get('#checkout.btn.btn_action.btn_medium.checkout_button').click()

               //Input Firstname, Lastname and Zip/postal
               //input Firstname
               cy.get('[data-test="firstName"]').clear()
               cy.get('[data-test="firstName"]').type(FName1)

                //input LastName
                cy.get('[data-test="lastName"]').clear()
                cy.get('[data-test="lastName"]').type(LName1)

                //input Zip/postal
                cy.get('[data-test="postalCode"]').clear()
                cy.get('[data-test="postalCode"]').type(Zip1)

                //Click continue
                cy.get('#continue.submit-button.btn.btn_primary.cart_button.btn_action').click()

                //Click Finish
                cy.get('[data-test="finish"]').click()

                //Click Back Home
                cy.get('#back-to-products.btn.btn_primary.btn_small').click()
                //Click burger menu
                cy.get('#react-burger-menu-btn').click()

                //Click Logout
                cy.get('#logout_sidebar_link.bm-item.menu-item').click()
                })
                
            });
        });
