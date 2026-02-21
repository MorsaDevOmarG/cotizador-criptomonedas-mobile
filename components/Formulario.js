import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Formulario = () => {
  const [moneda, guardarMoneda] = useState('');
  const [criptoMoneda, guardarCriptoMoneda] = useState('');
  const [criptoMonedas, guardarCriptoMonedas] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);
      // console.log(resultado.data.Data);
      guardarCriptoMonedas(resultado.data.Data);
    };

    consultarAPI();
  }, []);

  // almacena las selecciones del usuario
  const obtenerMoneda = moneda => {
    // console.log(moneda);
    guardarMoneda(moneda);
  };

  const obtenerCriptoMoneda = cripto => {
    // console.log(cripto);
    guardarCriptoMoneda(cripto);
  };

  const cotizarPrecio = () => {
    console.log('Cotizando...');
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>

      <Picker
        selectedValue={moneda}
        onValueChange={itemValue => obtenerMoneda(itemValue)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>

      <Picker
        selectedValue={criptoMoneda}
        onValueChange={itemValue => obtenerCriptoMoneda(itemValue)}
      >
        <Picker.Item label="- Seleccione -" value="" />
        {criptoMonedas.map(cripto => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>

      <TouchableHighlight
        style={styles.btnCotizar}
        onPress={() => cotizarPrecio()}
      >
        <Text style={styles.btnTextoCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
  btnCotizar: {
    backgroundColor: '#5E49E2',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  btnTextoCotizar: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Formulario;
