/*describe('My first cypress test', () => {
    it('Navigate to ea site', () => {
        cy.visit('http://dftdev.southeastasia.cloudapp.azure.com/DFTTest/UserAuthentication/Login')
    })
    it('login failed ', () => {
        cy.get('#email').type('test01@gmail.com')
        cy.get('#password').type('P@sswod1')
            //cy.get('button').click()
    })
})*/


describe('Test facebook Login', () => {
    it('login facebook', () => {
        cy.wait(1000)
        cy.visit('https://www.tafasu.com')
        cy.wait(2000)
        cy.get('#onesignal-popover-cancel-button').click()
        cy.xpath('//*[@id="myNavbar"]/ul[2]/li/a/span[1]').click()
        cy.xpath('//*[@id="login-dp"]/li/div/div/form/div[1]/input').type('aom2405')
        cy.xpath('//*[@id="login-dp"]/li/div/div/form/div[2]/input').type('dftuat1234')



    })


})