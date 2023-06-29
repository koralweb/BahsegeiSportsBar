import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Wrapper from '../components/Wrapper';
import stylesGlobal from '../data/stylesGlobal';
import ThankYou from '../components/ThankYou';

const BookingScreen = ({navigation}) => {
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <Wrapper navigation={navigation}>
      <TouchableOpacity onPress={() => setShowThankYou(true)}>
        <Text>Оформить</Text>
      </TouchableOpacity>
      {showThankYou && <ThankYou navigation={navigation} />}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...stylesGlobal,
});

export default BookingScreen;
