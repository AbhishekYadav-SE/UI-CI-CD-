class registerPage {
    webloactors = {
        FirstName : "input[name='firstname']",
        LastName: "input[name='lastname']",
        Email : "input[name='email']",
        Telephone : "input[name='telephone']",
        Password : "input[name='password']",
        PasswordConfirm : "#input-confirm",
        Subscirbe : "input[name='newsletter']",
        PrivacyPolicy : "input[name='agree']",
        continue : "input[value='Continue']"
    }

    Openurl(){
        cy.visit(Cypress.env(url))
    }

    FirstName(FirstName){
        cy.get(this.webloactors.FirstName).type(FirstName)
    }
    
    LastName(LastName){
        cy.get(this.webloactors.LastName).type(LastName)
    }

    Email(Email){
        cy.get(this.webloactors.Email).type(Email)
    }
    
    Telephone(Telephone){
        cy.get(this.webloactors.Telephone).type(Telephone)
    }
    
    Password(Password){
        cy.get(this.webloactors.Password).type(Password)
    }
    
    PasswordConfirm(PasswordConfirm){
        cy.get(this.webloactors.PasswordConfirm).type(PasswordConfirm)
    }
     
    Subscirbe(){
        cy.get(this.webloactors.Subscirbe).check()
    }

    PrivacyPolicy(){
        cy.get(this.webloactors.PrivacyPolicy).check()

    }

    continue(){
        cy.get(this.webloactors.continue).click()
    }
}

export default registerPage
