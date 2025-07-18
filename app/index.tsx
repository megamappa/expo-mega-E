import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Animated,
} from 'react-native';

const imageData = [
  { id: 1, mainSrc: 'https://picsum.photos/id/30/200', altSrc: 'https://picsum.photos/id/31/200' },
  { id: 2, mainSrc: 'https://picsum.photos/id/32/200', altSrc: 'https://picsum.photos/id/33/200' },
  { id: 3, mainSrc: 'https://picsum.photos/id/34/200', altSrc: 'https://picsum.photos/id/35/200' },
  { id: 4, mainSrc: 'https://picsum.photos/id/36/200', altSrc: 'https://picsum.photos/id/37/200' },
  { id: 5, mainSrc: 'https://picsum.photos/id/38/200', altSrc: 'https://picsum.photos/id/39/200' },
  { id: 6, mainSrc: 'https://picsum.photos/id/40/200', altSrc: 'https://picsum.photos/id/41/200' },
  { id: 7, mainSrc: 'https://picsum.photos/id/42/200', altSrc: 'https://picsum.photos/id/43/200' },
  { id: 8, mainSrc: 'https://picsum.photos/id/44/200', altSrc: 'https://picsum.photos/id/45/200' },
  { id: 9, mainSrc: 'https://picsum.photos/id/46/200', altSrc: 'https://picsum.photos/id/47/200' },
];

export default function ImageGrid() {
  const [images, setImages] = useState(
    imageData.map(img => ({
      ...img,
      isFlipped: false,
      scale: new Animated.Value(1),
      scaleNum: 1,
    })) 
  );

  const handlePress = (id: number) => {
    setImages(prevImages =>
      prevImages.map(img => {
        if (img.id === id) {
          const newScaleNum = Math.min(img.scaleNum * 1.2, 2);
          Animated.timing(img.scale, {
            toValue: newScaleNum,
            duration: 200,
            useNativeDriver: true,
          }).start();

          return {
            ...img,
            isFlipped: !img.isFlipped,
            scaleNum: newScaleNum,
          };
        }
        return img;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {images.map(img => (
          <TouchableWithoutFeedback
            key={img.id}
            onPress={() => handlePress(img.id)}
          >
            <View style={styles.cell}>
              <Animated.Image
                source={{ uri: img.isFlipped ? img.altSrc : img.mainSrc }}
                style={[
                  styles.image,
                  { transform: [{ scale: img.scale }] }
                ]}
                resizeMode="cover"
              />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 330,
    justifyContent: 'center',
  },
  cell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});