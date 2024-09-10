


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
const UIUXDesigining = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
<CustomHeader navigation={navigation} title="Services" />

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>UI/UX Designing</Text>
      <Text style={styles.paragraph}>
      At Delostyle Studio, we excel in UI/UX design, creating visually stunning and highly functional digital experiences. Our dedicated team of designers focuses on delivering intuitive interfaces that enhance user engagement and satisfaction. We understand that great design is more than just aesthetics—it's about creating seamless and enjoyable interactions for your users. 
      </Text>
      <Text style={styles.paragraph}>
      Partner with us to transform your ideas into exceptional digital experiences that captivate and retain your audience
      </Text>
      <Text style={styles.subheading}>Here's what we offer:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• User Research and Analysis</Text>
        <Text style={styles.listItem}>• Wireframing and Prototyping</Text>
        <Text style={styles.listItem}>• Visual Design</Text>
        <Text style={styles.listItem}>• Interaction Design</Text>
        <Text style={styles.listItem}>• Responsive Design</Text>
        <Text style={styles.listItem}>• Usability Testing</Text>
        <Text style={styles.listItem}>• Design Systems</Text>
        <Text style={styles.listItem}>• Accessibility</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('EnquiryForm')}>
        <Text style={styles.buttonText}>Get In Touch</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color:'#00274D', 
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight:'400',
    color:'#777777',
    fontStyle:"Roboto",
  },
  subheading: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 10,
    color:'#777777',
    marginBottom: 15,
    marginBottom: 15,
  },
  list: {
    marginBottom: 20,
    marginLeft:5,
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight:'600',
    color:'#2E2E2E',
  },
  button: {
    backgroundColor: '#FF6600',
    padding: 15,
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFED',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default UIUXDesigining;
