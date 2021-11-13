import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";



const Item = ({ adr, onPress, selected }) => (
  <View style={selected ? styles.itemSelected : styles.item}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.adr}>{adr}</Text>
    </TouchableWithoutFeedback>
  </View>
);

export const Adresses = ({adresses, selectedAddress, setAddress}) => {

  return (
    <View style={styles.container}>
      {adresses.map((item, i) => (
        <Item
          adr={item}
          key={i}
          selected={selectedAddress == i ? true : false}
          onPress={() => {
            setAddress(i);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    width: "90%",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  itemSelected: {
    backgroundColor: "#55c253",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#e6e6e6",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  adr: {
    fontSize: 15,
  },
});
