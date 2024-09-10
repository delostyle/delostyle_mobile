import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,SafeAreaView } from 'react-native';
import CustomHeader from '../../Components/CustomHeader';


const ItConsultancey = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

    <CustomHeader navigation={navigation} title="Services" />

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>IT Consultancy</Text>
      <Text style={styles.paragraph}>
      Delostyle Studio offers comprehensive Information Technology (IT) consultancy services aimed at empowering businesses to navigate the complexities of digital transformation with confidence. Our expert team provides strategic guidance and practical solutions tailored to your unique business needs. Whether you're looking to optimize IT infrastructure, enhance cybersecurity measures, or leverage emerging technologies, we're here to help you achieve your goals effectively.
      </Text>
     
      
      <Text style={styles.subheading}>Here's what we offer:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• Strategic IT Planning</Text>
        <Text style={styles.listItem}>• IT Infrastructure Optimization</Text>
        <Text style={styles.listItem}>• Cybersecurity Solutions</Text>
        <Text style={styles.listItem}>• Cloud Computing Services</Text>
        <Text style={styles.listItem}>• Digital Transformation</Text>
        <Text style={styles.listItem}>• IT Project Management</Text>
        <Text style={styles.listItem}>• IT Risk Management</Text>
        <Text style={styles.listItem}>• Compliance and Governance</Text>
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

export default ItConsultancey;
