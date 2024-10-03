class RegisterPage {
    visit() {
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }
  
    fillRegistrationForm(user) {
      cy.get('input[name="customer.firstName"]').type(user.firstName);
      cy.get('input[name="customer.lastName"]').type(user.lastName);
      cy.get('input[name="customer.address.street"]').type(user.address.street);
      cy.get('input[name="customer.address.city"]').type(user.address.city);
      cy.get('input[name="customer.address.state"]').type(user.address.state);
      cy.get('input[name="customer.address.zipCode"]').type(user.address.zipCode);
      cy.get('input[name="customer.phoneNumber"]').type(user.phoneNumber);
      cy.get('input[name="customer.ssn"]').type(user.ssn);
      cy.get('input[name="customer.username"]').type(user.username);
      cy.get('input[name="customer.password"]').type(user.password);
      cy.get('input[name="repeatedPassword"]').type(user.password);
      
      cy.get('input[value="Register"]').click();
    }
  }
  
  export const registerPage = new RegisterPage();
  