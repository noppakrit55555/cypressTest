it('ไปหน้าเว็บบแอดมิน', () => {
    cy.visit('https://localhost:44306/AdminAuthentication/Login')
})
it('กรอกอีเมลและรหัสผ่านแอดมิน', () => {
    cy.get('#email').type('admin1@gmail.com')
    cy.get('#password').type('1234')
    cy.get('[data-bind="click:Events.Login"]').click()
        //cy.visit('https://localhost:44306/AdminRegisterAccount/CitizenRegisterList')
        // cy.get('[data-bind="click:$root.Events.AcceptTask,Hidden:Status()!=_Const.DocStatus.WaitingForApproval"]').click()

})

/*it('รับงาน', () => {
    // cy.get('[data-bind="click:$root.Events.AcceptTask"]').click()
    //cy.get('[data-bind="click:Events.AcceptTaskConfirm"]').click({ force: true })
})*/