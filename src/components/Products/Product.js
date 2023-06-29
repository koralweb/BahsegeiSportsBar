import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Product = ({prod, productClick}) => {
  return (
    <TouchableOpacity key={prod.name} onPress={() => productClick(prod)}>
      <Image source={prod.img} style={styles.img} />
      <Text>{prod.name}</Text>
      <Text>{prod.price}р</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
  },
});

export default Product;
