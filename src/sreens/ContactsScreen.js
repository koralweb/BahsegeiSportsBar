import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';

const ContactsScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <View style={styles.cont}>
        <View style={styles.item}>
          <Text>Dizin - 34522</Text>
          <View style={styles.solid} />
          <Text>Beylikdüzü Cd., Istanbul, İstanbul </Text>
          <View style={styles.solid} />
          <Text>Turkey</Text>
          <View style={styles.solid} />
          <Text>+905319671242</Text>
          <View style={styles.solid} />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingHorizontal: '5%',
  },
  item: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingLeft: 25,
    width: '100%',
    height: '60%',
    padding: 25,
  },
  solid: {
    backgroundColor: 'silver',
    width: '80%',
    height: 1,
    marginBottom: 25,
  },
});

export default ContactsScreen;
