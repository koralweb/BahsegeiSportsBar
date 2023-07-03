import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, TextInput,} from 'react-native';
import Wrapper from '../components/Wrapper';
import stylesGlobal from '../data/stylesGlobal';
import ThankYou from '../components/ThankYou';

const BookingScreen = ({navigation}) => {
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <Wrapper navigation={navigation}>
      <TouchableOpacity onPress={() => setShowThankYou(true)}>
        <Text style={styles.title}>Бронирование столика</Text>
        <View style={styles.cont}>
        <Text style={styles.titleDesc}>Address details</Text>
        <View style={styles.item}>
          <TextInput placeholder='Name'></TextInput>
          <View style={styles.solid}></View>
          <TextInput placeholder='Address'></TextInput>
          <View style={styles.solid}></View>
          <TextInput placeholder='+888 555 4444 55'></TextInput>
        </View>

        </View>
        <View style={styles.cont}>
        <Text style={styles.titleDesc}>Delivery method</Text>
        <View style={styles.inner}>
          <Text style={styles.innerText}>Door delivery</Text>
          <View style={styles.solid}></View>
          <Text  style={styles.innerText}>Pick up</Text>
        </View>

        </View>
        <TouchableOpacity style={styles.btn}>
         <Text style={styles.btnText}>Оформить</Text>
        </TouchableOpacity>
        
      </TouchableOpacity>
      {showThankYou && <ThankYou navigation={navigation} />}
    </Wrapper>
  ); 
};

const styles = StyleSheet.create({
  ...stylesGlobal,
  title: {
    fontSize: 25,
    alignSelf: "center",
    marginBottom: 25,
    fontStyle: "italic",
  },
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
  },
  solid: {
    backgroundColor: "silver",
    width: '80%',
    height: 1,
  },
  inner: {
    backgroundColor: "white",
    borderRadius: 25,
    paddingLeft: 25,
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  innerText: {
    marginBottom: 20,
    marginTop: 20,
    color: "black",
  },
  btn: {
    backgroundColor: "#00BBDC",
    borderRadius: 25,
    width: '80%',
    height: '10%',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 150,
  },
  btnText: {
    fontSize: 18,
    alignSelf: "center",
    color: "white",
  },
});

export default BookingScreen;
