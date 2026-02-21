import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  return <Text>{resultado.PRICE}</Text>;
};

const styles = StyleSheet.create({});

export default Cotizacion;
