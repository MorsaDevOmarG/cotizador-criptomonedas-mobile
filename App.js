import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import { useState } from 'react';

const App = () => {
  const [moneda, guardarMoneda] = useState('');
  const [criptoMoneda, guardarCriptoMoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);

  return (
    <>
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
