import registerPage from "../../pages/registerPage"
const registerobj = new registerPage ()
import registerdata from "../../fixtures/registerData.json"

describe( 'Test 1', ()=>{
    it( 'test 1', ()=> {
        registerobj.Openurl()
        registerobj.FirstName(registerdata.FirstName)
        registerobj.LastName(registerdata.LastName)
        registerobj.Email(registerdata.Email)
        registerobj.Telephone(registerdata.Telephone)
        registerobj.Password(registerdata.Password)
        registerobj.PasswordConfirm(registerdata.PasswordConfirm)
        registerobj.Subscirbe()
        registerobj.PrivacyPolicy()
        registerobj.continue()
    })
})