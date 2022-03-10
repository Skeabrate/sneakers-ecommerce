describe('Buying sneakers', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.findByText('Discover').click();
		cy.findByLabelText('log in').click();
		cy.findByLabelText(/email/).type('sebastianswiecz458@gmail.com');
		cy.findByLabelText(/password/).type('test123');
		cy.get('.sc-cvlWTT > .sc-ieecCq').click();
		cy.findByText(/profile/).should('exist');
	});

	it('Check if user can add sneakers to cart, finalize the transaction and find his order ID in his profile shopping history', () => {
		cy.visit('/allproducts/page/1');
		// use searchbar to find product
		cy.findByPlaceholderText('search')
			.type('ULTRABOOST 21 COLD.RDY SHOE')
			.type('{enter}');

		// set up filters
		cy.findByText('category').click();
		cy.findByText('Running').click();
		cy.findByText('gender').click();
		cy.findByText('Men').click();

		// go to product page
		cy.get('.sc-gWXbKe > img').click();

		// choose shoe size
		cy.get(':nth-child(15) > button').click();

		// type amount in input
		cy.get('input').type('5');

		// increase amount by pressing plus button twice
		for (let i = 0; i < 2; i++) {
			cy.findByLabelText('increase amount of products').click();
		}

		// decrease amont
		cy.findByLabelText('decrease amount of products').click();

		cy.findByText('Add to cart').click();
		cy.findByText('Added to your bag').should('exist');
		cy.findByLabelText('cart').click();

		// Add product to wishlist
		cy.findByText('Add to Wishlist').click();
		cy.findByText('Added to wishlist').should('exist');
	});
});
