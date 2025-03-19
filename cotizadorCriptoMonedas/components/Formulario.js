import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet } from'react-native';

import { Picker } from '@react-native-picker/picker';

import axios from 'axios';

const Formulario = () => {
    const [moneda, guardarMoneda] = useState('');
    const [criptomoneda, guardarCriptoMoneda] = useState('');
    const [criptomonedas, guardarCriptoMonedas] = useState('');

    useEffect( () => {
        const consultarAPI =  async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);

            console.log(resultado.data.Data);
            guardarCriptoMonedas(resultado.data.Data);
        };

        consultarAPI();
    }, []);

    const obtenerMoneda = moneda => {
        console.log('obtener moneda', moneda);

        guardarMoneda(moneda);
    };

    return (
        <View>
            <Text style={styles.label}>Moneda</Text>

            <Picker
            selectedValue={moneda}
                onValueChange={ moneda => obtenerMoneda(moneda) }
            >
                <Picker.Item label="- Seleccione -" value="USD" />
                <Picker.Item label="Dolar de Estados Unidos"  value="USD" />
                <Picker.Item label="Peso Mexicano"  value="MXN" />
                <Picker.Item label="Euro"  value="" />
                <Picker.Item label="Libra Esterlina"  value="GBP" />
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>
        </View>
    )
};

const styles = StyleSheet.create(
    {
        label: {
            fontFamily: 'Lato-Black',
            textTransform: 'uppercase',
            fontSize: 22,
            marginVertical: 20
        },
    }
);

export default Formulario;
