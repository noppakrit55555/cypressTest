context('test all ', () => {
    it('visit web', () => {
        cy.visit('https://react-redux.realworld.io/#/?_k=2wi21k')
        cy.location('protocol').should('eq', 'https:')
    })
    describe('Create mark', () => {
        it('sign in', () => {
            cy.xpath('//*[@id="main"]/div/nav/div/ul/li[2]/a').click()
            cy.get('[type = "email"]').type('test35@gmail.com', { delay: 70 }).should('have.value', 'test35@gmail.com')
            cy.get('[type="password"]').type('12345678', { delay: 70 }).should('have.value', '12345678')
            cy.get('[type = "submit"]').contains('Sign in').should('be.visible').click()
        })

        it('Create a post', () => {
            cy.contains('New Post').click()
            cy.get('input[placeholder = "Article Title"]').type('Hello Test')
            cy.get('input[placeholder = "What\'s this article about?"]').type('Test Automation 1')
            cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Commodo aliquip occaecat consequat Lorem ipsum sint ipsum officia adipisicing dolor consectetur velit. Officia eiusmod ut quis sit tempor magna elit ipsum. Esse cillum nisi tempor amet nulla labore nulla id aliqua enim veniam quis. Reprehenderit reprehenderit id non qui exercitation aute dolore commodo dolor fugiat reprehenderit ea. Ipsum aliquip labore pariatur eu exercitation laborum aliquip aliquip laborum do qui amet sit qui.', { delay: 20 })
            cy.get('button[type="button"]').click()
            cy.url().should('include', 'article')
        })

        it('Go To My Profile', () => {
            cy.contains('Maslider').click()
            cy.get('.ion-heart').eq(3).click()


        })

    })


})