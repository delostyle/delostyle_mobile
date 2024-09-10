import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import AboutScreenCustomHeader from '../../Components/AboutScreenCustomHeader';

const OurVision = ({ navigation }) => {
  return (
    
    
    <SafeAreaView style={styles.safeArea}>
 < AboutScreenCustomHeader navigation={navigation} title='About' />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.heading}>Our Vision</Text>
        <Text style={styles.paragraph}>
          Together as a team, we envision a future where business technology solutions seamlessly integrate with your ideas to catalyze growth, foster innovation, and elevate human potential.
        </Text>
        <Text style={styles.paragraph}>
          Our vision is anchored in a commitment to empower organizations of all sizes with the transformative power of IT.
        </Text>
        <Text style={styles.paragraph}>
          Our team solely believes and is run by the notion that businesses are not limited by technology but propelled by it. With this vision, we strive to be the catalyst that propels your business towards solutions that are in sync with today’s digital era, ensuring that every client we serve reaps the benefits of cutting-edge IT solutions. We harness innovation to leverage boundless service in the IT field. The torch of technological advancements, leading the way in developing groundbreaking solutions, that are highly cost-effective, enhance productivity, and drive sustainable success.
        </Text>
        <Text style={styles.paragraph}>
          We adhere to offer you with expertise and insight by encompassing a strong team of IT consulting and a deep understanding of the industry needs in a rapidly transforming digital space. Our mission is to fortify the businesses we work with to succeed by delivering distinctive, exceptional solutions. We ensure that you have an IT framework that will seamlessly enable your business to reach their full potential.
        </Text>
        <Text style={styles.paragraph}>
          Moreover, when it comes to the future, it's about making a meaningful impact today, and for us, that means leveraging every ounce of IT professionalism, solidly rooted on real client offerings, provides and uncompromising results like no other. From businesses, startups, to emerging enterprises, no client left behind.
        </Text>
        <Text style={styles.paragraph}>
          Together, let's shape a future where your business thrives with BackupPro Studio as your trusted IT partner.
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

export default OurVision;
