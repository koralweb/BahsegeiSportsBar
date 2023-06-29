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
          <TouchableOpacity onPress={() => navigation.push('Order')}>
            <Text>Оформить</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View>
            <Text>Корзина пуста</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.push('Market')}>
            <Text>В магазин</Text>
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
});

export default observer(CartScreen);
