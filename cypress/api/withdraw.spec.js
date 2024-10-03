describe('API Tests - Withdraw', () => {
    //const accountId = '24555'; // Cambia esto por un ID de cuenta válido
    //const withdrawAmount = 1; // Monto a retirar

    it('debería retirar dinero con éxito de una cuenta', () => {
        // Realiza la solicitud a la API de retiro
        cy.fixture('accountData').then((withdraw) => {  
            cy.request({
                method: 'POST',
                url: `https://parabank.parasoft.com/parabank/services/bank/withdraw?accountId=${withdraw.account}&amount=${withdraw.amount}`,
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                // Verifica que la respuesta tenga un código de estado 200 o el estado adecuado
                expect(response.status).to.eq(200); // Ajusta esto si el código de estado esperado es diferente

                // Verifica que la respuesta contenga los datos esperados
                expect(response.body).to.include('Successfully'); // Ajusta según la respuesta real

                // Si la API devuelve información sobre el saldo o la cuenta después del retiro, puedes verificar eso también
                //expect(response.body).to.have.property('accountId', accountId);
            });
        });
    });


    it('debería validar si la cuenta existe', () => {
        cy.fixture('accountData').then((withdraw) => {  
            cy.request({
                method: 'POST',
                url: `https://parabank.parasoft.com/parabank/services/bank/withdraw?accountId=${withdraw.accountNotFound}&amount=${withdraw.amount}`,
                failOnStatusCode: false, 
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                // Verifica que la respuesta tenga un código de estado 200 o el estado adecuado
                expect(response.status).to.eq(400); // Ajusta esto si el código de estado esperado es diferente

                // Verifica que la respuesta contenga los datos esperados
                expect(response.body).to.include('Could not find account number'); // Ajusta según la respuesta real

            });
        });    
    });


     /*it('debería fallar al retirar más del saldo disponible', () => {
        const highAmount = 100000000000; // Un monto mayor que el saldo disponible

        cy.request({
            method: 'POST',
            url: `https://parabank.parasoft.com/parabank/services/bank/withdraw?accountId=${accountId}&amount=${highAmount}`,
            headers: {
                'Content-Type': 'application/json',
            },
            //failOnStatusCode: false // Permite manejar códigos de error
        }).then((response) => {
            expect(response.status).to.eq(200); 
            // Verifica que la respuesta contenga un mensaje de error
            expect(response.body).to.include('insufficient funds'); 
        });
    });*/

});
