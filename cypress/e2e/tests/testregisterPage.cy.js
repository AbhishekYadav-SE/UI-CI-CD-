import registerPage from "../../pages/registerPage"
const registerobj = new registerPage ()
import registerdata from "../../fixtures/registerData.json"

describe( 'Test 1', ()=>{
    it( 'test 1', ()=> {
        registerobj.Openurl()
        registerobj.FirstName(registerdata.registration.FirstName)
        registerobj.LastName(registerdata.registration.LastName)
        registerobj.Email(registerdata.registration.Email)
        registerobj.Telephone(registerdata.registration.Telephone)
        registerobj.Password(registerdata.registration.Password)
        registerobj.PasswordConfirm(registerdata.registration.PasswordConfirm)
        registerobj.Subscirbe()
        registerobj.PrivacyPolicy()
        registerobj.continue()
    })
})