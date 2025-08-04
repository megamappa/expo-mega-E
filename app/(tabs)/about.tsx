import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>

      <Image source={require('../../assets/images/foto1.jpg')} style={styles.image} />

      <Text style={styles.description}>
        Aplikasi ini dibuat untuk memperkenalkan Universitas Muhammadiyah Makassar 
        kepada pengguna. Dengan menampilkan informasi penting seperti profil kampus, 
        galeri foto, serta fitur lainnya, aplikasi ini diharapkan dapat memberikan 
        gambaran menyeluruh tentang Unismuh Makassar.
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
