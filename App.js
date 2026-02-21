import {
  ActivityIndicator,
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
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    // console.log('Consultar API ha cambiado...');
    const cotizarCriptoMoneda = async () => {
      if (consultarAPI) {
        // console.log('Cotizando...');
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
        // console.log(url);
        const resultado = await axios.get(url);
        // console.log(resultado.data.DISPLAY[criptoMoneda][moneda]);

        guardarCargando(true);

        // Ocultar el spinner y mostrar el resultado
        setTimeout(() => {
          guardarResultado(resultado.data.DISPLAY[criptoMoneda][moneda]);
          guardarConsultarAPI(false);
          guardarCargando(false);
        }, 3000);
      }
    };

    cotizarCriptoMoneda();
  }, [consultarAPI]);

  const componente = cargando ? (
    <ActivityIndicator size="large" color="#5E49E2" />
  ) : (
    <Cotizacion resultado={resultado} />
  );

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

        <View style={{ marginTop: 40 }}>{componente}</View>
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
