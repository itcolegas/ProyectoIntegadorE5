import React, { useState } from "react";
import { Adresses } from "../components/Adresses";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Header } from "../components/Header";

import { Cart } from "../components/Cart";

const adresses = [
  "One Microsoft Way, Redmond, WA",
  "One Apple Park Way, Cupertino, CA",
  "1600 Amphitheatre Pkwy, Mountain View, CA",
];

const cards = ["AMEX: XX-0613", "VISA: XX-2013", "MASTERCARD: XX-4200"];

export default function CartSum({ route, navigation }) {
  const [payment, setPayment] = useState();
  const [selectedAddress, setAddress] = useState();
  const [modalVisibleCard, setModalVisibleCard] = useState(false);
  const [modalVisibleAddr, setModalVisibleAddr] = useState(false);
  const { cart } = route.params;

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.summary}> Your Cart </Text>
      <Cart cart={cart} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Checkout", {cart: cart})}
      >
        <Text style={styles.bt}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  summary: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  title: {
    justifyContent: "center",
    fontSize: 18,
    padding: 10,
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgb(33, 150, 243)",
    padding: 10,
    margin: 5,
    marginTop: 25,
    width: "90%",
  },
  bt: {
    color: "white",
    fontWeight: "bold",
  },
});
