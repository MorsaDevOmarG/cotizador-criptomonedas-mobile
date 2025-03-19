import React from 'react';

import { View, Text, StyleSheet } from'react-native';

import { Picker } from '@react-native-picker/picker';

const Formulario = () => {
    return (
        <View>
            <Text style={styles.label}>Moneda</Text>

            <Picker>
                <Picker.Item label="- Seleccione -" value="USD" />
                <Picker.Item label="- EUA -" value="USD" />
                <Picker.Item label="- MX -" value="MXN" />
                <Picker.Item label="- EURO -" value="" />
                <Picker.Item label="- LIBRA ESTERLINA -" value="GBP" />
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
