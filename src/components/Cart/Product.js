import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import products from '../../store/products';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Counter from './Counter';

const Product = ({prod}) => {
  return (
    <View style={styles.cont}>
       <Image source={prod.img} style={styles.image} />
      
     <View>
       <Text style={styles.title}>{prod.name}</Text>
       <Text style={styles.price}>{prod.price}р</Text>
     </View>
     <View>
     <TouchableOpacity
        style={styles.remove}
        onPress={() => products.removeProduct(prod.id)}>
        <FontAwesomeIcon icon={'trash'} color={'red'} />
      </TouchableOpacity>
      <Counter />
     </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin : 10,
  },
  cont: {
   flexDirection: "row",
   justifyContent: "space-around",
   backgroundColor: "white",
   width: "90%",
   alignItems: "center",
   alignSelf: "center",
   borderRadius: 30,  
   marginBottom: 20,  
  },
  title: {
    fontSize: 15, 
    fontStyle: "italic", 
    color: "black", 
    paddingBottom: 10,
    width : 150,
  },
  price: {
    fontSize: 15, 
    fontStyle: "italic", 
    color: "#00BBDC", 
  },
});

export default Product;
