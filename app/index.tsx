import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const stambukList = Array.from({ length: 165 }, (_, i) => `1058411${String(i + 1).padStart(3, '0')}22`);

const names = [
  "Mega Utami", "Reza Fahlevi", "Nanda Putri", "Ilham Maulana", "Citra Lestari",
  "Fahmi Ramadhan", "Dina Safira", "Rian Aditya", "Tasya Kamila", "Yusuf Abadi"
];

export default function App() {
  const [fontsLoaded] = useFonts({
    // Font statis
    LatoItalic: require('../assets/fonts/Lato-Italic.ttf'),
    MontserratLight: require('../assets/fonts/Montserrat-Light.ttf'),
    OpenSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
    PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    // Font variabel
    InterVariable: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
    MontserratVariable: require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    NotoSansVariable: require('../assets/fonts/NotoSans-VariableFont_wdth,wght.ttf'),
    OpenSansVariable: require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    RobotoVariable: require('../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });

  if (!fontsLoaded) return null;

  const currentIndex = 158; // 105841115922 = index ke-158 (urutan ke-159)
  const total = stambukList.length;

  // 5 stambuk sebelum (mundur, looping kalau < 0)
  const before = Array.from({ length: 5 }, (_, i) => {
    const idx = (currentIndex - i - 1 + total) % total;
    return { stambuk: stambukList[idx], name: names[idx % names.length] };
  }).reverse();

  // 5 stambuk setelah (naik)
  const after = Array.from({ length: 5 }, (_, i) => {
    const idx = (currentIndex + i + 1) % total;
    return { stambuk: stambukList[idx], name: names[(idx + 5) % names.length] };
  });

  const combined = [...before, ...after];

  const fontFamilies = [
    'LatoItalic',
    'MontserratLight',
    'OpenSansBold',
    'PoppinsSemiBold',
    'RobotoRegular',
    'InterVariable',
    'MontserratVariable',
    'NotoSansVariable',
    'OpenSansVariable',
    'RobotoVariable',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {combined.map((item, index) => (
        <Text
          key={item.stambuk}
          style={{
            fontFamily: fontFamilies[index],
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          {item.name} - {item.stambuk}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
