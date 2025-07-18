import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function IconScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>
      <View style={styles.iconGrid}>
        <Ionicons name="home" size={40} color="#3498db" />
        <FontAwesome name="rocket" size={40} color="#e67e22" />
        <MaterialIcons name="email" size={40} color="#2ecc71" />
        <Feather name="camera" size={40} color="#9b59b6" />
        <Entypo name="heart" size={40} color="#e74c3c" />
        <AntDesign name="github" size={40} color="#34495e" />
        <MaterialCommunityIcons name="android" size={40} color="#16a085" />
        <Octicons name="bell" size={40} color="#2980b9" />
        <EvilIcons name="user" size={50} color="#f39c12" />
        <Foundation name="refresh" size={40} color="#d35400" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    rowGap: 30,
  },
});


