import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import broadcastsList from '../data/broadcastsList';

const BroadcastsScreen = ({navigation}) => {
  const renderItems = () => {
    return broadcastsList
      .filter(el => el.date >= new Date().getDate())
      .map(item => (
        <View key={Math.random()} style={styles.wrp}>
          <Text style={styles.liga}>{item.liga}</Text>
          <View style={styles.desc}>
            <Text style={styles.time}>
              {item.date}.06.2023 - {item.time}
            </Text>
            <Text style={styles.team}>{item.team1}</Text>
            <View style={styles.solid} />
            <Text style={styles.team}>{item.team2}</Text>
          </View>
        </View>
      ));
  };

  return (
    <Wrapper navigation={navigation}>
      <ScrollView style={styles.cont}>{renderItems()}</ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    marginLeft: 30,
  },
  wrp: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    marginBottom: 10,
    height: '8%',
    borderRadius: 30,
  },
  liga: {
    width: '40%',
    paddingLeft: 10,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FEAC23',
    fontSize: 23,
    fontWeight: '600',
  },
  desc: {
    alignSelf: 'center',
    textAlign: 'center',
    paddingLeft: 10,
  },
  time: {
    fontSize: 18,
    color: 'black',
    fontStyle: 'italic',
    paddingBottom: 5,
  },
  team: {
    fontSize: 15,
    paddingBottom: 5,
    paddingTop: 5,
  },
  solid: {
    backgroundColor: 'silver',
    width: '80%',
    height: 1,
  },
});

export default BroadcastsScreen;
