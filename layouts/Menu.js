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

//firebase
//import firebase from '../utils/Firebase';
//import 'firebase/auth';

//export default function Menu({navigation}) {
export default function Menu({ navigation }) {
  //let user = firebase.auth().currentUser;
  //const [username, setUsername] = useState(user.displayName);
  const [username, setUsername] = useState("Username");
  const [cart, setCart] = useState([]);
  const [catalog, setCatalog] = useState({
    catalog: [
      {
        name: "Cough medicine",
        availability: "3",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
      {
        name: "Cough medicine",
        availability: "4",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
      {
        name: "Cough medicine",
        availability: "5",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
      {
        name: "Cough medicine",
        availability: "6",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
      {
        name: "Cough medicine",
        availability: "3",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
      {
        name: "Cough medicine",
        availability: "4",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
      {
        name: "Cough medicine",
        availability: "5",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
      {
        name: "Cough medicine",
        availability: "6",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
      {
        name: "Cough medicine",
        availability: "3",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
      {
        name: "Cough medicine",
        availability: "4",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
      {
        name: "Cough medicine",
        availability: "5",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
      {
        name: "Cough medicine",
        availability: "6",
        cost: 300,
        image:
          "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/MMI-Vicks-CA-EN/2qcFBFR1H7fZyjOnGXv4Kt/f284d852f02d5819cbae3bcf50f7c868/00056100073864_C1N1.jpg?w=800&fm=jpg",
      },
    ],
  });

  const updateCart = (product) => {
    console.log("Added to cart");
    let temp = [...cart];
    temp.push(product);
    setCart(temp);
    console.log(temp);
  };

  /*
    function getUserData(){
     const timeout = setTimeout(() => {
       user = firebase.auth().currentUser;
       setUsername(user.displayName);
     }, 250);
    }

     useEffect(() =>{
       getUserData();
     },[user, username])

    useEffect(() => {
        setIsLoading(true);
        axios.get(api + '/get-catalog')
            .then( res => {
                setCatalog(res.data.questions)
                setIsLoading(false);
                console.log(catalog);
            })
            .catch( err => {
                console.error(err)
            })
    }, []);
     */

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
        <Text style={styles.carouselText}>Catalog</Text>
      </View>
      <View style={styles.carouselContainer}>
        <View style={styles.contentContainer}>
          {catalog.catalog.map((product) => {
            return (
              <View style={styles.product}>
                <Text style={styles.contentText}>{product.name}</Text>
                <Image
                  source={product.image}
                  style={{ width: 200, height: 200 }}
                />
                <Text style={styles.contentText}>
                  Availability: {product.availability}
                </Text>
                <Text style={styles.price}>Price: ${product.cost}</Text>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => updateCart(product)}
                >
                  <Text style={styles.textStyle}>Add to cart</Text>
                </Pressable>
              </View>
            );
          })}
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
