import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BUSSTOP_URL = "https://arrivelah2.busrouter.sg/?id=83139";

export default function App() {

  const [loading, setloading]= useState(true);

  function loadBusStopData() {
    fetch(BUSSTOP_URL)
    .then((response)=>response.json())
    .then((responseData)=>console.log(responseData));
  }

  useEffect(() => {
  loadBusStopData();  
  }, []);

 return (
   <View style={styles.container}>
     <Text style={styles.title}>Bus arriving in</Text>
     <Text style={styles.arrivalTime}>
       {loading ? <ActivityIndicator size="large"/> : "loaded"} 
       </Text>
     <TouchableOpacity style={styles.button}>
       <Text style={styles.buttonText}>Refresh!</Text>
     </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
   alignItems: "center",
   justifyContent: "center",
 },
 title: {
   fontWeight: "bold",
   fontSize: 32,
   marginBottom: 24,
 },
 arrivalTime: {
   fontSize: 64,
   marginBottom: 32,
 },
 button: {
   padding: 20,
   backgroundColor: "red",
 },
 buttonText: {
   fontSize: 32,
   fontWeight: "bold",
   color: "white",
 },
});

