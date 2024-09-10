import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import CustomHeader from '../../Components/CustomHeader';


const InternetMarketing = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <CustomHeader navigation={navigation} title="Services" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Internet Marketing</Text>
        <Text style={styles.paragraph}>
          At Delostyle Studio, we specialize in internet marketing, providing comprehensive strategies to help your business thrive online. Our team of marketing experts leverages the latest tools and techniques to boost your online presence, drive traffic, and increase conversions. We understand the dynamics of digital marketing and are committed to delivering results that align with your business goals.
        </Text>

        <Text style={styles.paragraph}>
          Partner with us to elevate your brand and reach your target audience effectively.
        </Text>
        <Text style={styles.subheading}>Here's what we offer:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Search Engine Optimization (SEO)</Text>
          <Text style={styles.listItem}>• Content Marketing</Text>
          <Text style={styles.listItem}>• Social Media Management</Text>
          <Text style={styles.listItem}>• Email Marketing</Text>

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

export default InternetMarketing;
