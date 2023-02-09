import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
const ProdcutComponet = () => {
  const products = useSelector(state => state.allProducts.products);

  // const renderList = products.map(product => {
  //   const {id, title, price, description, category, image, ratting} = product;
  //   console.log(image);
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.box}>
  //         <View key={id} style={styles.image}>
  //           <Text>{price}</Text>
  //           <Image
  //             source={{
  //               uri: image,
  //             }}
  //             style={{width: 100, height: 100}}
  //           />
  //         </View>
  //       </View>
  //     </View>
  //   );
  // });
  const renderList = data => {
    const {id, title, price, description, category, image, ratting} = data.item;

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View key={id} style={styles.imgBox}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text style={{fontSize: 10}}>{description}</Text> */}
            <Text style={styles.price}>₹{price}</Text>
            <Text style={styles.category}>{category}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={renderList}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ProdcutComponet;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 320,
    borderBottomColor: 'black',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  main: {
    width: '100%',
    height: '100%',
  },
  box: {
    width: '100%',
    height: '100%',
  },
  imgBox: {
    width: 120,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'contain',
  },
  content: {
    backgroundColor: '#fff',
    width: '100%',

    justifyContent: 'center',
    alignSelf: 'center',
    padding: 18,
  },
  title: {fontSize: 15, fontWeight: '700', color: 'black'},
  price: {
    fontSize: 20,
    color: 'black',
  },
  category: {
    fontSize: 17,
    marginBottom: 0,
    color: 'black',
  },
});
