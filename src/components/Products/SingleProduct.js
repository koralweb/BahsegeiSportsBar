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
      <View style={styles.cart}>
        <Image source={prod.img} style={styles.image} />
        <Text style={styles.name}>{prod.name}</Text>
        <Text style={styles.price}>{prod.price}L</Text>
        <Text style={styles.desc}>{prod.desc}</Text>
      </View>

      {added ? (
        <View style={styles.done}>
          <Text style={styles.btnText}>Katma</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={addProduct} style={styles.btn}>
          <Text style={styles.btnText}>Eklemek</Text>
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
  cart: {
    paddingTop: 36,
    alignItems: 'center',
    marginLeft: 20,
  },
  backBtn: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 80,
    marginBottom: 30,
  },
  name: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  price: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#00BBDC',
    fontWeight: '700',
  },
  desc: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 25,
  },
  btn: {
    backgroundColor: '#00BBDC',
    borderRadius: 25,
    width: '80%',
    height: '10%',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  btnText: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'white',
  },
  done: {
    backgroundColor: '#20E300',
    borderRadius: 25,
    width: '80%',
    height: '10%',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default SingleProduct;
