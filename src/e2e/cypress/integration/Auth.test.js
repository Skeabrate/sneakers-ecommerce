describe('Sneakers app', () => {
	it('Check if user can log in', () => {
		cy.visit('/');
		cy.findByText('Discover').click();
		cy.findByLabelText('log in').click();
		cy.findByLabelText(/email/).type('sebastianswiecz458@gmail.com');
		cy.findByLabelText(/password/).type('test123');
		cy.get('.sc-cvlWTT > .sc-ieecCq').click();
	});
});
