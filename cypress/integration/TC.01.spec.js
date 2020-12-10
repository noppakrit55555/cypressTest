context("test all ", () => {
	it("visit web", () => {
		cy.visit("https://react-redux.realworld.io/#/?_k=2wi21k");
	});
	// describe('Create mark', () => {
	//     it('sign up', () => {
	//         cy.xpath('//*[@id="main"]/div/nav/div/ul/li[3]/a').click().should('be.visible').click()
	//         cy.get('[type = "text"]').type('Maslider').should('have.value', 'Maslider')
	//         cy.get('[type = "email"]').type('test35@gmail.com').should('have.value', 'test35@gmail.com')
	//         cy.get('[type="password"]').type('12345678').should('be.visible')
	//         cy.get('[type = "submit"]').contains('Sign in').should('be.visible').click()
	//             //cy.title('conduit').should('eq', 'conduit')
	//         cy.location('protocol').should('eq', 'https')
	//         cy.contains('Your Feed').should('eq', 'Your Feed')
	//     })

	// })
	describe("Create username and password", () => {
		it("sign-up", () => {
			cy.xpath('//*[@id="main"]/div/nav/div/ul/li[3]/a')
				.click()
				.should("be.visible")
				.click();
			cy.get('[type = "text"]')
				.type("memeshe42")
				.should("have.value", "memeshe42");
			cy.get('[type="email"]')
				.type("dftuat1@gmail.com")
				.should("have.value", "dftuat1@gmail.com");
			cy.get('[type = "password"]').type("P@ssword1").should("be.visible");
			cy.get('[type="submit"]').should("be.visible").click();
		});
	});
});
