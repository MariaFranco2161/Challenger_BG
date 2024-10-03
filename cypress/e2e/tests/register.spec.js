import { registerPage } from '../pages/registerPage';

describe('Registro de usuario', () => {
  it('Debería registrar un usuario nuevo', () => {
    cy.fixture('user').then((user) => {
      registerPage.visit();
      registerPage.fillRegistrationForm(user);
      cy.contains('Your account was created successfully').should('be.visible');
    });
  });

  it('Debería mostrar un mensaje de usuario ya existente', () => {
    cy.fixture('user').then((user) => {
      registerPage.visit();
      registerPage.fillRegistrationForm(user);
      cy.contains('This username already exists.').should('be.visible');
    });
  });
});

  