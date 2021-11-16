import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//navegation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//layouts
import Checkout from './layouts/Checkout';
import Menu from './layouts/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>{
          <>
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              title: "",
              headerShown: false,
            }}
          />
           <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{
              title: "",
              headerShown: false,
            }}
          />
          </>
         }</Stack.Navigator>
    </NavigationContainer>
  );
}

