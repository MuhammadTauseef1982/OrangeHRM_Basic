import baseClass from "./baseClass";
const bs = new baseClass();
const login1 = "..\\fixtures\\login.json";

class deleteuser{

    User_Deleted(){
        cy.fixture(login1).then((val)=>{
            cy.wait(2000);
            bs.click(val.locators.admin);
            bs.write(val.locators.sysUserloc,val.User.empUserName);
            bs.click(val.locators.searchUserloc);
            bs.click(val.locators.editUserloc);
            cy.wait(2000);
            cy.get(val.locators.editUserNameloc).clear();
            bs.write(val.locators.sysUserloc,val.User.NewempUserName);
            bs.click(val.locators.savechanges);
            bs.write(val.locators.sysUserloc1,val.User.NewempUserName);    
            bs.click(val.locators.searchUserloc1);
            bs.click(val.locators.DeleteUser1);
            bs.click(val.locators.DeleteUser2);

        })
    }
}
export default deleteuser;