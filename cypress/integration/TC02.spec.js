context("test all ", () => {
	it("visit web", () => {
		cy.visit("https://react-redux.realworld.io/#/?_k=2wi21k");
		cy.location("protocol").should("eq", "https:");
	});
	// describe("Create mark", () => {
	// 	it("sign in", () => {
	// 		cy.xpath('//*[@id="main"]/div/nav/div/ul/li[2]/a').click();
	// 		cy.get('[type = "email"]')
	// 			.type("test35@gmail.com")
	// 			.should("have.value", "test35@gmail.com");
	// 		cy.get('[type="password"]')
	// 			.type("12345678")
	// 			.should("have.value", "12345678");
	// 		cy.get('[type = "submit"]')
	// 			.contains("Sign in")
	// 			.should("be.visible")
	// 			.click();
	// 	});

	// 	it("Create a post", () => {
	// 		cy.contains("New Post").click();
	// 		cy.get('input[placeholder = "Article Title"]').type("Hello Test");
	// 		cy.get('input[placeholder = "What\'s this article about?"]').type(
	// 			"Test Automation 1"
	// 		);
	// 		cy.get('textarea[placeholder="Write your article (in markdown)"]').type(
	// 			"Commodo aliquip occaecat consequat Lorem ipsum sint ipsum officia adipisicing dolor consectetur velit. Officia eiusmod ut quis sit tempor magna elit ipsum. Esse cillum nisi tempor amet nulla labore nulla id aliqua enim veniam quis. Reprehenderit reprehenderit id non qui exercitation aute dolore commodo dolor fugiat reprehenderit ea. Ipsum aliquip labore pariatur eu exercitation laborum aliquip aliquip laborum do qui amet sit qui."
	// 		);
	// 		cy.get('button[type="button"]').click();
	// 		cy.url().should("include", "article");
	// 	});

	// 	it("Go To My Profile", () => {
	// 		cy.contains("Maslider").click();
	// 		cy.get(".ion-heart").eq(3).click();
	// 	});
	// });

	describe("Create mark", () => {
		it("sign in", () => {
			cy.xpath('//*[@id="main"]/div/nav/div/ul/li[2]/a')
				.click()
				.should("have.class", "nav-link");
			cy.get('[type="email"]')
				.type("dftuat1@gmail.com")
				.should("have.value", "dftuat1@gmail.com");
			cy.get('[type="password"]').type("P@ssword1").should("be.visible");
			cy.get('[type="submit"]')
				.contains("Sign in")
				.click()
				.should("be.visible");
		});
		it("Create new post", () => {
			cy.contains("New Post").click();
			cy.get('input[placeholder="Article Title"]')
				.type("Hello Automation Test")
				.should("have.value", "Hello Automation Test");
			cy.get('input[placeholder="What\'s this article about?"]').type(
				"this is about automation test"
			);
			cy.get('textarea[placeholder="Write your article (in markdown)"]').type(
				"สวัสดีครับผมชื่อ memeshe42 เคยทำงานเกี่ยวกับเทสเตอร์มาบ้างแต่เป็นแบบ manual นะ ครั้งนี้ได้ลองใช้ framework ตัวนึงเป็น framework ที่เกี่ยวกับ automated test ชื่อว่า cypress.io บทความนี้ได้ถูกเขียนโดย cypress.io "
			);
		});
	});
});
