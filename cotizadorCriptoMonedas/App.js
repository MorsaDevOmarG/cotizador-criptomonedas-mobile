
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';

const App = () => {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptoMoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        console.log('Listo para cotizar...');
  
        // Consultar API para obtener la cotización
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        console.log(url);

        const resultado = await axios.get(url);
        console.log(resultado.data.DISPLAY[criptomoneda][moneda]);

        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);

        guardarConsultarAPI(false);
      }
    };

    cotizarCriptomoneda();

    console.log('ConsultarAPI ha cambiado...');
  }, [consultarAPI]);

  return (
    <ScrollView>
      <Header />

      <Image 
        style={styles.imagen}
        source= { require('./assets/img/cryptomonedas.png') }
      />

      <View style={styles.contenido}>
        <Formulario 
          moneda={moneda}
          criptomoneda={criptomoneda}
          guardarMoneda={guardarMoneda}
          guardarCriptoMoneda={guardarCriptoMoneda}
          guardarConsultarAPI={guardarConsultarAPI}
        />
      </View>

      <Cotizacion 
        resultado={resultado}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },

  contenido: {
    marginHorizontal: '2.5%'
  },
});

export default App;
