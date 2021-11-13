import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

export const Payment = ({ cards, payment, setPayment }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={payment}
        onValueChange={(itemValue, itemIndex) => setPayment(itemIndex)}
        style={styles.picker}
      >
        {cards.map((item, i) => (
          <Picker.Item label={item} value={i} key={i} />
        ))}
      </Picker>
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
  picker: {
    width: "90%",
    height: 20,
  },
});
