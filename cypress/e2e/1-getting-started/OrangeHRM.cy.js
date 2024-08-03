/// <reference types="cypress" />
import baseClass from "../../baseClass";
import loginPage from "../../loginPage";
import Adduser from "../../Adduser";
import deleteuser from "../../deleteuser";

describe('Orange HRM Website', () => {
  const loginObj = new loginPage();
  const userObj = new Adduser();
  const deleteObj = new deleteuser();
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  beforeEach(() => {
    cy.viewport(1200, 600);
    cy.wait(5000).then(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
  })

  // it('Login Page',()=>{

  // // loginObj.credential_InValid_User();     
  //  //loginObj.credential_Valid_User();

  // })
  it('Login Page', () => {
    loginObj.credential_Valid_User();
    // userObj.Useraddition();
    // deleteObj.User_Deleted(); 


  })


})

