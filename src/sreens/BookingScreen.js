import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import stylesGlobal from '../data/stylesGlobal';
import ThankYou from '../components/ThankYou';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BookingScreen = ({navigation, route}) => {
  const [delivery, setDelivery] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');

  useEffect(() => {
    if (route.params) {
      setFirstText('Teslimat');
      setSecondText('Toplamak');
    } else {
      setFirstText('Odada');
      setSecondText('Sokakta');
    }
  }, []);

  return (
    <Wrapper navigation={navigation}>
      <View>
        <View style={styles.cont}>
          <Text style={styles.titleDesc}>İletişim detayları</Text>
          <View style={styles.item}>
            <TextInput placeholder="İsim" style={styles.input} />
            <View style={styles.solid} />
            <TextInput placeholder="Kişiler" style={styles.input} />
            <View style={styles.solid} />
            <TextInput placeholder="+888 555 4444 55" style={styles.input} />
          </View>
        </View>
        <View style={styles.cont}>
          <Text style={styles.titleDesc}>Sipariş türü</Text>
          <View style={styles.inner}>
            <TouchableOpacity
              style={styles.deliveryItem}
              onPress={() => setDelivery(true)}>
              <Text
                style={{
                  ...styles.innerText,
                  color: delivery ? 'green' : 'black',
                }}>
                {firstText}
              </Text>
              {delivery && (
                <FontAwesomeIcon icon={'check-circle'} color={'green'} />
              )}
            </TouchableOpacity>
            <View style={styles.solid} />
            <TouchableOpacity
              style={styles.deliveryItem}
              onPress={() => setDelivery(false)}>
              <Text
                style={{
                  ...styles.innerText,
                  color: !delivery ? 'green' : 'black',
                }}>
                {secondText}
              </Text>
              {!delivery && (
                <FontAwesomeIcon icon={'check-circle'} color={'green'} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setShowThankYou(true)}>
          <Text style={styles.btnText}>Tasarım</Text>
        </TouchableOpacity>
      </View>
      {showThankYou && <ThankYou navigation={navigation} />}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...stylesGlobal,
  cont: {
    marginLeft: 25,
    paddingBottom: 10,
  },
  titleDesc: {
    fontStyle: 'italic',
    marginBottom: 20,
    marginTop: 20,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingLeft: 25,
    width: '90%',
  },
  solid: {
    backgroundColor: 'silver',
    width: '80%',
    height: 1,
  },
  inner: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingLeft: 25,
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  innerText: {
    marginBottom: 20,
    marginTop: 20,
    color: 'black',
    fontWeight: '700',
    marginRight: 10,
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
  },
  btnText: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'white',
  },
  input: {
    height: 30,
    marginTop: 10,
  },
  deliveryItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default BookingScreen;
