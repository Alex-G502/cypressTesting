describe('Day 6 Assignment - Dynamic Content & Lists', () => {
// Test 1: Product Iteration
it('should verify all products have add-to-cart button enabled', () => {
// TODO:
// 1. Visit products page
// 2. Iterate through ALL products (use .each())
// 3. Verify each product has add-to-cart button
// 4. Verify button is visible and enabled
// 5. Log the total count of products checked
})
// Test 2: Finding Specific Product
it('should find and add specific product to cart by name', () => {
// TODO:
// 1. Visit products page
// 2. Search through products to find one containing "Top"
// 3. Within that product, click add-to-cart
// 4. Handle the modal (click Continue Shopping)
// 5. Verify modal disappears
})
// Test 3: Extract and Use Data
it('should extract product price and verify format', () => {
// TODO:
// 1. Visit products page
// 2. Get the first product's price
// 3. Extract the price text using .invoke('text')
// 4. Log the price
// 5. Verify it contains "Rs."
// 6. Verify it has a number using regex: /\d+/
})
// Test 4: Category Navigation
it('should navigate through all category levels', () => {
// TODO:
// 1. Visit homepage
// 2. In sidebar, click "Women" category to expand
// 3. Verify subcategories appear (Dress, Tops, Saree)
// 4. Click on "Tops"
// 5. Verify URL changes
// 6. Verify page title contains "Women - Tops Products"
})
// Test 5: Multiple Products to Cart
it('should add 3 products to cart and verify count', () => {
// TODO:
// 1. Visit products page
// 2. Add first product to cart (handle modal)
// 3. Add second product to cart (handle modal)
// 4. Add third product to cart (handle modal)
// 5. Click "View Cart"
// 6. Verify cart has 3 items (count table rows)
})
// Test 6: Search with Multiple Terms
it('should search for multiple products and compare results', () => {
// TODO:
// 1. Visit products page
// 2. Search for "dress"
// 3. Count results and store count
// 4. Go back to all products
// 5. Search for "top"
// 6. Count results
// 7. Log both counts and compare
})
// Test 7: Handling Slow Loading
it('should handle page load and verify all elements', () => {
// TODO:
// 1. Visit products page
// 2. Wait for page to fully load (no loading spinner)
// 3. Verify featured items section is visible
// 4. Verify brands list is visible
// 5. Verify categories are visible
// 6. Count and log total number of products
})
// Test 8: Extract All Brand Names
it('should extract all brand names into an array', () => {
// TODO:
// 1. Visit products page
// 2. Create empty array
// 3. Iterate through all brands in sidebar
// 4. Extract each brand name and add to array
// 5. Log the complete array
// 6. Verify array has more than 5 brands
})
