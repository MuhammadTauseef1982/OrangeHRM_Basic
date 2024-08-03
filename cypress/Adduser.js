import baseClass from "./baseClass";
const bs = new baseClass();
const login1 = "..\\fixtures\\login.json";


class Adduser{
    
    
    Useraddition(){
       
        cy.fixture(login1).then((val)=>{
       
            bs.click(val.locators.admin);
            bs.click(val.locators.userbutton);
            bs.write(val.locators.userroleloc,val.User.userrole,'{enter}');
            
            cy.get(val.locators.userroleloc).type('{enter}')
            bs.write(val.locators.empNameloc,val.User.empName) 
            cy.wait(2000)
            cy.get(val.locators.empNameloc).type('{downArrow}')
            cy.wait(2000)
            cy.get(val.locators.empNameloc).type('{enter}');
            bs.write(val.locators.empStatusloc,val.User.empStatus)
            cy.wait(2000)
            cy.get(val.locators.empStatusloc).type('{enter}');
            bs.write(val.locators.empUserNameloc,val.User.empUserName);
            bs.write(val.locators.empPasswordloc,val.User.empPassword);
            bs.write(val.locators.empConfirmPasswordloc,val.User.empConfirmPassword);
            bs.click(val.locators.empSubmit);




        })
    }
}
export default Adduser;