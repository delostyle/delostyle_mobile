import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView , SafeAreaView } from 'react-native';
import CustomHeader from '../../Components/CustomHeader';

const BusinessSolutions = ({navigation}) => {
  return (

    <SafeAreaView style={{ flex: 1 }}>

    <CustomHeader navigation={navigation} title="Services" />

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Business Solutions</Text>
      <Text style={styles.paragraph}>
        Delostyle Studio offers comprehensive Business Solutions designed to enhance organizational efficiency and drive growth. Our expert team provides tailored strategies and innovative solutions to address your specific business challenges and opportunities. Whether you need assistance with process optimization, market expansion, or organizational development, we're committed to delivering results that align with your strategic objectives and foster long-term success.
      </Text>

      <Text style={styles.subheading}>Here's what we offer:</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• Strategic Planning</Text>
        <Text style={styles.listItem}>• Operational Efficiency</Text>
        <Text style={styles.listItem}>• Market Analysis</Text>
        <Text style={styles.listItem}>• Organizational Development</Text>
        <Text style={styles.listItem}>• Customer Experience</Text>
        <Text style={styles.listItem}>• Financial Management</Text>
        <Text style={styles.listItem}>• Technology Integration</Text>

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

export default BusinessSolutions;
