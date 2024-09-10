import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import AboutScreenCustomHeader from '../../Components/AboutScreenCustomHeader';
const OurMission = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
< AboutScreenCustomHeader navigation={navigation} title='About' />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.heading}>Our Mission</Text>
        <Text style={styles.paragraph}>
        Our Mission Is To Empower Business Success through Innovative IT Consulting Solutions
        </Text>
        <Text style={styles.paragraph}>
        At Delostyle Studio, our mission is to drive the success of businesses by harnessing the full potential that technology solutions have to offer. We are committed to providing top-notch IT consulting services that empower our clients to thrive in an ever-evolving digital landscape.
        </Text>
        <Text style={styles.paragraph}>
        In pursuing our mission, we seek to empower businesses to navigate the complexities of the digital world with confidence and efficiency. Together, we will transform challenges into opportunities, goals into achievements, and dreams into realities.
        </Text>
        <Text style={styles.paragraph}>
        Join us on this mission to redefine what’s possible in the world of IT consulting
        </Text>
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
    color:"#00274D",
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 24,
    color:'#777777', 
    fontWeight:'400',
  },
});

export default OurMission;
