import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet , Share } from 'react-native'
import React from 'react'
import CustomHeader from '../../Components/CustomHeader'
import CaseStudiesCustomHeader from '../../Components/CaseStudiesCustomHeader'

const EiffelIndustries = ({ navigation }) => {

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

      {/* <CustomHeader navigation={navigation} title="Case Studies" /> */}

      <CaseStudiesCustomHeader navigation={navigation} title="Case Studies" />

      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/Image/eiffel.png')}
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
            <Text style={{ color: '#00274D', fontWeight: "600", fontSize: 16 }}>Eiffel Industries – A Beautiful Website Creation</Text>

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
              DeloStyleStudio is proud to have created a stunning and effective website for Eiffel Industries, carefully selecting the perfect color combinations and content to showcase their business model. By thoroughly understanding their requirements, we delivered a website that not only meets but exceeds their expectations, enhancing their online presence and leaving a lasting impression.
            </Text>

            <Text style={styles.heading}>Key Features Of Eiffel Industries Website</Text>
            <Text style={styles.heading}>1. Perfect Color and Content Selection</Text>
            <Text style={styles.paragraph}>
              We meticulously selected colors and crafted content that perfectly reflects the Eiffel Industries brand and business model, creating a cohesive and visually appealing online presence.
            </Text>

            {/* ........... */}
            <Text style={styles.heading}>2. User-Friendly Design</Text>
            <Text style={styles.paragraph}>
              Our design prioritized user experience, ensuring that the website is easy to navigate and that visitors can effortlessly find the information they need, contributing to a positive user experience.
            </Text>


            <Text style={styles.heading}>3. Professional Execution</Text>
            <Text style={styles.paragraph}>
              Our team offered multiple solutions with quick turnarounds, resulting in minimal reworks and ensuring on-time delivery. This demonstrates our commitment to professionalism, efficiency, and client satisfaction.
            </Text>

            <Text style={styles.heading}>The Future with DeloStyle Studio</Text>
            <Text style={styles.paragraph}>
              Our successful collaboration with Eiffel Industries underscores our dedication to creating beautiful, functional websites that leave a lasting impression. Partner with DeloStyleStudio to elevate your online presence, showcase your business effectively, and ensure a strong, lasting impact in the digital world.
            </Text>


          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default EiffelIndustries;
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

  paragraph: {
    fontSize: 14,
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