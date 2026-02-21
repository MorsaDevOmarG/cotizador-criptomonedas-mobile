# Proyecto: Cotizador Cripto Monedas

- Creación proyecto:
  - **_npx @react-native-community/cli init nombreProyecto_**

## Herramientas y/o Tecnologías

- React
- Google Fonts
  - Añadiendo un tipo de Letra, dentro de la página de _Google Fonts_ la descargamos y ya la podemos agregar a nuestro proyecto.
  - Una vez creado, debemos crear un archivo:
    - **react-native.config.js**
  - Con la siguiente configuración:
    - ```
        module.exports = {
          project: {
            ios: {},
            android: {},
          },
          assets: ['./assets/fonts/'],
        };
      ```
  - Debemos ejecutar el siguiente comando:
    - **_npx react-native link_**
    - **_npx react-native-asset_**
  - Después debemos reiniciar el servidor, es decir; detener la _app_ y volver a correrla.
- Picker
  - **_npm install @react-native-community/picker --save_**
  - Si marca error esa instalación, ejecutamos:
    - **_npm install @react-native-picker/picker --save_**
- API
  - _https://developers.coindesk.com/documentation/legacy/Price/SingleSymbolPriceEndpoint_
  - Dentro de la página nos vamos al apartado de:
  - **TopLists**
    - **Toplist by Market Cap Full Data**
  - El consumo de la _API_ lo haremos con la librería de _AXIOS_
    - **_npm i --save axios_**
  -

### Notas
