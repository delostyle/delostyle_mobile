import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView ,SafeAreaView } from 'react-native';


import CustomHeader from '../../Components/CustomHeader';


const ECommerceDevelopment = ({navigation}) => {
  return (

    <SafeAreaView style={{ flex: 1 }}>

    <CustomHeader navigation={navigation} title="Services" />

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>E-commerce Development</Text>
      <Text style={styles.paragraph}>
      At Delostyle Studio, we specialize in Ecommerce Development, crafting solutions that elevate your online business. Our expertise ensures your Ecommerce platform is not just functional but optimized for growth. We focus on creating intuitive user experiences and robust backend systems that streamline operations and drive sales. Whether you're launching a new online store or upgrading an existing one, our team is dedicated to delivering results that exceed expectations.
      </Text>

      <Text style={styles.subheading}>Here's what we offer:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• Custom Ecommerce Platforms</Text>
        <Text style={styles.listItem}>• Mobile Optimization</Text>
        <Text style={styles.listItem}>• Payment Integration</Text>
        <Text style={styles.listItem}>• Inventory Management</Text>
        <Text style={styles.listItem}>• SEO and Marketing</Text>
        <Text style={styles.listItem}>• Analytics and Reporting</Text>


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
    color: '#00274D',
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '400',
    color:'#777777',
    fontStyle:"Roboto",
  },
  subheading: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 10,
    color:'#777777',
    marginBottom: 15,
  },
  list: {
    marginBottom: 20,
    marginLeft:5,
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '600',
    color: '#2E2E2E',
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

export default ECommerceDevelopment;
