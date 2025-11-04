describe("Day 4 Assignment - Form Testing", () => {
  it("should login with valid credentials", () => {
    cy.visit("https://automationexercise.com/login");
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
    cy.contains("Continue").first().click();
    cy.contains("Logout").first().click();
    cy.get('[data-qa="login-email"]').type("jona@than.com");
    cy.get('[data-qa="login-password"]').type("ichbinjonathan536");
    cy.get('[data-qa="login-button"]').click();
    cy.get("b").should("contain", "Jonathan");
    cy.contains("Delete Account").click();
    cy.get('[data-qa="account-deleted"]').should("contain", "Account Deleted!");
    cy.get('[data-qa="continue-button"]').click();
  });

  it("should show error for invalid credentials", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type("jonas@doof.com");
    cy.get('[data-qa="login-password"]').type("jonasistcool787");
    cy.get('[data-qa="login-button').click();
    cy.contains("Your email or password is incorrect!").should(
      "contain",
      "Your email or password is incorrect!"
    );
  });

  it("should subscribe to newsletter", () => {
    cy.visit("http://automationexercise.com");
    cy.get("h2").should("contain", "Features Items");
    cy.get("#susbscribe_email").type("jona@than.com");
    cy.get("#subscribe").click();
    cy.contains("You have been successfully subscribed!").should(
      "contain",
      "You have been successfully subscribed!"
    );
  });

  it("should add a review to a product", () => {
    cy.visit("http://automationexercise.com");
    cy.get("h2").should("contain", "Features Items");
    cy.contains("Products").click();
    cy.get('[href="/product_details/1"]').click();
    cy.get(".product-information").should(
      "contain",
      "Blue Top",
      "Category",
      "Price",
      "Availability",
      "Condition",
      "Brand"
    );
    cy.get("#name").type("Jonathan Schneider");
    cy.get("#email").type("jona@than.com");
    cy.get("#review").type(
      "This Product is awesome! Its really cheap and the quality is insanely good. There is no Shipping Cost and it came in 1 day. Nice! 5 Stars :)"
    );
    cy.get("#button-review").click();
    cy.get("span").should("contain", "Thank you for your review.");
  });

  it("should search for products using search form", () => {
    cy.visit("http://automationexercise.com");
    cy.get("h2").should("contain", "Features Items");
    cy.contains("Products").click();
    cy.get(".title.text-center").should("contain", "All Products");
    cy.get("#search_product").should("have.attr", "type", "text").type("dress");
    cy.get("#submit_search").click();
    cy.get(".title.text-center").should("contain", "Searched Products");
    cy.get(".productinfo.text-center").should("contain", "Dress");
    cy.get("#search_product").should("have.attr", "value", "dress");
  });
});
