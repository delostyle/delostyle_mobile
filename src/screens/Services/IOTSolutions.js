import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,SafeAreaView } from 'react-native';
import CustomHeader from '../../Components/CustomHeader';

const IOTSolutions = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <CustomHeader navigation={navigation} title="Services" />

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>IoT Solutions</Text>
      <Text style={styles.paragraph}>
      At Delostyle Studio, we specialize in IoT (Internet of Things) development services that transform your business by connecting devices and systems for smarter operations. Our team of skilled professionals leverages cutting-edge technology to create IoT solutions that enhance efficiency, improve decision-making, and drive innovation. We focus on delivering tailored solutions that meet your specific needs, helping you harness the full potential of IoT for your business growth.
      </Text>
      

      <Text style={styles.subheading}>Here's what we offer:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• IoT Consulting</Text>
        <Text style={styles.listItem}>• IoT Device Integration</Text>
        <Text style={styles.listItem}>• Custom IoT Solutions</Text>
        <Text style={styles.listItem}>• Data Analytics</Text>
        <Text style={styles.listItem}>• IoT Platform Development</Text>
        <Text style={styles.listItem}>• IoT Security</Text>
        <Text style={styles.listItem}>• Remote Monitoring and Management</Text>
        <Text style={styles.listItem}>• IoT Maintenance and Support</Text>
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

export default IOTSolutions;
