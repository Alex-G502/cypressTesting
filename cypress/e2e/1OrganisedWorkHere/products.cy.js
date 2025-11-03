describe('User should be able to search and view a Product', () => {
    beforeEach('Navigating to the url',()=>{
    cy.visit('/products')        //Testing only the Products Website
    })
    it('should be able to see all products',()=>{
        cy.get('.title.text-center').should('contain',"All Products")
        cy.get('[href="/product_details/1"]')
        .click()
        cy.get('.product-information').should('contain',"Blue Top") 
        //Checking for each Attribute
        .and('contain',"Category")
        .and('contain',"Quantity")
        .and('contain',"Rs. 500")
        .and('contain',"Availability")
        .and('contain',"Condition")
        .and('contain',"Brand")
    })
    it('should search for products using search form', () => {              
        cy.get('.title.text-center').should('contain',"All Products")
        cy.get('#search_product').should('have.attr', 'type', 'text')
        .type('dress')
        cy.get('#submit_search')
        .click()
        cy.get('.title.text-center').should('contain',"Searched Products")
        cy.get('.productinfo.text-center').should('contain',"Dress")
        cy.get('#search_product').should('have.attr', 'value', 'dress')
        cy.log('Search works successfully') // Log -- Verifies if the Search works
    })
})