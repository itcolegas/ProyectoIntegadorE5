import React, { useState } from "react";
import { Adresses } from "../components/Adresses";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from "react-native";
import { Header } from "../components/Header";
import { Payment } from "../components/Payment";
import { TextInput } from "react-native-gesture-handler";
import { NewCard } from "../components/NewCard";
import { NewAddress } from "../components/NewAddress";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const adresses = [
  "One Microsoft Way, Redmond, WA",
  "One Apple Park Way, Cupertino, CA",
  "1600 Amphitheatre Pkwy, Mountain View, CA",
];

const cards = ["AMEX: XX-0613", "VISA: XX-2013", "MASTERCARD: XX-4200"];

export default function Checkout({ navigation, route }) {
  const [payment, setPayment] = useState(0);
  const [selectedAddress, setAddress] = useState();
  const [modalVisibleCard, setModalVisibleCard] = useState(false);
  const [modalVisibleAddr, setModalVisibleAddr] = useState(false);
  const { cart } = route.params;

  const goToSummary = () => {
    navigation.navigate("Summary", {
      cart: cart,
      payment: cards[payment],
      address: adresses[selectedAddress],
    });
  };

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
      <NewAddress
        modalVisible={modalVisibleAddr}
        setModalVisible={setModalVisibleAddr}
      />
      <View>
        <Button
          title={"Add new Address"}
          onPress={() => setModalVisibleAddr(true)}
        />
      </View>
      <Text style={styles.adresses}> Select Payment Method </Text>
      <Payment cards={cards} payment={payment} setPayment={setPayment} />
      <View>
        <Button
          title={"Add new Card"}
          onPress={() => setModalVisibleCard(true)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => goToSummary()}>
        <Text style={styles.bt}>PROCEED TO SUMMARY</Text>
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
