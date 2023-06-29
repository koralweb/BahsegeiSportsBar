import React from 'react';
import {StyleSheet, View} from 'react-native';
import Wrapper from '../components/Wrapper';

const HomeScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <View style={styles.cont} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
