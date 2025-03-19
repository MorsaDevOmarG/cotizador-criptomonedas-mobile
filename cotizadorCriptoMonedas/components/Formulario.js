import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TouchableHighlight } from'react-native';

import { Picker } from '@react-native-picker/picker';

import axios from 'axios';

const Formulario = () => {
    const [moneda, guardarMoneda] = useState('');
    const [criptomoneda, guardarCriptoMoneda] = useState('');
    const [criptomonedas, guardarCriptoMonedas] = useState([]);

    useEffect( () => {
        const consultarAPI =  async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);

            console.log(resultado.data.Data);
            guardarCriptoMonedas(resultado.data.Data);
        };

        consultarAPI();
    }, []);

    // Almacen las selección del Usuario
    const obtenerMoneda = moneda => {
        console.log('obtener moneda', moneda);

        guardarMoneda(moneda);
    };

    const obtenerCriptoMoneda = cripto => {
        console.log('obtener criptomoneda', cripto);

        guardarCriptoMoneda(cripto);
    };

    const cotizarPrecio = () => {
        console.log('cotizando...');
    };

    return (
        <View>
            <Text style={styles.label}>Moneda</Text>

            <Picker
                selectedValue={moneda}
                onValueChange={ moneda => obtenerMoneda(moneda) }
                itemStyle={ { height: 120 } }
            >
                <Picker.Item label="- Seleccione -" value="" />
                <Picker.Item label="Dolar de Estados Unidos"  value="USD" />
                <Picker.Item label="Peso Mexicano"  value="MXN" />
                <Picker.Item label="Euro"  value="EUR" />
                <Picker.Item label="Libra Esterlina"  value="GBP" />
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>

            <Picker
                selectedValue={criptomoneda}
                onValueChange={ cripto => obtenerCriptoMoneda(cripto) }
                itemStyle={ { height: 120 } }
            >
                <Picker.Item label="- Seleccione -" value="" />
                {
                    criptomonedas.map( cripto => (
                        <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
                    ))
                }
            </Picker>

            <TouchableHighlight
                style={styles.btnCotizar}
                onPress={() => cotizarPrecio()}
            >
                <Text style={styles.textoCotizar}>Cotizar</Text>
            </TouchableHighlight>
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

        btnCotizar: {
            backgroundColor: '#5E49E2',
            padding: 10,
            marginTop: 20
        },

        textoCotizar: {
            color: '#FFF',
            fontFamily: 'Lato-Black',
            fontSize: 18,
            textAlign: 'center',
            textTransform: 'uppercase'
        }
    }
);

export default Formulario;
