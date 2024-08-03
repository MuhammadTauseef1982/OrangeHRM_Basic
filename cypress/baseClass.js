class baseClass {
    write(loc,data) 
        {
            try
            {
                cy.get(loc).type(data);
            }
            catch(error)
            {
                console.log(error,"locator or test data are not defined...");
            }
        }   
    click(loc)
        {
            try
            {
                 cy.get(loc).click();   
            }
            catch
            {
                console.log(error,"locator is not defined...");
            }
        }
}
export default baseClass;