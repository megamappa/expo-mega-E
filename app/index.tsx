import React, { useState, useRef } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';

const data = [
  {
    id: '1',
    main: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OE2-u0s-v-OXkPgtX2ir7wECOR-jARYb4Q&s',
    alt: 'https://assets.kompasiana.com/items/album/2023/06/02/image-by-freepik-6479f2cc4addee72a622f982.jpg?t=o&v=770',
  },
  {
    id: '2',
    main: 'https://cdn.shopify.com/s/files/1/1589/6833/files/Ternyata_Bunga_Tulip_Punya_4_Jenis_Berbeda_yang_Sama_Cantiknya.jpg?v=1536566914',
    alt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sunset_2007-1.jpg/250px-Sunset_2007-1.jpg',
  },
  {
    id: '3',
    main: 'https://images.bisnis.com/posts/2023/11/07/1711937/arti_bunga_tulip-pixabay_skitterphoto_1699341131.jpg',
    alt: 'https://asset.kompas.com/crops/94HPGkZFpDafQuY1S-lIuRwb1wU=/122x0:906x523/1200x800/data/photo/2022/01/21/61ea63b9cdd40.jpg',
  },
  {
    id: '4',
    main: 'https://cdn.shopify.com/s/files/1/1589/6833/files/Arti_dari_Tulip_Bunga_Cantik_nan_Anggun-min.jpg?v=1537774137',
    alt: 'https://image.idntimes.com/post/20220329/screenshot-318-d46ca8e83aa87795385d7d026f4c2cc8.png?tr=w-750,f-webp,q-75&width=750&format=webp&quality=75',
  },
  {
    id: '5',
    main: 'https://asset.kompas.com/crops/85BU3L_yP-SVGQxOV0jaxnd032E=/2x0:977x650/750x500/data/photo/2023/03/09/64094bb5bd5db.jpg',
    alt: 'https://image.idntimes.com/post/20220329/screenshot-320-1f8e77ca721bb1f6667895ced61b907a.png?tr=w-750,f-webp,q-75&width=750&format=webp&quality=75',
  },
  {
    id: '6',
    main: 'https://cdn.prod.website-files.com/65af5f0812c914d3fef6a68c/66752b2463fe301b4740c9ee_32.%20Pesona%20Bunga%20Tulip%20Turki%20yang%20Penuh%20Keindahan-p-800.jpg',
    alt: 'https://asset.kompas.com/crops/JbvO_L0n8poHH634V9hA45dbJ5Y=/0x0:780x520/1200x800/data/photo/2019/08/31/5d6a02a48e617.jpg',
  },
  {
    id: '7',
    main: 'https://prodigits.co.uk/thumbs/wallpapers/p2ls/nature/45/9762232012333013.jpg',
    alt: 'https://asset.kompas.com/crops/BbeWe_hwsonFWdALWO5amWdG-BM=/0x0:780x520/750x500/data/photo/2019/08/31/5d6a04465fd38.jpg',
  },
  {
    id: '8',
    main: 'https://doktersehat.com/wp-content/uploads/2020/11/manfaat-bunga-tulip-doktersehat-700x467.jpg',
    alt: 'https://asset.kompas.com/crop/0x0:780x520/750x500/data/photo/2019/07/29/5d3e940d84327.jpg',
  },
  {
    id: '9',
    main: 'https://www.orchid-florist.com/public/themes/default/backend/js/library/ckfinder/userfiles/images/Tulip%20Pink.jpg',
    alt: 'https://duaransel.com/wp-content/uploads/2011/02/Sunset-di-Queensland-600x450.jpg',
  },
];

export default function App() {
  const [images, setImages] = useState(
    data.map((item) => ({
      ...item,
      current: item.main,
      scale: 1,
      isAltShown: false,
    }))
  );
  const scales = useRef(images.map(() => new Animated.Value(1))).current;

  const handlePress = (index: number) => {
    setImages((prev) => {
      const updated = [...prev];
      const item = updated[index];

      const newScale = Math.min(item.scale + 0.2, 2); // Maksimal scale = 2
      let newCurrent = item.current;
      let isAltShown = item.isAltShown;

      // Jika belum ditukar ke alt, lakukan sekali saja
      if (!item.isAltShown) {
        newCurrent = item.alt;
        isAltShown = true;
      }

      updated[index] = {
        ...item,
        current: newCurrent,
        scale: newScale,
        isAltShown,
      };

      Animated.timing(scales[index], {
        toValue: newScale,
        duration: 200,
        useNativeDriver: true,
      }).start();

      return updated;
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handlePress(index)}>
            <Animated.Image
              source={{ uri: item.current }}
              style={[
                styles.image,
                { transform: [{ scale: scales[index] }] },
              ]}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
});
