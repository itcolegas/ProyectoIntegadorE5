import React, { useState } from "react";
import { Adresses } from "../components/Adresses";
import { StyleSheet, View, Text, Button, Modal, Pressable } from "react-native";
import { Header } from "../components/Header";
import { Payment } from "../components/Payment";
import { TextInput } from "react-native-gesture-handler";
import { NewCard } from "../components/NewCard";

const adresses = [
  "One Microsoft Way, Redmond, WA",
  "One Apple Park Way, Cupertino, CA",
  "1600 Amphitheatre Pkwy, Mountain View, CA",
];

const cards = ["AMEX: XX-0613", "VISA: XX-2013", "MASTERCARD: XX-4200"];

export default function Checkout() {
  const [payment, setPayment] = useState();
  const [selectedAddress, setAddress] = useState();
  const [modalVisibleCard, setModalVisibleCard] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Select the address for delivery</Text>
      <Text style={styles.adresses}> Addresses </Text>
      <Adresses
        adresses={adresses}
        selectedAddress={selectedAddress}
        setAddress={setAddress}
      />

      <NewCard
        modalVisible={modalVisibleCard}
        setModalVisible={setModalVisibleCard}
      />

      <View>
        <Button title={"Add new Address"} />
      </View>

        <Text style={styles.adresses}> Select Payment Method </Text>
        <Payment cards={cards} payment={payment} setPayment={setPayment} />
        <View>
          <Button
            title={"Add new Card"}
            onPress={() => setModalVisibleCard(true)}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  adresses: {
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
});
