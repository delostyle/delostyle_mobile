import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../Components/CustomHeader';
const ratings = [
  { name: 'Google', rating: 4.4, image: require('../assets/Image/goo.png') },
  { name: 'Facebook', rating: 4.5, image: require('../assets/Image/fb.png') },
  { name: 'Clutch', rating: 5.0, image: require('../assets/Image/clutch.png') },
  { name: 'Ambitionbox', rating: 4.8, image: require('../assets/Image/ambi.png') },
  { name: 'Glassdoor', rating: 4.7, image: require('../assets/Image/glass.png') },
  { name: 'Freelancer', rating: 5.0, image: require('../assets/Image/fre.png') },
];

const RatingCard = ({ name, rating, image }) => {
  return (         
      <View style={styles.card}>
        <Image source={image} style={styles.logo} />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.rating}>Rated {rating} star</Text>
        <View style={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              source={
                index < Math.round(rating)
                  ? require('../assets/Image/star.png')
                  : require('../assets/Image/star.png')
              }
              style={styles.star}
            />
          ))}
        </View>
      </View>
  );
};
const RatingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <CustomHeader navigation={navigation} title="Ratings" />
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {ratings.map((item, index) => (
          <RatingCard
            key={index}
            name={item.name}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
export default RatingScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', 
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  logo: {
    width: 25,
    height: 25,
    marginBottom: 10,
    resizeMode: 'contain', 
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color:'#00274D',
  },
  rating: {
    fontSize: 12,
    marginVertical: 5,
    fontWeight: '400',
    color:'#777777'
  },
  stars: {
    flexDirection: 'row',
  },
  star: {
    width: 14,
    height: 14,
    marginHorizontal: 2,
  },
});
