import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import AboutScreenCustomHeader from '../../Components/AboutScreenCustomHeader';
const OurClients = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      < AboutScreenCustomHeader navigation={navigation} title='About' />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.heading}>Our Clients</Text>
        <Text style={styles.paragraph}>
          At Delostyle Studio, we stay ahead by exploring the latest industry trends and strategies. Our clients benefit from our innovative solutions, tailored to their needs. Partnering with us equips them with the tools and insights to navigate the evolving business landscape and achieve lasting success.
        </Text>

        <View style={{flexDirection:'row', justifyContent:'space-between' , marginBottom:11}}>
          <View style={{
            borderWidth: 1, borderColor: '#E8E8E8', width: '45%', backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            padding: 8,
            marginBottom: 10, }}>
            <Image
              source={require('../../assets/Image/roc.png')}
              style={styles.caretIcon}
            />
          </View>
          <View style={{
            borderWidth: 1, borderColor: '#E8E8E8', width: '45%', backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            padding: 8,
            marginBottom: 10, }}>
            <Image
              source={require('../../assets/Image/iffel.png')}
              style={styles.caretIcon}
            />
          </View>
         
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between' , marginBottom:11}}>
          <View style={{
            borderWidth: 1, borderColor: '#E8E8E8', width: '45%', backgroundColor: '#FFFFFF',
            // aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            padding: 8,
            marginBottom: 10, }}>
            <Image
              source={require('../../assets/Image/dunamis.png')}
              style={styles.caretIcon}
            />
          </View>
          <View style={{
            borderWidth: 1, borderColor: '#E8E8E8', width: '45%', backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            padding: 8,
            marginBottom: 10, }}>
            <Image
              source={require('../../assets/Image/rang.png')}
              style={styles.caretIcon}
            />
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: "#00274D",
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 24,
    color: '#777777',
    fontWeight: '400',
  },
});

export default OurClients;
