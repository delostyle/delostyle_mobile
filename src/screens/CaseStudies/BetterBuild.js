import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet, Share } from 'react-native';
import React from 'react';
import CaseStudiesCustomHeader from '../../Components/CaseStudiesCustomHeader';

const BetterBuild = ({ navigation }) => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this amazing case study about BetterBuild!',
        // You can include more details or a URL to share here
        // url: 'https://example.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CaseStudiesCustomHeader navigation={navigation} title="Case Studies" />

      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/Image/better.png')}
            style={{width:'auto'}}
               resizeMode="cover"

          />
          <TouchableOpacity style={styles.shareButton} onPress={onShare}>
            <Image
              source={require('../../assets/Image/share.png')} 
              style={styles.shareIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>BetterBuild - The Future Of The Industry</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Location :
              <Text style={styles.infoTextDetail}> Arizona</Text>
            </Text>
            <Text style={styles.infoText}>
              Year :
              <Text style={styles.infoTextDetail}> 2021</Text>
            </Text>
          </View>

          <Text style={styles.paragraph}>
            In today's fast-evolving construction landscape, the need for a robust, integrated application that seamlessly connects general contractors, sub-contractors, and the entire supply chain has never been more critical. At DeloStyle, we are proud to introduce BetterBuild, a groundbreaking application designed to revolutionize the construction industry across the North American market.
          </Text>

          <Text style={styles.heading}>The Vision Behind BetterBuild</Text>
          <Text style={styles.paragraph}>
            BetterBuild was conceived with a singular vision: to create an ecosystem that bridges the gap between all stakeholders in the construction process. Our aim was to develop a comprehensive platform that integrates every aspect of the supply chain—from project bids to procurement, project delivery, and payments. This holistic approach ensures that all participants, from general contractors to sub-contractors, can collaborate more efficiently, ultimately driving productivity and profitability.
          </Text>

          <Text style={styles.heading}>Key Features Of BetterBuild</Text>
          <Text style={styles.subHeading}>1. Seamless Project Bidding</Text>
          <Text style={styles.paragraph}>
            The project bidding feature allows general contractors to post project opportunities and invite sub-contractors to submit their bids. This transparent and competitive environment ensures that projects are awarded to the most qualified and cost-effective bidders.
          </Text>

          <Text style={styles.subHeading}>2. Streamlined Procurement</Text>
          <Text style={styles.paragraph}>
            BetterBuild's procurement module simplifies the purchasing process, allowing users to manage orders, track inventory, and coordinate deliveries seamlessly. By integrating suppliers directly into the platform, we ensure that materials and services are procured efficiently and cost-effectively.
          </Text>

          <Text style={styles.subHeading}>3. Efficient Project Delivery</Text>
          <Text style={styles.paragraph}>
            Our project delivery tools enable real-time collaboration and communication among all project stakeholders. From project managers to on-site workers, everyone can access up-to-date information, track progress, and address issues promptly, ensuring that projects are completed on time and within budget.
          </Text>

          <Text style={styles.subHeading}>4. Integrated Payment Systems</Text>
          <Text style={styles.paragraph}>
            BetterBuild's integrated payment system facilitates secure and timely transactions between general contractors, sub-contractors, and suppliers. This feature ensures that all parties are compensated fairly and promptly, reducing financial friction and fostering trust.
          </Text>

          <Text style={styles.heading}>Testimonial</Text>
          <Text style={styles.paragraph}>
            We at Dunamis Pacific enjoyed partnering with DeloStyle. They were extremely professional. What I personally felt commendable is their focus on seeking clarity on the requirements & their ability to provide multiple solution options with quick turnarounds resulting in minimal reworks and on-time delivery.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200, // Adjust height as needed
  },
  shareButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#00000094',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareIcon: {
    width: 18,
    height: 15,
    tintColor: '#FFFFFF',
  },
  contentContainer: {
    padding: 11,
  },
  title: {
    color: '#00274D',
    fontWeight: '600',
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  infoText: {
    color: '#FF6600',
    fontWeight: '400',
    fontSize: 12,
  },
  infoTextDetail: {
    color: '#777777',
    fontWeight: '400',
    fontSize: 12,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: '400',
    color: '#777777',
    marginTop: 10,
  },
  heading: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    color: '#2E2E2E',
  },
  subHeading: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    color: '#2E2E2E',
  },
});

export default BetterBuild;

