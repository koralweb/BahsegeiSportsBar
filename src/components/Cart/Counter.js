import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = () => {
  const [cnt, setCnt] = useState(1);

  const inc = () => {
    setCnt(cnt + 1);
  };

  const dec = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={dec}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{cnt}</Text>
      <TouchableOpacity onPress={inc}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#00BBDC",
    borderRadius: 10,
    width: 50,
    justifyContent: "center",
  },
  text: {
    fontSize: 17, 
    fontStyle: "italic", 
    color: "white", 
    paddingLeft: 3, 
    paddingRight: 3, 
  },
});

export default Counter;
