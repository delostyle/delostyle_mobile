import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CardHome = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Image/homecard.png')}
          style={styles.image}
          resizeMode="cover"
        />
        {/* Four Texts aligned to the right of the image */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>Looking for innovative </Text>
          <Text style={styles.textsecond}>business ideas<Text style={{color:'#FFFFFF'}}>?</Text></Text>
          <Text style={styles.textthree}>We’re a young and creative company ready to bring fresh perspectives to your projects.</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Let’s Connect</Text>
          </TouchableOpacity>

        </View>
      </View>
    

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    borderRadius: 11,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200, 
  },
  textContainer: {
    position: 'absolute',
    top: 10,
    left: 22,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginVertical: 5,
    fontWeight:'600'
  },
  textsecond:{
    color: '#FF6600',
    fontSize: 18,
    marginVertical: 5,
    fontWeight:'600'
  },
  textthree:{
    color: 'white',
    fontSize: 12,
    marginVertical: 5,
    fontWeight:'400',
    width:'45%'
  },
  button: {
    backgroundColor: '#FF6600',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    width:'40%',
    height:'auto',
  },
  buttonText: {
    color: '#FFFFED',
    fontSize: 14,
    textAlign: 'center',
    fontWeight:'600',
    
  },
});

export default CardHome;



