/**
 * This file covers the testcases related to registration/signup page
 */

describe("User should be able to sign up", () => {
  beforeEach("Navigating to the url", () => {
    cy.visit("/login");
  });

  const email = `jona_${Date.now()}@than.com`; // This generates a random Email for easy signup

  /**
   * Signing up a new user with all the valid information
   */
  it("Signing up a new Account", () => {
    cy.getByDataQA("signup-name").type("Jonathan");
    cy.getByDataQA("signup-email").type(email);
    cy.get('[data-qa="signup-button"]').click();
    //Filling out Signup Form
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
    cy.get('[data-qa="account-created"]').should("contain", "Account Created!"); //Verifying Account creation
  });
  /**
   * Negative testcase - Error should come if any field is empty --
   */
  it("Signup button is disabled if name and email address is not provided ", () => {
    cy.visit("/login");
    cy.getByDataQA("signup-button").click().should("contain", "Signup");
    cy.getByDataQA("signup-name").type("Jonathan");
    cy.getByDataQA("signup-button").click().should("contain", "Signup");
    cy.getByDataQA("signup-email").type("hereweare");
    cy.getByDataQA("signup-button").click().should("contain", "Signup");
  });

  it("Signup button is disabled if name and email address already exists", () => {
    cy.visit("/login");
    cy.getByDataQA("signup-name").type("Jonathan");
    cy.getByDataQA("signup-email").type("jona@than.com");
    cy.getByDataQA("signup-button").click();
    cy.contains("Email Address already exist")
      .should("contain", "Email Address already exist!")
      .log("Successfully failed signup");
  });
});
