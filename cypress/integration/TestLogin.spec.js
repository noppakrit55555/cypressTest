describe('login dft', () => {
    it("Go to dft", () => {
        cy.visit('http://dftdev.southeastasia.cloudapp.azure.com/DFTTest/UserAuthentication/Login');
    });
    it('input usrname and password', () => {
        cy.get('#email').type('user001@gmail.com');
        cy.get('#password').type('P@ssword1');
        cy.get('[data-bind = "click:Events.Login"]').select('กรีซ', { force: true });
    })
})