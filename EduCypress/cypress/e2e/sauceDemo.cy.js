it("Login", () => {
  // Intercept request dan balas dengan sukses palsu
  cy.intercept("GET", "**/events.backtrace.io/**", (req) => {
    req.reply(200, {}); // Membalas dengan respons sukses palsu
  });

  // Kunjungi halaman
  cy.visit("https://www.saucedemo.com/");
  // Memuat data dari fixture
  cy.fixture("admin").then((admin) => {
    cy.get('input[name="user-name"]').type(admin.username1);
    cy.get('input[name="password"]').type(admin.password1);
    cy.get('input[type="submit"]').click();
    cy.url().should("include", "/inventory.html");
  });

  // Tambahkan item ke keranjang
  cy.get("#add-to-cart-sauce-labs-backpack", { timeout: 10000 })
    .should("be.visible")
    .click();
  
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt", { timeout: 10000 })
    .should("be.visible")
    .click();

  // Verifikasi item ditambahkan ke keranjang menggunakan data-test attribute
  cy.get('[data-test="shopping-cart-badge"]', { timeout: 10000 }).should(
    "contain.text",
    "2"
  );
    // Click cart
    cy.get('[data-test="shopping-cart-link"]').click()
        
    //Click button countinue
     cy.get('#checkout.btn.btn_action.btn_medium.checkout_button').click()
  
     //Input Firstname, Lastname and Zip/postal
    cy.get('[data-test="firstName"]').clear()
    cy.get('[data-test="firstName"]').type('aldy')

    cy.get('[data-test="lastName"]').clear()
    cy.get('[data-test="lastName"]').type('suryanto')

    cy.get('[data-test="postalCode"]').clear()
    cy.get('[data-test="postalCode"]').type('123123123')

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

});
