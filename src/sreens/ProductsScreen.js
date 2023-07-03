import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Wrapper from '../components/Wrapper';
import products from '../store/products';
import SingleProduct from '../components/Products/SingleProduct';
import Product from '../components/Products/Product';

const ProductsScreen = ({navigation}) => {
  const [showOneProduct, setShowOneProduct] = useState(false);
  const [oneProduct, setOneProduct] = useState(null);

  const productClick = prod => {
    setShowOneProduct(true);
    setOneProduct(prod);
  };

  const closeOneProduct = () => {
    setShowOneProduct(false);
    setOneProduct(null);
  };

  const renderProducts = () => {
    return products.list.map(prod => (
      <Product productClick={productClick} prod={prod} key={prod.name} />
    ));
  };

  return (
    <Wrapper navigation={navigation}>
      <ScrollView style={styles.cont}>{renderProducts()}</ScrollView>
      {showOneProduct && (
        <SingleProduct prod={oneProduct} close={closeOneProduct} />
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    alignSelf: "center",
    paddingLeft: 25,
    marginTop: 25,
  },
 
});

export default ProductsScreen;
