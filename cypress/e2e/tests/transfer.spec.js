import { loginPage } from '../pages/loginPage';
import { transferPage } from '../pages/transferPage';

describe('Transferencia de dinero', () => {
  it('Debería permitir transferir dinero entre dos cuentas', () => {
    cy.fixture('user').then((user) => {
      loginPage.visit();
      loginPage.fillLoginForm(user.username, user.password);
      cy.fixture('accountData').then((accountData) => {  
        transferPage.visit();
        transferPage.fillTransferForm(accountData.account, accountData.account, 10);  // IDs de cuenta de ejemplo
        
        cy.contains('Transfer Complete').should('be.visible');
      });
    });
  });
});
  