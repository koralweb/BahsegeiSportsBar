import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import screensList from '../sreens/screensList';
import {useRoute} from '@react-navigation/native';

const Menu = ({setShowMenu, navigation}) => {
  const screenName = useState(useRoute().name)[0];
  const renderMenuItems = () => {
    return screensList
      .filter(el => el.name !== 'Home')
      .map(screen => (
        <TouchableOpacity
          style={styles.item}
          key={screen.name}
          onPress={() => navigation.push(screen.name)}>
          <Text style={styles.text}>{screen.title}</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <ImageBackground source={require('../images/bg.png')} style={styles.cont}>
      {screenName !== 'Home' && (
        <TouchableOpacity
          onPress={() => setShowMenu(false)}
          style={styles.backBtn}>
          <FontAwesomeIcon icon={'angle-left'} color={'#00BBDC'} />
        </TouchableOpacity>
      )}
      <Image
        source={require('../images/menu_top.png')}
        style={styles.topImage}
      />
      <View style={styles.items}>{renderMenuItems()}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 36,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  backBtn: {
    marginLeft: 20,

  },
  // 1130x420 = 2.69047
  topImage: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  items: {
    paddingHorizontal: 20,
    marginTop: 50,
    width: '90%',
  },
  item: {
    backgroundColor: '#00BBDC',
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default Menu;
