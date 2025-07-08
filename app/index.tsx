import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Index(){
  return(
    <View style={styles.container}>

       {/*Segitiga*/}
      <View style={styles.triagle}/>


      {/*Persegi Panjang dengan Nama*/}
      <View style={styles.rectangle}>
        <Text style={styles.rectangleText}>MEGA UTAMI I. MAPPA</Text>
      </View>

  

      {/*Bentuk Pil*/}
      <View style={styles.pill}>
        <Text style={styles.pillText}>105841115922</Text>
        </View>


      </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 50,
    backgroundColor: "#fff",
  },

//Persegi Panjang
  rectangle: {
    width: 300,
    height: 80,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "pink",
    overflow: "hidden",
  },

  rectangleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",

  },


//Segitiga
  triagle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 90,
    borderRightWidth: 90,
    borderBottomWidth: 200,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "pink",
  },

  //Pil
  pill: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "pink",
    justifyContent: "center",
    paddingHorizontal: 90,
    paddingVertical: 30,
    borderRadius: 50,
  },

  pillText: {
    color: "Black",
    marginLeft: 8,
    fontSize: 20,
    fontWeight: "bold",
  },

});