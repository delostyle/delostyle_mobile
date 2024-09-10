import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet, Share } from 'react-native'
import React from 'react'
import CaseStudiesCustomHeader from '../../Components/CaseStudiesCustomHeader'


const ProjectRangamaati = ({ navigation }) => {


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
              source={require('../../assets/Image/projectRanBig.png')}
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
            <Text style={{ color: '#00274D', fontWeight: "600", fontSize: 16 }}>Project Rangamaati- Grassroot Initiative</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <View >
                <Text style={{ color: '#FF6600', fontWeight: '400', fontSize: 12 }}>
                  Location :
                  <Text style={{ color: '#777777', fontWeight: "400", fontSize: 12 }}> Kolkata</Text>
                </Text>
              </View>

              <View>
                <Text style={{ fontSize: 12, fontWeight: '400', color: '#FF6600' }}>
                  Year : 
                  <Text style={{ color: "#777777", fontWeight: '400', fontSize: 12 }}> 2022</Text></Text>
              </View>
            </View>

            <Text style={styles.paragraph}>
              Project Rangamaati is a grassroots initiative dedicated to empowering artisans of Bengal by helping them break free from exploitation and poverty. By enabling these artisans to achieve financial independence through the sales of their handicrafts and handloom products, Project Rangamaati fosters sustainable growth and community development.
            </Text>


            <Text style={styles.heading}>The Role of DeloStyle Studio</Text>
            <Text style={styles.paragraph}>
              DeloStyle Studio played a crucial role in enhancing Project Rangamaati's online presence by designing and developing a tailored e-commerce website. This platform not only reflects the brand's identity but is also optimized with the latest features to improve customer experience and drive sales.
            </Text>

            {/* ........... */}
            <Text style={styles.heading}>Enhanced Online Presence</Text>
            <Text style={styles.paragraph}>
              The custom e-commerce website significantly boosted Project Rangamaati's visibility. The increase in inquiries and conversion of leads to sales demonstrated the website's effectiveness in attracting and engaging customers.
            </Text>


            <Text style={styles.heading}>Cutting-Edge Technology Integration</Text>
            <Text style={styles.paragraph}>
              DeloStyle Studio integrated the latest technologies and functionalities into the website, ensuring it meets current industry standards and aligns perfectly with Project Rangamaati's needs.
            </Text>

            <Text style={styles.heading}>Testimonial</Text>
            <Text style={styles.paragraph}>
              DeloStyle Studio designed an ecommerce website for us , from scratch level ,integrating all latest technology as to meet our need ,right from theme to incorporating different functionalities.Working along with the Team seemed very easy and inclusive, Rajib displayed great patience in understanding our needs ,vision and mission and reflecting the same through the website they designed.
            </Text>

            <Text style={styles.paragraph}>
              DeloStyle Studio provided us with a positive experience in designing and developing our ecommerce website. When working with a professional team like DeloStyle Studio, their expertise in incorporating the latest technologies and functionalities ensures that your website meets your specific needs and aligns with current industry standards.
            </Text>

            <Text style={styles.paragraph}>
              The fact that working with the team felt easy and inclusive indicates effective communication and collaboration throughout the project. This was crucial for achieving a successful outcome and ensuring that our requirements and preferences are properly understood and implemented.
            </Text>


            <Text style={styles.heading}>The Future with DeloStyle Studio</Text>
            <Text style={styles.paragraph}>
              Our collaboration with DeloStyle Studio underscores our commitment to empowering artisans by leveraging technology. The user-friendly, feature-rich e-commerce platform they developed for Project Rangamaati is a testament to their professionalism and dedication. Partner with DeloStyle Studio to enhance your online presence and drive meaningful impact for your business and community.
            </Text>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default ProjectRangamaati;
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