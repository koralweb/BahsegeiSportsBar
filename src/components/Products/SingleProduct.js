import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import stylesGlobal from '../../data/stylesGlobal';
import products from '../../store/products';

const SingleProduct = ({prod, close}) => {
  const [added, setAdded] = useState(prod.added);

  const addProduct = () => {
    setAdded(true);
    products.addProduct(prod.id, 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={close} style={styles.backBtn}>
        <FontAwesomeIcon icon={'angle-left'} size={20} />
      </TouchableOpacity>
      <View>
        <Image source={prod.img} style={styles.image} />
      </View>
      <Text>{prod.name}</Text>
      <Text>{prod.price}р</Text>
      <Text>{prod.desc}</Text>
      {added ? (
        <FontAwesomeIcon icon={'check-circle'} size={50} />
      ) : (
        <TouchableOpacity onPress={addProduct}>
          <Text>Добавить</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ...stylesGlobal,
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    paddingTop: 36,
  },
  backBtn: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default SingleProduct;
