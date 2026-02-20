import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

const Header = () => {
  return <Text style={styles.encabezado}>Criptomonedas</Text>;
};

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
  },
});

export default Header;
