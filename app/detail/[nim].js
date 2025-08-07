// app/detail/[nim].js
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import mahasiswa from "../../data/mahasiswa";

export default function DetailMahasiswa() {
  const { nim } = useLocalSearchParams();

  const data = mahasiswa.find((mhs) => mhs.nim === nim);

  if (!data) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Data tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.foto }} style={styles.image} />
      <Text style={styles.name}>{data.nama}</Text>
      <Text style={styles.nim}>NIM: {data.nim}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  nim: {
    fontSize: 18,
    marginTop: 10,
  },
  notFound: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
});
