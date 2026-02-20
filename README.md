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
    ```

    ```
  - Debemos ejecutar el siguiente comando:
    - **_npx react-native link_**
  - Después debemos reiniciar el servidor, es decir; detener la _app_ y volver a correrla.

### Notas
