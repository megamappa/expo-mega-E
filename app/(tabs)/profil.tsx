import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Profil() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profil Mahasiswa</Text>

      <Image source={require('../../assets/images/foto4.jpg')} style={styles.image} />

      <Text style={styles.description}>
        Nama: Mega Utami I. Mappa{'\n'}
        NIM: 105841115922{'\n'}
        Kelas: IF-6E{'\n'}
        Jurusan: Informatika{'\n'}
        Fakultas: Teknik
      </Text>

      <Text style={styles.description}>
        Nama saya Mega Utami I. Mappa, mahasiswa Universitas Muhammadiyah Makassar.
        Saya memiliki ketertarikan di bidang IT  dan desain. Aplikasi ini adalah 
        bagian dari tugas proyek untuk memperkenalkan kampus kami melalui platform mobile.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
});
