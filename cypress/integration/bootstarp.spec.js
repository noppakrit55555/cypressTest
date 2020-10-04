describe('About test ui by automated test', () => {
    it('Go to web test', () => {
        cy.visit('http://localhost:8080/index.html')
        cy.wait(2000)
    });
    it('input firstname and lastname', () => {
        cy.get('[name = "first_name"]').type('Noppakrit').should('be.value', 'Noppakrit')
        cy.get('[name = "last_name"]').type('Kasiansin').should('be.value', 'Kasiansin')
    });
    it('input birth of date', () => {
        cy.xpath('/html/body/div[1]/div/div/div/form/div[2]/div[1]/div/div/i').type('24/05/1999')

        cy.wait(500)
    });
    it('select gender male or female', () => {
        cy.get('[type = "radio"]').check('M')
    });
    it('input email', () => {
        cy.get(':nth-child(3) > :nth-child(1) > .input-group > .input--style-4').type('noppakrit_om@hotmail.com')
    });
    it('input telephone no.', () => {
        cy.get('[name = "phone"]').type('0957643007').should('have.value', '0957643007')
    });
    it('select jobs', () => {
            cy.get('.select2-selection__arrow').click()
            cy.wait(3000)
            cy.get('[name = "job"]').select('Tester', { force: true })
        })
        /*it('select country', () => {
            cy.get('.select2-selection__arrow').click()
            cy.get('[name = "country"]').select('Thailand', { force: true })
        })*/
})