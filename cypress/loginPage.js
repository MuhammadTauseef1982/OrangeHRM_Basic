import baseClass from "./baseClass";
const bs = new baseClass();
const login1 = '..\\fixtures\\login.json';
class loginPage{
    credential_Valid_User(Valid_User){
        cy.fixture(login1).then((val)=>{
            bs.write(val.locators.userloc,val.User.username);
            bs.write(val.locators.passloc,val.User.password);
            bs.click(val.locators.loginloc);

            //PIM Module
            bs.click(val.locators.PIM_Module);
            bs.click(val.locators.Pim_emp_add);
            bs.write(val.locators.firstnameloc,val.User.firstname);    
            bs.write(val.locators.middlenameloc,val.User.middlename);    
            bs.write(val.locators.lastnameloc,val.User.lastname); 
            bs.click(val.locators.loginDetails);
            bs.write(val.locators.username_pim_loc,val.User.username_pim); 
            bs.write(val.locators.password_pim_loc,val.User.password_pim); 
            bs.write(val.locators.confirmpassword_pim_loc,val.User.confirmpassword_pim);    
            bs.click(val.locators.save_pim);
            cy.wait(20000);
            bs.click(val.locators.PIM_Module);
            bs.write(val.locators.employee_name,val.User.firstname_symbol)
            cy.wait(10000)
            cy.get(val.locators.employee_name,'{downArrow}')
            cy.wait(2000)
            cy.get(val.locators.employee_name,'{enter}');
            bs.click(val.locators.search_pim);
            cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
            cy.get('.oxd-button--label-danger').click();
            

        })

    }
    // credential_InValid_User(Inalid_User){
    //     cy.fixture(login1).then((val)=>{
    //         bs.write(val.locators.userloc,val.User.username1);
    //         bs.write(val.locators.passloc,val.User.password);
    //         bs.click(val.locators.loginloc);
    //     })
   // }
}
export default loginPage;