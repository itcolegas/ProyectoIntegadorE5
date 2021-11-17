import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import { Header } from "../components/Header";

import axios from 'axios';

/* Escoger farmacia, filtro el catalogo */
//export default function Menu({navigation}) {
export default function Menu({ navigation, route }) {
  //let user = firebase.auth().currentUser;
  //const [username, setUsername] = useState(user.displayName);
  console.log(route.params) 
   const [username, setUsername] = useState("Username");
  const [cart, setCart] = useState(route.params? route.params.cart : []);
  console.log(cart)
  const [catalog, setCatalog] = useState([]);
  
  useEffect(() => {
  const rows = [];
  axios.get(`http://ec2-34-239-232-157.compute-1.amazonaws.com:3000/getAllProducts`)
          .then(res => {
          console.log(res);
          for(let elem in res.data.Items){
              console.log("Elem",elem);
              rows.push(res.data.Items[elem]);
          }
          console.log(rows);
          setCatalog(rows);
          });
  }, []);

  const updateCart = (product) => {
    console.log("Added to cart");
    let temp = [...cart];
    temp.push(product);
    setCart(temp);
    console.log(temp);
  };

  return (
    <View style={styles.menu}>
      <Header />
      <View style={styles.checkoutHeader} >
        <Text> Items: {cart.length}</Text>
        <View style={styles.checkoutContainer}>
        <Pressable
          style={styles.buttonC}
          onPress={() => navigation.navigate("CartSum", { cart: cart })}
        >
          <Text style={styles.textStyle}>Checkout</Text>
        </Pressable>
      </View>
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.carouselText}>Catalog Interlomas</Text>
      </View>
      <View style={styles.carouselContainer}>
        <View style={styles.contentContainer}>
          { catalog.map((product) => {
            return (
              <View style={styles.product}>
                <Text style={styles.contentText}>{product.pname}</Text>
                <Image
                  source={product.image}
                  style={{ width: 200, height: 200 }}
                />
                <Text style={styles.contentText}>
                  Availability: {Object.entries(product.inventory)[0][1]}
                  Sucursal: {Object.entries(product.inventory)[0][0]}
                </Text>
                <Text style={styles.price}>Price: ${product.price}</Text>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => updateCart(product)}
                >
                  <Text style={styles.textStyle}>Add to cart</Text>
                </Pressable>
              </View>
            );
          }) }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  carouselContainer: {
    alignItems: "flex-start",
    width: "100%",
    padding: 5,
  },
  carouselText: {
    padding: 30,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  contentText: {
    padding: 30,
    paddingBottom: 0,
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    paddingBottom: 15,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  welcomeContainer: {
    padding: 5,
  },
  checkoutContainer: {
    width: 200,
    alignSelf: "flex-end",
    padding: 10,
  },
  welcomeText: {
    fontSize: 22,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonC: {
    padding: 10,
    elevation: 2,
    backgroundColor: "blue",
  },
  buttonOpen: {
    backgroundColor: "#15c712",
  },
  product: {
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
  checkoutHeader: {
    flexDirection: 'row',
    width: "90%",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
});
