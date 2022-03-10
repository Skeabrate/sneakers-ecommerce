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
	});
});
