describe('About register', () => {
    it('Go to juristic', () => {
        cy.visit('https://localhost:44306/UserAuthentication/Login');
    });
    it('การสมัครบัญชี', () => {
        cy.get('[data-bind = "click:Events.Register"]').click();
    });
    it('เลือกประเภทบัญชี บุคคลธรรมดา', () => {
        cy.xpath('//*[@id="mainbody"]/div/div/div[1]/a').click()
    });
    it('เริ่ม', () => {
        cy.get('[data-bind="click:Events.StartRegister"]').click()
    })
    it('ยอมรับเงื่อนไข ข้อตกลง', () => {
        cy.get('[data-bind = "checked:Data.AcceptTerm"]').click()
        cy.get('[data-bind = "click:Events.OpenRegister"]').click()
        cy.wait(500);
    })
    it('กรอกอีเมลและยืนยัน OTP', () => {
        cy.get('#Email').type('test7@gmail.com');
        cy.get('#ConfirmEmail').click();
        cy.wait(500)
        cy.get('#OTP').type('888888');
        cy.get('[data-bind = "click:Events.CorrectEmail"]').click()
        cy.get('#Password').type('P@ssword1');
        cy.get('#ConfirmPassword').type('P@ssword1')
    })
});