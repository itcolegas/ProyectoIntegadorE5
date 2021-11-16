import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Item = ({ product }) => (
  <View style={styles.item}>
    <Image source={product.image} style={{ width: 50, height: 50 }} />
    <Text style={styles.pname}>{product.name}</Text>
    <Text style={styles.pcost}>${product.cost}</Text>
  </View>
);

export const Cart = ({ cart }) => {
  let totalCost = cart.reduce((sum, p) => sum + p.cost, 0);
  return (
    <View style={styles.container}>
      {cart && cart.map((item, i) => <Item product={item} key={i} />)}
      <View >
        <Text style={styles.pname}>Total: </Text>
        <Text style={styles.pcost}>${totalCost}</Text>
      </View>
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
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#e6e6e6",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  total: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#e6e6e6",
    width: "90%",
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  pname: {
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: "bold",
  },
  pcost: {
    fontSize: 15,
    marginLeft: 15,
  },
});
