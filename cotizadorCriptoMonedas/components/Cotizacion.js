import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Cotizacion = (
    {
        resultado
    }
) => {
    if ( Object.keys(resultado).length === 0 ) {
        return null;
    }

    return (
        <View>
            <Text>{resultado.PRICE}</Text>
        </View>
    )
};

const styles = StyleSheet.create(
    {

    }
);

export default Cotizacion;
