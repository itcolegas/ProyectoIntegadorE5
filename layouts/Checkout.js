import React from "react";
import { Adresses } from "../components/Adresses";
import { StyleSheet, View, Text, Button } from "react-native";
import { Header } from "../components/Header";

const adresses = [
  "One Microsoft Way, Redmond, WA",
  "One Apple Park Way, Cupertino, CA",
  "1600 Amphitheatre Pkwy, Mountain View, CA",
];

export default function Checkout() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>
        Select the address for delivery
      </Text>
      <Text style={styles.adresses}> Addresses </Text>
      <Adresses adresses={adresses}/>

      <View>
       <Button title={"Add new Address"}/> 
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
    justifyContent: 'center',
    fontSize: 18,
    padding: 10,
    marginTop: 10,
  },
});
