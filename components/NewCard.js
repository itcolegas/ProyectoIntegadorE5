import React, { useState } from "react";
import { Adresses } from "../components/Adresses";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const NewCard = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>Add a new Card!</Text>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text>Card Number:</Text>
            <TextInput placeholder={"XXXX-XXXX-XXXX-XXXX"} />
          </View>

          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text>Expiration Date:</Text>
            <TextInput placeholder={"MM/YY"} />
          </View>

          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text>Security Number:</Text>
            <TextInput placeholder={"XXXX"} />
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.button}
            >
             <Text style={styles.bt}>Add New Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.bt}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    margin:5
  },
  bt:{
    color: "white",
    fontWeight: 'bold'
  }
});
