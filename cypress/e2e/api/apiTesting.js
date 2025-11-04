describe("API Testing Introduction", () => {
  it("API 1: Get All Products List", () => {
    cy.request("GET", "https://automationexercise.com/api/productsList").should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
  it("API 2: POST To All Products List", () => {
    cy.request(
      "POST",
      "https://automationexercise.com/api/productsList"
    ).should((response) => {
      expect(response.status).to.eq(405);
    });
  });
  it("API 3: Get All Brands List", () => {
    cy.request("GET", "https://automationexercise.com/api/brandsList").should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
  it("API 4: PUT To All Brands List", () => {
    cy.request("PUT", "https://automationexercise.com/api/brandsList").should(
      (response) => {
        expect(response.status).to.eq(405);
      }
    );
  });
  it("API 5: POST To Search Product", () => {
    cy.request("POST", "https://automationexercise.com/api/searchProduct", {
      search_product: "top",
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("API 6: POST To Search Product without search_product parameter", () => {
    cy.request(
      "POST",
      "https://automationexercise.com/api/searchProduct"
    ).should((response) => {
      expect(response.status).to.eq(400);
    });
  });
  it("API 7: POST To Verify Login with valid details", () => {
    cy.request("POST", "https://automationexercise.com/api/verifyLogin", {
      email: "jona@than.com",
      password: "ichbinjonathan536",
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("API 8: POST To Verify Login without email parameter", () => {
    cy.request("POST", "https://automationexercise.com/api/verifyLogin", {
      password: "ichbinjonathan536",
    }).should((response) => {
      expect(response.status).to.eq(400);
    });
  });
  it("API 9: DELETE To Verify Login", () => {
    cy.request(
      "DELETE",
      "https://automationexercise.com/api/verifyLogin"
    ).should((response) => {
      expect(response.status).to.eq(405);
    });
  });
  it("API 10: POST To Verify Login with invalid details", () => {
    cy.request("POST", "https://automationexercise.com/api/verifyLogin", {
      email: "jonas@doof.com",
      password: "jonasistcool787",
    }).should((response) => {
      expect(response.status).to.eq(404);
    });
  });
  it("API 11: POST To Create/Register User Account", () => {
    cy.request("POST", "https://automationexercise.com/api/createAccount", {
      name: "Jonathan",
      email: "jona@thans.com",
      password: "ichbinjonathan536",
      title: "Mr",
      birth_date: "27",
      birth_month: "5",
      birth_year: "1900",
      firstname: "Jonathan",
      lastname: "Schneider",
      company: "Hiyah",
      address1: "Koenigsforst 3",
      address2: "Unicorn Street 5",
      country: "Australia",
      zipcode: "515",
      state: "Unicorn Island",
      city: "Sydney",
      mobile_number: "5278127857915",
    }).should((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
