class LoginPage {
    visit() {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    }
  
    fillLoginForm(username, password) {
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password);
      cy.get('input[value="Log In"]').click();
    }
  }
  
  export const loginPage = new LoginPage();
  