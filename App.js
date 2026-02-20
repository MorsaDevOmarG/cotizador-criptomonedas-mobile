import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />

      <Image
        source={require('./assets/img/cryptomonedas.png')}
        style={styles.imagen}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
});

export default App;
