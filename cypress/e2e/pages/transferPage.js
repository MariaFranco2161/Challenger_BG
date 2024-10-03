class TransferPage {
    visit() {
      cy.visit('https://parabank.parasoft.com/parabank/transfer.htm');
    }
  
    fillTransferForm(fromAccount, toAccount, amount) {
      cy.get('#fromAccountId').select(fromAccount);
      cy.get('#toAccountId').select(toAccount);
      cy.get('#amount').invoke('val', amount).trigger('input');

      cy.get('input[value="Transfer"]').click();
    }
  }
  
  export const transferPage = new TransferPage();