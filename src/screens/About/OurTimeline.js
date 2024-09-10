import { View, Text, SafeAreaView, ScrollView, Image, } from 'react-native'
import React from 'react'
import AboutScreenCustomHeader from '../../Components/AboutScreenCustomHeader'

const OurTimeline = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      < AboutScreenCustomHeader navigation={navigation} title='About' />
      <ScrollView >
        <View style={{ padding: 20, }}>

          <View style={{ marginBottom: 15 }}>
            <Text style={{ color: '#00274D', fontSize: 16, fontWeight: '500' }}>OurTimeline</Text>
          </View>

          {/* ................................................................................................................................................ */}
          <View style={{ alignItems: "center" }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: "#FF6600", padding: 10, width: 100, borderRadius: 12, alignItems: 'center', }}>
                <Text style={{ color: '#FFFFED', fontSize: 14, fontWeight: "700" }}>2016</Text>
              </View>

              <View style={{ marginLeft: 11 }} >
                <Image
                  source={require('../../assets/Image/righthand.png')}
                />
              </View>

              <View style={{ marginLeft: 11, width: '60%' }} >
                <View style={{ backgroundColor: '#EFD6C6', padding: 15, borderRadius: 12 }}>
                  <Text style={{ textAlign: 'center', color: '#777777', fontWeight: '400', fontSize: 14 }}>January 2016</Text>
                  <Text style={{ color: '#00274D', textAlign: 'center', fontWeight: "500", fontSize: 14 }}>New Office In Kolkata</Text>
                </View>
              </View>






            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: '10%' }}>
                <Image
                  source={require('../../assets/Image/downlongArrow.png')}
                />
              </View>

              <View style={{ marginLeft: '30%', width: '60%' }} >
                <View style={{ backgroundColor: '#EFD6C6', padding: 15, borderRadius: 12 }}>
                  <Text style={{ textAlign: 'center', color: '#777777', fontWeight: '400', fontSize: 14 }}>April 2016</Text>
                  <Text style={{ color: '#00274D', textAlign: 'center', fontWeight: "500", fontSize: 14 }}>Company Formation</Text>
                </View>
              </View>

            </View>
          </View>
          <View style={{ alignItems: "center" }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: "#00274D", padding: 10, width: 100, borderRadius: 12, alignItems: 'center', }}>
                <Text style={{ color: '#FFFFED', fontSize: 14, fontWeight: "700" }}>2019</Text>
              </View>

              <View style={{ marginLeft: 11, }} >
                <Image
                  source={require('../../assets/Image/rightfinger.png')}
                />
              </View>

              <View style={{ marginLeft: 11, width: '60%' }} >
                <View style={{ backgroundColor: '#ABC7E1', padding: 15, borderRadius: 12 }}>
                  <Text style={{ textAlign: 'center', color: '#FFFFED', fontWeight: '400', fontSize: 14 }}>October 2019</Text>
                  <Text style={{ color: '#00274D', textAlign: 'center', fontWeight: "500", fontSize: 14 }}>New Office In Kolkata</Text>
                </View>
              </View>

            </View>

          </View>


          <View style={{ marginLeft: '10%' }}>
            <Image
              source={require('../../assets/Image/smalldownarrow.png')}
            />
          </View>

          <View style={{ alignItems: "center", }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: "#FF6600", padding: 10, width: 100, borderRadius: 12, alignItems: 'center', }}>
                <Text style={{ color: '#FFFFED', fontSize: 14, fontWeight: "700" }}>2022</Text>
              </View>

              <View style={{ marginLeft: 11 }} >
                <Image
                  source={require('../../assets/Image/righthand.png')}
                />
              </View>

              {/* <View style={{ marginLeft: 11, width: '60%' }} >
                <View style={{ backgroundColor: '#EFD6C6', padding: 15, borderRadius: 12, }}>
                  <Text style={{ textAlign: 'center', color: '#777777', fontWeight: '400', fontSize: 14 }}>February 2022</Text>
                  <Text style={{ color: '#00274D', textAlign: 'center', fontWeight: "500", fontSize: 14, }}>Certificate Of Accreditation</Text>
                </View>
              </View> */}



              <View style={{  }}>
                <View style={{ backgroundColor: '#EFD6C6', padding: 15, borderRadius: 12, alignSelf: 'flex-start' }}>
                  <Text style={{ textAlign: 'center', color: '#777777', fontWeight: '400', fontSize: 14 }}>
                    February 2022
                  </Text>
                  <Text style={{ color: '#00274D', textAlign: 'center', fontWeight: "500", fontSize: 14 }}>
                    Certificate Of Accreditation
                  </Text>
                </View>
              </View>


              {/* <View style={{ marginLeft: '25%', width: '60%' }} >
                <View style={{ backgroundColor: '#EFD6C6', padding: 15, borderRadius: 12 }}>
                  <Text style={{ textAlign: 'center', color: '#777777', fontWeight: '400', fontSize: 14 }}>August 2022</Text>
                  <Text style={{ color: '#00274D', textAlign: 'center', fontWeight: "500", fontSize: 14 }}> Of Accreditation</Text>
                </View>
              </View> */}




            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: '12%' }}>
                <Image
                  source={require('../../assets/Image/downlongArrow.png')}
                />
              </View>

              <View style={{ marginLeft: '25%', width: '60%' }} >
                <View style={{ backgroundColor: '#EFD6C6', padding: 15, borderRadius: 12 }}>
                  <Text style={{ textAlign: 'center', color: '#777777', fontWeight: '400', fontSize: 14 }}>August 2022</Text>
                  <Text style={{ color: '#00274D', textAlign: 'center', fontWeight: "500", fontSize: 14 }}>Startup India Recognition</Text>
                </View>
              </View>

            </View>
          </View>
          <View style={{ alignItems: "center" }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: "#00274D", padding: 10, width: 100, borderRadius: 12, alignItems: 'center', }}>
                <Text style={{ color: '#FFFFED', fontSize: 14, fontWeight: "700" }}>2023</Text>
              </View>

              <View style={{ marginLeft: 11 }} >
                <Image
                  source={require('../../assets/Image/rightfinger.png')}
                />
              </View>

              <View style={{ marginLeft: 11, width: '60%' }} >
                <View style={{ backgroundColor: '#ABC7E1', padding: 15, borderRadius: 12 }}>
                  <Text style={{ textAlign: 'center', color: '#FFFFED', fontWeight: '400', fontSize: 14 }}>August 2023</Text>
                  <Text style={{ color: '#00274D', textAlign: 'center', fontWeight: "500", fontSize: 14 }}>New Office In Saltlake</Text>
                </View>
              </View>

            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default OurTimeline;
