describe('Test file upload', () => {
    it('Go to file upload', () => {
        cy.visit('https://fineuploader.com/demos.html');
    })
    it('upload file', () => {
        const image01 = '03.jpg';
        cy.get('[name="qqfile"]').attachFile(image01);
    })
})