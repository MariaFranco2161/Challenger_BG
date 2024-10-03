# Proyecto de Pruebas Automatizadas con Cypress

Este proyecto contiene pruebas automatizadas para un portal bancario utilizando Cypress. Las pruebas incluyen funcionalidades como registro, inicio de sesión, retiros y transferencias de dinero entre cuentas.

## Estructura del Proyecto
Se utiliza el patron de diseño **Page Object Model (POM)**, que es uno de los más recomendados para automatización de pruebas ya que permite mantener el código de las pruebas separado de la lógica de interacción con los elementos del DOM.

![image](https://github.com/user-attachments/assets/2745925c-9dee-48c9-855a-a9f81196a1ed)

### Desglose de la Estructura

1. **/e2e**: Contiene los archivos de pruebas. Cada archivo se centra en una funcionalidad específica de la aplicación, como el inicio de sesión, el registro o las transferencias. En cada archivo, se utilizan las instancias de los objetos de página para interactuar con la interfaz de usuario.

2. **/fixtures**: Contiene datos de prueba que pueden ser utilizados por las pruebas para simular diferentes escenarios.

3. **/reports**: Donde se almacenan los reportes generados tras la ejecución de las pruebas. Esto incluye reportes en formato JSON y HTML que son útiles para la revisión de resultados.

### Ventajas del Uso de POM

- **Mantenibilidad**: Los cambios en la interfaz de usuario solo requieren actualizaciones en los objetos de página, no en todas las pruebas individuales.
- **Reutilización**: Se puede reutilizar la lógica de interacción con la UI en diferentes pruebas, reduciendo la duplicación de código.
- **Legibilidad**: Las pruebas son más fáciles de leer y entender, ya que se centran en el comportamiento y no en la implementación técnica.

Implementar el patrón POM en este proyecto asegura que nuestras pruebas sean más limpias, organizadas y fáciles de mantener a lo largo del tiempo.

## Dependencias

- [Cypress](https://www.cypress.io/)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [Mochawesome Merge](https://github.com/adamgruber/mochawesome-merge)
- [Mochawesome Report Generator](https://github.com/adamgruber/mochawesome-report-generator)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL del repositorio>
   cd <nombre del proyecto>

2. Instala las dependencias:
   ```bash
   npm install
   npm install --save-dev mochawesome-report-generator

4. Para ejecutar todas las pruebas, utiliza el siguiente comando:
   ```bash
   npx cypress run
       
5. Para ejecutar todas las pruebas en el browser , utiliza el siguiente comando:
   ```bash
   npx cypress open
consideraciones:
   - Se requiere que se ejecute primero el registro de usuario.
   - en el fixture mock **accountData.json** se debe actualizar el numero de cta (account) que le fue creada para poder realizar la transferencia y el retiro
  
6. Para ejecutar un archivo de prueba específico:
   ```bash
   npx cypress run --spec "cypress/e2e/nombreDelArchivo.spec.js"
   
Generar Reportes
Para generar reportes de las pruebas ejecutadas:

1. Ejecuta las pruebas y genera archivos JSON:
   ```bash
   npx cypress run --reporter mochawesome

3. Luego, ejecuta el comando para combinar los reportes y generar el informe HTML:

   se creo este comando en la seccion de script de package.json
   ```bash 
   npm run generate-report

## Configuración de Cypress

El archivo de configuración de Cypress (`cypress.config.js`) se utiliza para definir diferentes opciones y comportamientos del framework de pruebas. A continuación, se explica cada parte de la configuración utilizada en este proyecto:

**specPattern:** para especificar las rutas de los tests

**reportDir:** 'cypress/reports': Define el directorio donde se guardarán los reportes generados. En este caso, los reportes se almacenarán en la carpeta cypress/reports.

**overwrite:** false: Indica que los reportes existentes no serán sobrescritos. Esto es útil para mantener un historial de ejecuciones.

**html: true:** Habilita la generación de reportes en formato HTML, lo que permite una visualización fácil y atractiva de los resultados.

**json: true:** Habilita la generación de reportes en formato JSON, que puede ser útil para su procesamiento o análisis posterior.

**timestamp: 'yyyy-mm-dd_HH-MM-ss':** Define el formato del timestamp que se agregará a los nombres de los archivos de reporte, ayudando a identificar fácilmente cuándo se generaron.

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'yyyy-mm-dd_HH-MM-ss',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ['cypress/e2e/tests/**/*.spec.js', 'cypress/api/**/*.spec.js'],
  },
});
