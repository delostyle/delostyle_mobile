import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import CustomHeader from '../../Components/CustomHeader';


const SoftwareDevelopment = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <CustomHeader navigation={navigation} title="Services" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Software Development</Text>
        <Text style={styles.paragraph}>
          At Delostyle Studio, we offer top-notch software development services tailored to meet the specific needs of your business. Our team of experienced developers utilizes the latest technologies and best practices to create robust, scalable, and efficient software solutions. We are dedicated to transforming your ideas into reality, ensuring that your software enhances your operations and drives business growth.
        </Text>

        <Text style={styles.paragraph}>
          By partnering with us, you gain access to innovative solutions that keep you ahead in the competitive market.
        </Text>
        <Text style={styles.subheading}>Here's what we offer:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Custom Software Development</Text>
          <Text style={styles.listItem}>• Enterprise Software Solutions</Text>
          <Text style={styles.listItem}>• Mobile Application Development</Text>
          <Text style={styles.listItem}>• Web Application Development</Text>
          <Text style={styles.listItem}>• System Integration</Text>
          <Text style={styles.listItem}>• Software Consulting</Text>
          <Text style={styles.listItem}>• Maintenance and Support</Text>
          <Text style={styles.listItem}>• Quality Assurance and Testing</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EnquiryForm')}>
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
    color: '#777777',
    fontStyle: "Roboto",
  },
  subheading: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 10,
    color: '#777777',
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

export default SoftwareDevelopment;

