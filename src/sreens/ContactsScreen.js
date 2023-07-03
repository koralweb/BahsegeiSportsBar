import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';

const ContactsScreen = ({navigation}) => {
  return <Wrapper navigation={navigation}>

        <View style={styles.cont}>
        <Text style={styles.titleDesc}>Address details</Text>
        <View style={styles.item}>
          <Text>Индекс -00001</Text>
          <View style={styles.solid}></View>
          <Text>Город</Text>
          <View style={styles.solid}></View>
          <Text>Страна</Text>
          <View style={styles.solid}></View>
          <Text>Номер 0000 0000 00</Text>
          <View style={styles.solid}></View>
        </View>

        </View>

  </Wrapper>
  
};

const styles = StyleSheet.create({
  cont: {
    marginLeft: 25,
  },
  titleDesc: {
    fontStyle: "italic",
    marginBottom: 20,
    marginTop: 20,
  },
  item: {
    backgroundColor: "white",
    borderRadius: 25,
    paddingLeft: 25,
    width: '90%',
    height: '60%',
    padding: 25,
  },
  solid: {
    backgroundColor: "silver",
    width: '80%',
    height: 1,
    marginBottom: 25,
  },
  
});

export default ContactsScreen;
