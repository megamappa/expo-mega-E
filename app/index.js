// app/index.js
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import mahasiswa from "../app/data/mahasiswa";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Mahasiswa</Text>
      <FlatList
        data={mahasiswa}
        keyExtractor={(item) => item.nim}
        renderItem={({ item }) => (
          <Link href={`/detail/${item.nim}`} asChild>
            <TouchableOpacity style={styles.item}>
              <Ionicons name="person-circle-outline" size={24} color="black" />
              <Text style={styles.name}>{item.nama}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white", // pink
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "Black",
    textAlign: "center", // judul juga di tengah
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // nama & ikon di tengah horizontal
    marginBottom: 15,
    backgroundColor: "white", // pink tua
    padding: 10,
    borderRadius: 10,
  },
  name: {
    marginLeft: 10,
    fontSize: 18,
    color: "black",
    textAlign: "center", // teks di tengah
  },
});
