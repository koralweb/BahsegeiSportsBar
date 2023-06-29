import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import products from '../store/products';

const ThankYou = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      products.removeAllProducts();
      navigation.push('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.cont}>
      <Text>Благодарим за ваш заказ!!!</Text>
      <Text>Наши менеджеры свяжутся с вами в ближайшее время</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ThankYou;
