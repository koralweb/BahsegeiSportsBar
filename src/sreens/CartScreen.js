import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import products from '../store/products';
import stylesGlobal from '../data/stylesGlobal';
import {observer} from 'mobx-react-lite';
import Product from '../components/Cart/Product';

const CartScreen = ({navigation}) => {
  const renderProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => <Product key={prod.name} prod={prod} />);
  };

  return (
    <Wrapper navigation={navigation}>
      {products.list.some(el => el.added) ? (
        <>
          <ScrollView style={styles.cont}>{renderProducts()}</ScrollView>
          <TouchableOpacity
            style={styles.btnCart}
            onPress={() => navigation.push('Order', {cart: true})}>
            <Text style={styles.btnTextCart}>Tasarım</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.cartTitle}>
            <Text style={styles.cartText}>Kart boş</Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push('Market')}>
            <Text style={styles.btnText}>Mağazaya</Text>
          </TouchableOpacity>
        </>
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...stylesGlobal,
  cont: {
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
  remove: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 100,
  },
  cartTitle: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 45,
    marginBottom: 45,
    fontStyle: 'italic',
  },
  cartText: {
    fontSize: 25,
    fontStyle: 'italic',
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
    marginTop: 450,
  },
  btnText: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'white',
  },
  btnCart: {
    backgroundColor: '#00BBDC',
    borderRadius: 25,
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
  },
  btnTextCart: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'white',
  },
});

export default observer(CartScreen);
