describe("TestCases", () => {
  it("RegisterWhileCheckout", () => {
    cy.visit("http://automationexercise.com");
    cy.get("h2").should("contain", "Features Items");
    cy.get('[data-product-id="2"]').first().click();
    cy.contains("Continue Shopping").click();
    cy.get('[href="/view_cart"]').first().click();
    cy.get(".btn.btn-default.check_out")
      .should("contain", "Proceed To Checkout")
      .click();
    cy.get("u").contains("Register / Login").click();
    cy.get('[data-qa="signup-name"]').type("Jonathan");
    cy.get('[data-qa="signup-email"]').type("jona@than.com");
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[id="id_gender2"]');
    cy.get('[id="id_gender1"]').click();
    cy.get('[data-qa="password"]').type("ichbinjonathan536");
    cy.get('[data-qa="days"]').select("24");
    cy.get('[data-qa="months"]').select("9");
    cy.get('[data-qa="years"]').select("2021");
    cy.get('[class="checkbox"]').click({ multiple: true });
    cy.get('[data-qa="first_name"]').type("Jonathan");
    cy.get('[data-qa="last_name"]').type("Schneider");
    cy.get('[data-qa="company"]').type("Regenburg");
    cy.get('[data-qa="address"]').type("Koenigsforst 3");
    cy.get('[data-qa="country"]').select("Australia");
    cy.get('[data-qa="state"]').type("unicorn-island");
    cy.get('[data-qa="city"]').type("Rotterdam");
    cy.get('[data-qa="zipcode"]').type("511");
    cy.get('[data-qa="mobile_number"]').type("519285918571");
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should("contain", "Account Created!");
    cy.get('[data-qa="continue-button"]').click();
    cy.get("b").should("contain", "Jonathan");
    cy.get('[href="/view_cart"]').first().click();
    cy.get(".btn.btn-default.check_out").click();
    cy.get("#address_delivery")
      .should("contain", "Mr. Jonathan Schneider")
      .and("contain", "Regenburg")
      .and("contain", "Koenigsforst 3")
      .and("contain", "Australia")
      .and("contain", "519285918571");
    cy.get('[name="message"]').type("Pls deliver trough DHL and NOT by UPS");
    cy.contains("Place Order").click();
    cy.get('[data-qa="name-on-card"]').type("Jonathan Schneider");
    cy.get('[data-qa="card-number"]').type("4410035");
    cy.get('[data-qa="cvc"]').type("925");
    cy.get('[data-qa="expiry-month"]').type("DE");
    cy.get('[data-qa="expiry-year"]').type("2031");
    cy.get('[data-qa="pay-button"]').click();
    cy.get("p").should("contain", "Your order has been confirmed!");
    cy.contains("Delete Account").click();
    cy.get('[data-qa="account-deleted"]').should("contain", "Account Deleted!");
    cy.get('[data-qa="continue-button"]').click();
  });

  it("RegisterBeforeCheckout", () => {
    cy.visit("http://automationexercise.com");
    cy.get("h2").should("contain", "Features Items");
    cy.contains("Signup / Login").click();
    cy.get('[data-qa="signup-name"]').type("Jonathan");
    cy.get('[data-qa="signup-email"]').type("jona@than.com");
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[id="id_gender2"]');
    cy.get('[id="id_gender1"]').click();
    cy.get('[data-qa="password"]').type("ichbinjonathan536");
    cy.get('[data-qa="days"]').select("24");
    cy.get('[data-qa="months"]').select("9");
    cy.get('[data-qa="years"]').select("2021");
    cy.get('[class="checkbox"]').click({ multiple: true });
    cy.get('[data-qa="first_name"]').type("Jonathan");
    cy.get('[data-qa="last_name"]').type("Schneider");
    cy.get('[data-qa="company"]').type("Regenburg");
    cy.get('[data-qa="address"]').type("Koenigsforst 3");
    cy.get('[data-qa="country"]').select("Australia");
    cy.get('[data-qa="state"]').type("unicorn-island");
    cy.get('[data-qa="city"]').type("Rotterdam");
    cy.get('[data-qa="zipcode"]').type("511");
    cy.get('[data-qa="mobile_number"]').type("519285918571");
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should("contain", "Account Created!");
    cy.get('[data-qa="continue-button"]').click();
    cy.get("b").should("contain", "Jonathan");
    cy.get('[data-product-id="2"]').first().click();
    cy.contains("Continue Shopping").click();
    cy.get('[href="/view_cart"]').first().click();
    cy.get(".btn.btn-default.check_out")
      .should("contain", "Proceed To Checkout")
      .click();
    cy.get('[name="message"]').type("Pls deliver trough DHL and NOT by UPS");
    cy.contains("Place Order").click();
    cy.get('[data-qa="name-on-card"]').type("Jonathan Schneider");
    cy.get('[data-qa="card-number"]').type("4410035");
    cy.get('[data-qa="cvc"]').type("925");
    cy.get('[data-qa="expiry-month"]').type("DE");
    cy.get('[data-qa="expiry-year"]').type("2031");
    cy.get('[data-qa="pay-button"]').click();
    cy.get("p").should("contain", "Your order has been confirmed!");
    cy.contains("Delete Account").click();
    cy.get('[data-qa="account-deleted"]').should("contain", "Account Deleted!");
    cy.get('[data-qa="continue-button"]').click();
  });
  cy.before();
});
