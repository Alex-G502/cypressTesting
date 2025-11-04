/// <reference types="cypress" />
describe("API Testing Introduction", () => {
  it("API 1: Get All Products List", () => {
    cy.request({
      method: "GET",
      url: "https://automationexercise.com/api/productsList",
      failOnStatusCode: false,
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(200);
    });
  });
  it("API 2: POST To All Products List", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/productsList",
      failOnStatusCode: false,
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(405);
    });
  });
  it("API 3: Get All Brands List", () => {
    cy.request({
      method: "GET",
      url: "https://automationexercise.com/api/brandsList",
      failOnStatusCode: false,
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(200);
    });
  });
  it("API 4: PUT To All Brands List", () => {
    cy.request({
      method: "PUT",
      url: "https://automationexercise.com/api/brandsList",
      failOnStatusCode: false,
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(405);
    });
  });
  it("API 5: POST To Search Product", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/searchProduct",
      form: true,
      body: { search_product: "top" },
      failOnStatusCode: false,
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(200);
    });
  });
  it("API 6: POST To Search Product without search_product parameter", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/searchProduct",
      failOnStatusCode: false,
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(400);
    });
  });
  it("API 7: POST To Verify Login with valid details", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/verifyLogin",
      form: true,
      body: { email: "jona@than.com", password: "ichbinjonathan536" },
      failOnStatusCode: false,
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(200);
    });
  });
  it("API 8: POST To Verify Login without email parameter", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/verifyLogin",
      // form:true OR body depending on API requirement
      form: true,
      body: { password: "ichbinjonathan536" },
      failOnStatusCode: false,
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(400);
    });
  });
  it("API 9: DELETE To Verify Login", () => {
    cy.request({
      method: "DELETE",
      url: "https://automationexercise.com/api/verifyLogin",
      failOnStatusCode: false,
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(405);
    });
  });
  it("API 10: POST To Verify Login with invalid details", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/verifyLogin",
      form: true,
      body: {
        email: "jonas@doof.com",
        password: "jonasistcool787",
      },
      failOnStatusCode: false,
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(404);
    });
  });
  it("API 11: POST To Create/Register User Account", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/createAccount",
      form: true,
      body: {
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
        failOnStatusCode: false,
      },
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(201);
    });
  });
  it("API 12: DELETE METHOD To Delete User Account", () => {
    cy.request({
      method: "DELETE",
      url: "https://automationexercise.com/api/deleteAccount",
      form: true,
      body: {
        email: "jona@thans.com",
        password: "ichbinjonathan536",
      },
      failOnStatusCode: false,
    }).then((res) => {
      console.log("Response is " + res);
      const parsedBody = JSON.parse(res.body);
      expect(parsedBody.responseCode).to.eq(200);
    });
  });
});
