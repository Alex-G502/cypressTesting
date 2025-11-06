describe("Day 6 Assignment - Dynamic Content & Lists", () => {
  // Test 1: Product Iteration ✅
  it("should verify all products have add-to-cart button enabled", () => {
    // 1. Visit products page
    cy.visit("/products");
    // 2. Iterate through ALL products (use .each())
    cy.get(".single-products").each(($el) => {
      // 3. Verify each product has add-to-cart button
      cy.wrap($el).should("contain", "Add to cart");
      // 4. Verify button is visible and enabled
      cy.contains("Add to cart")
        .should("be.visible")
        .and("not.contain", ".overlay-content");
    });
    // 5. Log the total count of products checked
    cy.get(".single-products")
      .its("length")
      .then((length) => {
        cy.log(length);
      });
  });
  // Test 2: Finding Specific Product ✅
  it("should find and add specific product to cart by name", () => {
    // 1. Visit products page
    cy.visit("/products");
    // 2. Search through products to find one containing "Top"
    cy.get(".single-products:contains('Top')")
      .first()
      .within(($el) => {
        // 3. Within that product, click add-to-cart
        cy.get('[data-product-id="1"]').first().click();
      });
    // 4. Handle the modal (click Continue Shopping)
    cy.get('[data-dismiss="modal"]').click();
    // 5. Verify modal disappears
    cy.get('[data-dismiss="modal"]').should("not.be.visible");
  });
  // Test 3: Extract and Use Data ✅
  it("should extract product price and verify format", () => {
    // 1. Visit products page
    cy.visit("/products");
    // 2. Get the first product's price
    cy.get(".single-products")
      .first()
      .within(() => {
        cy.get("h2")
          // 3. Extract the price text using .invoke('text')
          .invoke("text")
          .then((price) => {
            // 4. Log the price
            cy.log(price);
            // 5. Verify it contains "Rs."
            expect(price).to.contain("Rs.");
            // 6. Verify it has a number using regex: /\d+/
            expect(price).to.match(/\d+/);
          });
      });
  });
  // Test 4: Category Navigation ✅
  it("should navigate through all category levels", () => {
    // 1. Visit homepage
    cy.visit("/");
    // 2. In sidebar, click "Women" category to expand
    cy.get(".left-sidebar").contains("Women").click();
    // 3. Verify subcategories appear (Dress, Tops, Saree)
    cy.get("#Women").should("contain", "Dress");
    cy.get("#Women").should("contain", "Tops");
    cy.get("#Women").should("contain", "Saree");
    // 4. Click on "Tops"
    cy.get("#Women").contains("Tops").click();
    // 5. Verify URL changes
    cy.url().should("include", "/category_products/2");
    // 6. Verify page title contains "Women - Tops Products"
    cy.get("h2").should("contain", "Women - Tops Products");
  });
  // Test 5: Multiple Products to Cart ✅
  it("should add 3 products to cart and verify count", () => {
    // 1. Visit products page
    cy.visit("/products");
    // 2. Add first product to cart (handle modal)
    cy.get('[data-product-id="1"]').first().click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('[data-dismiss="modal"]').should("not.be.visible");
    // 3. Add second product to cart (handle modal)
    cy.get('[data-product-id="2"]').first().click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('[data-dismiss="modal"]').should("not.be.visible");
    // 4. Add third product to cart (handle modal)
    cy.get('[data-product-id="3"]').first().click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('[data-dismiss="modal"]').should("not.be.visible");
    // 5. Click "View Cart"
    cy.get('a[href="/view_cart"]').first().click();
    // 6. Verify cart has 3 items (count table rows)
    cy.get("tbody tr").should("have.length", 3);
  });
  // Test 6: Search with Multiple Terms ✅
  it("should search for multiple products and compare results", () => {
    // 1. Visit products page
    cy.visit("/products");

    // 2. Search for "dress"
    cy.get("input[name='search']").type("dress");
    cy.get("#submit_search").click();

    // 3. Count results and store count
    cy.get(".single-products")
      .its("length")
      .then((productWithDressCount) => {
        // 4. Go back to all products
        cy.get("a[href='/products']").click();

        // 5. Search for "top"
        cy.get("input[name='search']").type("top");
        cy.get("#submit_search").click();

        // 6. Count results
        cy.get(".single-products")
          .its("length")
          .then((productWithTopCount) => {
            // 7. Log both counts and compare
            cy.log(`Products with Dress: ${productWithDressCount}`);
            cy.log(`Products with Top: ${productWithTopCount}`);
            expect(productWithDressCount).to.be.lessThan(productWithTopCount);
          });
      });
  });
  // Test 7: Handling Slow Loading ✅
  it("should handle page load and verify all elements", () => {
    // 1. Visit homepage
    cy.visit("/");
    // 2. Wait for page to fully load (no loading spinner)
    //  cy.get(".spinner", { timeout: 10000 }).should("not.exist");
    //  cy.wait(1000);
    // 3. Verify featured items section is visible
    cy.get("h2").should("contain", "Features Items");
    // 4. Verify brands list is visible
    cy.get(".brands-name").each(($el) => {
      cy.wrap($el).should("be.visible");
    });
    // 5. Verify categories are visible
    cy.get(".left-sidebar").each(($el) => {
      cy.wrap($el).should("be.visible");
    });
    // 6. Count and log total number of products
    cy.get(".single-products")
      .its("length")
      .then((length) => {
        cy.log(`Total products: ${length}`);
      });
  });
  // Test 8: Extract All Brand Names
  it("should extract all brand names into an array", () => {
    // 1. Visit products page
    cy.visit("/products");
    // 2. Create empty array
    let brands = [];
    // 3. Iterate through all brands in sidebar
    cy.get(".brands-name ul li a")
      .each(($el) => {
        // 4. Extract each brand name and add to array
        const text = $el
          .text()
          .trim()
          .replace(/\(\d+\)\s*/, "");
        if (text) brands.push(text);
      })
      .then(() => {
        // 5. Log the complete array
        cy.log("Brands found: " + brands.join(", "));
        // 6. Verify array has more than 5 brands
        expect(brands).to.have.length.greaterThan(5);
      });
  });
});
