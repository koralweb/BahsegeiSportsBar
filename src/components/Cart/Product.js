import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import products from '../../store/products';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Counter from './Counter';

const Product = ({prod}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.remove}
        onPress={() => products.removeProduct(prod.id)}>
        <FontAwesomeIcon icon={'trash'} color={'red'} />
      </TouchableOpacity>
      <Image source={prod.img} style={styles.image} />
      <Text style={styles.title}>{prod.name}</Text>
      <Text style={styles.price}>{prod.price}р</Text>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default Product;
