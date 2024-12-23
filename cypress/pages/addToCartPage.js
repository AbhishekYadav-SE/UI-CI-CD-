class addtocart {
    weblocators = {
        search : ".form-control.input-lg",
        click_search : ".input-group-btn",
        addtocart : "//*[@id='content']/div[3]/div[1]/div/div[2]/div[2]/button[1]",
        message : ".alert.alert-success.alert-dismissible"
    }

    search(search){
        cy.get(this.weblocators.search).type(search)
    }

    click_search(){
        cy.get(this.weblocators.click_search).click()
    }

    addtocart(){
        cy.xpath(this.weblocators.addtocart).click()
    }

    message(){
        return cy.get(this.weblocators.message)
    }
}

export default addtocart