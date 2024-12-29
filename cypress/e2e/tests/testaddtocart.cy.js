// import addtocart from "../../pages/addToCartPage"
// const addtocartobj = new addtocart()
// import registionData from "../../fixtures/registerData.json"

// describe(" Product should be added on cart", ()=>{
//     cy.login (registionData.login.Email, registionData.login.Password)

//         it(" Product should be Added on cart",()=>{
//             addtocartobj.search(registionData.search.Product)
//             addtocartobj.click_search()
//             addtocartobj.addtocart()
//             addtocartobj.message()
//             .should('contain', registionData.message.SuccessMessage)
//             .and('contain',registionData.message.SuccessMessage)


//     })
// })


import addtocart from "../../pages/addToCartPage";
const addtocartobj = new addtocart();
import registionData from "../../fixtures/registerData.json";

describe("Product should be added on cart", () => {
  // Run login before each test
  beforeEach(() => {
    cy.login(registionData.login.Email, registionData.login.Password);
  });

  it("Product should be Added on cart", () => {
    addtocartobj.search(registionData.search.Product);
    addtocartobj.click_search();
    addtocartobj.addtocart();
    addtocartobj
      .message()
      .should("contain", registionData.message.SuccessMessage)
      .and("contain", registionData.message.SuccessMessage);
  });
});

