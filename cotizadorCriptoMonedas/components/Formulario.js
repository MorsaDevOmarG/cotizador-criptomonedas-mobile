import React, { useState } from 'react';

import { View, Text, StyleSheet } from'react-native';

import { Picker } from '@react-native-picker/picker';

const Formulario = () => {
    const [moneda, guardarMoneda] = useState('');
    const [criptomoneda, guardarCriptoMoneda] = useState('');

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
