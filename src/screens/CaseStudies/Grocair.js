import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet, Share } from 'react-native'
import React from 'react'
import CaseStudiesCustomHeader from '../../Components/CaseStudiesCustomHeader'

const Grocair = ({ navigation }) => {


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
    <SafeAreaView style={{ flex: 1 }}>

      <CaseStudiesCustomHeader navigation={navigation} title="Case Studies" />

      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/Image/grocairbig.png')}
              style={{ width: 'auto' }}
              resizeMode="cover"
            />

            <TouchableOpacity style={styles.shareButton} onPress={onShare}>
              <Image
                source={require('../../assets/Image/share.png')}
                style={styles.shareIcon}
              />
            </TouchableOpacity>
          </View>


          <View style={{ padding: 11, }}>
            <Text style={{ color: '#00274D', fontWeight: "600", fontSize: 16 }}>Grocair - The Grocery App</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <View >
                <Text style={{ color: '#FF6600', fontWeight: '400', fontSize: 12 }}>
                  Location :
                  <Text style={{ color: '#777777', fontWeight: "400", fontSize: 12 }}> Arizona</Text>
                </Text>
              </View>

              <View>
                <Text style={{ fontSize: 12, fontWeight: '400', color: '#FF6600' }}>
                  Year :
                  <Text style={{ color: "#777777", fontWeight: '400', fontSize: 12 }}> 2022</Text></Text>
              </View>
            </View>

            <Text style={styles.paragraph}>
              In an era where convenience and efficiency are paramount, Grocair stands out as a pioneering solution that redefines the grocery shopping experience. What started as a simple idea has materialized into a powerful, customer-driven application that is revolutionizing the way people shop for groceries. At [Your Organization's Name], we are proud to have developed Grocair, an app that not only meets the needs of consumers but also empowers businesses to thrive through effective inventory management.
            </Text>


            <Text style={styles.heading}>The Vision Behind Grocair</Text>
            <Text style={styles.paragraph}>
              Grocair was conceived with a clear vision: to create a seamless and efficient grocery shopping experience for customers while providing robust tools for businesses to manage their inventory and operations. The goal was to develop a user-friendly platform that integrates all aspects of the grocery shopping journey, from browsing products to managing stocks and ensuring timely deliveries.
            </Text>

            {/* ........... */}
            <Text style={styles.heading}>Key Features Of Grocair</Text>
            <Text style={styles.heading}>1. Customer-Centric Design</Text>
            <Text style={styles.paragraph}>
              Grocair’s intuitive interface is designed with the customer in mind, making it easy to browse, search, and purchase groceries. Personalized recommendations and easy navigation enhance the shopping experience, ensuring customers find what they need quickly and efficiently.
            </Text>



            <Text style={styles.heading}>2. Streamlined Procurement</Text>
            <Text style={styles.paragraph}>
              One of the standout features of Grocair is its real-time inventory management system. Businesses can monitor stock levels, track product movements, and manage restocking seamlessly. This feature ensures that shelves are always stocked, reducing the chances of out-of-stock items and enhancing customer satisfaction.
            </Text>

            <Text style={styles.heading}>3. Streamlined Order Processing</Text>
            <Text style={styles.paragraph}>
              Grocair streamlines the order processing workflow, from order placement to delivery. Businesses can track orders in real-time, coordinate with delivery partners, and ensure timely and accurate deliveries. This efficiency not only improves operational productivity but also boosts customer trust and loyalty.
            </Text>

            <Text style={styles.heading}>4. Data-Driven Insights</Text>
            <Text style={styles.paragraph}>
              The app provides valuable data-driven insights, helping businesses understand customer preferences, track sales trends, and make informed decisions. By leveraging these insights, grocery stores can optimize their offerings and tailor their services to meet the evolving demands of their customers.
            </Text>


            <Text style={styles.heading}>The Future with Grocair</Text>
            <Text style={styles.paragraph}>
              Grocair is a game-changer in the retail industry, offering a comprehensive solution that bridges the gap between customer needs and business operations. Join us in transforming the grocery shopping experience with Grocair and drive success for both consumers and businesses alike.
            </Text>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Grocair;
const styles = StyleSheet.create({

  scrollView: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200, 
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

  paragraph: {
    fontSize: 14,
    // marginBottom: 10,
    fontWeight: '400',
    color: '#777777',
    marginTop: 10
  },
  heading: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    color: '#2E2E2E',
  },
})