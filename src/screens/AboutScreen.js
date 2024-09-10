import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import HomeCustom from '../Components/HomeCustom';

const AboutScreen = ({ navigation }) => {
  const menuItems = [
    { title: 'Our Vision', image: require('../assets/Image/Vision.png'), screen: 'OurVision' },
    { title: 'Our Mission', image: require('../assets/Image/Mission.png'), screen: 'OurMission' },
    { title: 'Consulting Process', image: require('../assets/Image/Consulting.png'), screen: 'ConsultingProcess' },
    { title: 'Our Clients', image: require('../assets/Image/Clients.png'), screen: 'OurClients' },
    { title: 'Our Timeline', image: require('../assets/Image/Timeline.png'), screen: 'OurTimeline' },
    { title: 'Our Team Members', image: require('../assets/Image/member.png'), screen: 'TeamMembers' },
  ];

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      
      <HomeCustom navigation={navigation} title="About"/>
      
      <View style={styles.container}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => handlePress(item.screen)}
          >
            <Image
              source={item.image}
              style={styles.image}
            />
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  menuItem: {
    width: '40%', 
    height: 120, 
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});

export default AboutScreen;




