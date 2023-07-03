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
      <Text style={styles.title}>Благодарим за ваш заказ!!!</Text>
      <Text style={styles.desc}>Наши менеджеры свяжутся с вами в ближайшее время</Text>
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
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 15,
    fontStyle: "italic",
  },
  desc: {
    fontSize: 15,
    alignSelf: "center",
    fontStyle: "italic",
    width: '90%',
  },
});

export default ThankYou;
