import { loginPage } from '../pages/loginPage';

describe('Login de usuario', () => {
  it('Debería logearse con un usuario registrado', () => {
    cy.fixture('user').then((user) => {
      loginPage.visit();
      loginPage.fillLoginForm(user.username, user.password);
      cy.contains('Welcome').should('be.visible');
    });
  });
});
  