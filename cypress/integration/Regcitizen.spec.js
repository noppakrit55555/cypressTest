describe('About Register', () => {
    it('Go to Register DFT', () => {
        cy.visit('http://dftdev.southeastasia.cloudapp.azure.com/DFTTest/UserAuthentication/Login');

    });
    it('กดปุ่มสสมัครบัญชี', () => {
        cy.get('[data-bind = "click:Events.Register"]').click();
    });
    it('เลือกประเภทบัญชี บุคคลธรรมดา', () => {
        cy.xpath('//*[@id="mainbody"]/div/div/div[2]/a').click()
    });
    it('ยอมรับเงื่อนไขและดำเนินการต่อ', () => {
        cy.get('[data-bind = "checked:Data.AcceptTerm"]').click()
        cy.get('[data-bind = "click:Events.OpenRegister"]').click()
        cy.wait(500);
    });
    it('กรอกอีเมล', () => {
        cy.get('#Email').type('test1@gmail.com');
        cy.get('#ConfirmEmail').click();
        cy.wait(500)
        cy.get('#OTP').type('888888');
        cy.get('[data-bind = "click:Events.CorrectEmail"]').click()
            /* cy.get('#Password').type('P@ssword1');
             cy.get('#ConfirmPassword').type('P@ssword1')*/
    });
    it('กรอกรหัสผ่านและยืนยันรหัสผ่าน', () => {
        cy.get('#Password').type('P@ssword2').should('have.value', 'P@ssword2')
        cy.get('#ConfirmPassword').type('P@ssword2').should('have.value', 'P@ssword2')
    });
    it('อัพโหลดโปรไฟล์', () => {
        const image01 = '03.jpg';
        cy.get('#UploadProfile').attachFile(image01);
    });
    it('เลือกประเทศที่ออกเอกสาร คนไทย', () => {
        cy.get('[data-select2-id="IssuedByCountry"]').select('ไทย', { force: true });
    });
    it('กรอกเลขบัตรประชาชนและเลขหลังบัตร', () => {
        cy.get('#CitizenID').type('4594098530544');
        cy.get('#LaserID').type('12345');
    });
    it('กรอกวันที่ออกเอกสาร และ วันหมดอายุ', () => {
        cy.get('#IssuedDate').type('10/08/2560') //วันที่ออก
        cy.get('#ExpiredDate').type('10/08/2562')
    });
    it('กรอกชื่อและนามสกุล ไทย และ อังกฤษ', () => {
        cy.get('[data-select2-id="NameThPrefix"]').select('นาย', { force: true })
        cy.get('#NameThFirstName').type('เทส')
        cy.get('#NameThLastName').type('เทส')
        cy.get('[data-select2-id="NameEnPrefix"]').select('Mister', { force: true })
        cy.get('#NameEnFirstName').type('test')
        cy.get('#NameEnLastName').type('test')
    });
    it('กรอกวัน/เดือน/ปีเกิด', () => {
        cy.get('#BirthdayDate').type('18/05/2538')
    });
    it('เลือก เพศ', () => {
        cy.get('#GenderM').check('M')
    });
    it('เลือกสัญชาติ', () => {
        cy.get('[data-select2-id="Nationality"]').select('ไทย', { force: true })
    });
    it('กรอกที่อยู่ภาษาไทยตามบัตรประชาชน', () => {
        cy.get('#AddressThBuilding').type('ไทยคู่ฟ้า')
        cy.get('#AddressThVillage').type('หมู่บ้านไทยวัฒนา')
        cy.get('#AddressThNumber').type('100/451')
        cy.get('#AddressThMoo').type('4')
        cy.get('#AddressThSoi').type('ประชาราษฎร์')
        cy.get('#AddressThRoad').type('วงศ์สว่าง')
        cy.get('[data-select2-id="AddressThProvince"]').select('กรุงเทพมหานคร', { force: true })
        cy.get('[data-select2-id="AddressThDistrict"]').select('บางซื่อ', { force: true })
        cy.get('[data-select2-id="AddressThSubDistrict"]').select('บางซื่อ', { force: true })
        cy.get('[data-select2-id="AddressThPostCode"]').select('10800', { force: true })
    });
    it('กรอกที่อยู่ตามบัตรประชาชน ภาษาอังกฤษ', () => {
        cy.get('#AddressEnBuilding').type('Thai Koo Fah')
        cy.get('#AddressEnVillage').type('Moo-Ban Thai Wattana')
        cy.get('#AddressEnNumber').type('100/451')
        cy.get('#AddressEnMoo').type('4')
        cy.get('#AddressEnSoi').type('Pracharat')
        cy.get('#AddressEnRoad').type('Wongsawang')
    });
    it('ที่อยู่ที่สามารถติดต่อได้', () => {
        cy.get('[data-bind="checked:Data.UseIDAddress"]').click()
    });
    it('ใช่ที่อยู่จากด้านบน กดปุ่มใช้ที่อยู่', () => {
        cy.get('[data-bind="click:Events.CopyAddress"]').click()
    })
    it('กรอกเบอโทรศัพท์', () => {
        cy.get('#MobileNo').type('0872553456')
        cy.get('#FaxNo').type('029222268')
    });
    it('อัพโหลดรูปคู่บัตร ปชช', () => {
        const image01 = '03.jpg';
        cy.get('#UploadSelfie').attachFile(image01);
        cy.get('#UploadID').attachFile(image01);


    });

    it('ส่งคำขอ โคตรพ่อบัค', () => {
        /*cy.get('#Password').clear()
        cy.get('#ConfirmPassword').clear()
        cy.get('#Password').type('P@ssword1');
        cy.get('#ConfirmPassword').type('P@ssword1')
        cy.get('#LaserID').clear()
        cy.get('#LaserID').type('JT00797039');
        cy.get('#NameEnLastName').clear()
        cy.get('#NameEnLastName').type('Khanggrang')*/
        cy.get('[data-bind="click:Events.Send"]').click({ force: true }).should('not.have.class', 'disable')
        cy.wait(3000)
        cy.get('[data-bind="click:Events.SendConfirm"]').click({ force: true })
        cy.wait(2000)
    })
    context('Admin', () => {
        beforeEach(() => {
                /*const baseurl = 'https://localhost:44306/';
                var admin = 'AdminAuthentication/Login';
                var dashboard = 'AdminDashboard';*/

                //cy.visit('http://dftdev.southeastasia.cloudapp.azure.com/DFTTest/AdminAuthentication/Login');
            })
            /*it('login admin', () => {
                cy.get('#email').type('admin1@gmail.com');
                cy.get('#password').type('1234')
                cy.get('[data-bind="click:Events.Login"]').click();
                cy.wait(2000)
                cy.visit('http://dftdev.southeastasia.cloudapp.azure.com/DFTTest/AdminRegisterAccount/CitizenRegisterList')
                cy.wait(2000)
                cy.get('[data-bind="click:$root.Events.AcceptTask,Hidden:Status()!=_Const.DocStatus.WaitingForApproval"]').click()
                cy.wait(2000)
                cy.get('[data-bind="click:Events.AcceptTaskConfirm"]').click({ force: true })
                cy.wait(1000)
                cy.get('#litab2').click()

                cy.get('[data-bind="click:$root.Events.Edit"]').first().invoke('removeAttr', 'target').click()
                cy.get('.select2-selection__arrow').click()
                cy.get('ul').contains('อนุมัติ/เปิดใช้งาน').click()
                cy.get('[data-bind="click:Events.Save,Hidden:Data.ViewOnly()"]').click()
            })*/

    })



})