import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [moneda, guardarMoneda] = useState('');
  const [criptoMoneda, guardarCriptoMoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    // console.log('Consultar API ha cambiado...');
    const cotizarCriptoMoneda = async () => {
      if (consultarAPI) {
        // console.log('Cotizando...');
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
        // console.log(url);
        const resultado = await axios.get(url);
        // console.log(resultado.data.DISPLAY[criptoMoneda][moneda]);
        guardarResultado(resultado.data.DISPLAY[criptoMoneda][moneda]);

        guardarConsultarAPI(false);
      }
    };

    cotizarCriptoMoneda();
  }, [consultarAPI]);

  return (
    <>
      <ScrollView>
        <Header />

        <Image
          source={require('./assets/img/cryptomonedas.png')}
          style={styles.imagen}
        />

        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            criptoMoneda={criptoMoneda}
            guardarMoneda={guardarMoneda}
            guardarCriptoMoneda={guardarCriptoMoneda}
            guardarConsultarAPI={guardarConsultarAPI}
          />
        </View>

        <Cotizacion resultado={resultado} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },

  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
