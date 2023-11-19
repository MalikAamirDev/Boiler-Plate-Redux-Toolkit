import {
  Alert,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MyBackButton from '../components/MyBackButton';
import MyButton from '../components/MyButton';

const CartScreen = () => {
  // hooks
  const {navigate} = useNavigation();

  // functions
  const handleCheckout = () => {
    Alert.alert('Order Success', 'Your order place successfully', [
      {text: 'OK', onPress: () => navigate('Home')},
    ]);
  };

  // data
  const data = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      ],
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.container}>
        <MyBackButton />
        <FlatList
          data={data}
          style={styles.flatlistStyle}
          renderItem={({item, index}) => {
            return (
              <View style={styles.cardBox} key={item.id}>
                <View style={styles.innerContainer}>
                  <Image source={{uri: item.thumbnail}} style={styles.img} />
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                  </View>
                </View>
                <View style={styles.twoBtn}>
                  <Pressable style={styles.btnBox} onPress={() => {}}>
                    <Text style={styles.btn}>-</Text>
                  </Pressable>
                  <Pressable>
                    <Text style={styles.amount}>{item.quantity}</Text>
                  </Pressable>
                  <Pressable style={styles.btnBox} onPress={() => {}}>
                    <Text style={styles.btn}>+</Text>
                  </Pressable>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.totalAmount}>
          Total Amount:{'  '}
          <Text style={styles.totalAmountPrice}>{totalAmount}$</Text>
        </Text>

        <MyButton onPress={handleCheckout} title="Proceed to checkout" />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  flatlistStyle: {
    flex: 1,
  },
  img: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    marginTop: 10,
  },
  cardBox: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingRight: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  footer: {
    width: '55%',
  },
  twoBtn: {
    gap: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnBox: {
    width: 40,
    height: 40,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  btn: {
    fontSize: 25,
  },
  amount: {
    fontSize: 16,
  },
  bottom: {
    flex: 0.2,
    gap: 10,
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmountPrice: {
    fontSize: 22,
  },
});
