import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Formulario = () => {
  const [moneda, guardarMoneda] = useState('');
  const [criptoMoneda, guardarCriptoMoneda] = useState('');
  const [criptoMonedas, guardarCriptoMonedas] = useState('');

  const obtenerMoneda = moneda => {
    console.log(moneda);
    guardarMoneda(moneda);
  };

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

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>

      <Picker
        selectedValue={moneda}
        onValueChange={itemValue => obtenerMoneda(itemValue)}
      >
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>
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
});

export default Formulario;
