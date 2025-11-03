/**
 * This Page is for testing the availability of the Test Cases Page
 */
describe("TestingTheTestCasePage", () => {
  it("TestCasePage", () => {
    cy.visit("http://automationexercise.com/test_cases");
    cy.get(".title.text-center").should("contain", "Test Cases"); // Verifies that the Test Case Page is visible
  });
});
