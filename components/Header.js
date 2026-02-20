import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

const Header = () => {
  return <Text style={styles.encabezado}>Criptomonedas</Text>;
};

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5E49E2',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 10,
    marginBottom: 30,
    textTransform: 'uppercase',
  },
});

export default Header;
