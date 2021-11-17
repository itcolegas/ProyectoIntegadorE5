import React, { useState } from "react";
import { Adresses } from "../components/Adresses";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { Header } from "../components/Header";

import { Cart } from "../components/Cart";

const adresses = [
  "One Microsoft Way, Redmond, WA",
  "One Apple Park Way, Cupertino, CA",
  "1600 Amphitheatre Pkwy, Mountain View, CA",
];

const cards = ["AMEX: XX-0613", "VISA: XX-2013", "MASTERCARD: XX-4200"];

export default function CartSum({ route, navigation }) {
  const { cart, address, payment } = route.params;
  const [modalVisible, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Header icon={'arrow-back'} navigation={navigation}/>
      <Text style={styles.summary}> Your Order </Text>
      <Cart cart={cart} />

      <View style={styles.item}>
        <Text style={styles.pname}>Address:</Text>
        <Text style={styles.pcost}>{address}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.pname}>Payment:</Text>
        <Text style={styles.pcost}>{payment}</Text>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={require("../assets/check.gif")}
              style={{ width: 200, height: 200 }}
            />
            <Text style={{fontWeight: 'bold', fontSize: 20}}>ORDER COMPLETE</Text>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModal(true);
          setTimeout(()=>{
            setModal(false);
          }, 1800)
          setTimeout(() => {
            navigation.push("Menu", { cart: [] });
          }, 2000);
        }}
      >
        <Text style={styles.bt}>CONFIRM ORDER</Text>
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    width: "90%",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
