import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Product = ({prod, productClick}) => {
  return (
    <TouchableOpacity key={prod.name} onPress={() => productClick(prod)}>
      <View style={styles.cart}>
       <Image source={prod.img} style={styles.img} />
       <Text style={styles.name}>{prod.name}</Text>
       <Text style={styles.price}>{prod.price}р</Text>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 80,
  },
  cart: {
    backgroundColor: "white",
    width: "80%",
    height: 280,
    alignSelf: "center",
    alignContent: "center",
    borderRadius: 20,
    marginBottom: 20,
   
  },
  name: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    fontStyle: "italic",
  },
  price: {
    fontSize: 20,
    alignSelf: "center",
    color: "#00BBDC",
    fontWeight: "700",

  },
});

export default Product;
