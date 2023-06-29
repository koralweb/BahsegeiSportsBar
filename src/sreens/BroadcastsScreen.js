import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import broadcastsList from '../data/broadcastsList';

const BroadcastsScreen = ({navigation}) => {
  const renderItems = () => {
    return (
      broadcastsList
        // .filter(el => el.date >= new Date().getDate())
        .map(item => (
          <View key={Math.random()}>
            <Text>{item.liga}</Text>
            <Text>
              {item.date}.06.2023 - {item.time}
            </Text>
            <Text>{item.team1}</Text>
            <Text>{item.team2}</Text>
          </View>
        ))
    );
  };

  return (
    <Wrapper navigation={navigation}>
      <ScrollView style={styles.cont}>{renderItems()}</ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({});

export default BroadcastsScreen;
