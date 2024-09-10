
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import CustomHeader from '../../Components/CustomHeader';


const Mobiledevelopment = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <CustomHeader navigation={navigation} title="Services" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Mobile App Development</Text>
        <Text style={styles.paragraph}>
          Looking to expand your digital presence with a mobile app? At Delostyle Studio, we offer cutting-edge mobile app development services tailored to your unique needs. Our team of experienced developers creates user-friendly, innovative mobile applications designed to engage your audience and drive business growth.
        </Text>

        <Text style={styles.paragraph}>
          Partner with us to bring your mobile app vision to life with seamless functionality and stunning design
        </Text>
        <Text style={styles.subheading}>Here's what we offer:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Custom Mobile App Developmen</Text>
          <Text style={styles.listItem}>• Cross Platform Compatibility</Text>
          <Text style={styles.listItem}>• User-Centric Design</Text>
          <Text style={styles.listItem}>• Ecommerce Integration</Text>
          <Text style={styles.listItem}>• Performance Optimization</Text>
          <Text style={styles.listItem}>• App Store Deployment</Text>
          <Text style={styles.listItem}>• Maintenance and Support</Text>
          <Text style={styles.listItem}>• Advanced Features</Text>
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

export default Mobiledevelopment;
