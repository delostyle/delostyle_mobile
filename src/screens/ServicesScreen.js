import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import CustomHeader from '../Components/CustomHeader';

const ServicesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} >
      <CustomHeader navigation={navigation} title="Services" />

      <ScrollView>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>
            <View style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
            }}><Text style={{ fontSize: 16, fontWeight: '500', color: '#00274D' }}>Core Services - What We Offer</Text></View>
          </View>

          <View style={styles.mainContent}>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>navigation.navigate('WebDevelopment')}>
                  <Image
                    source={require('../assets/Image/webdesign.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Web
                    Development</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>navigation.navigate('Mobiledevelopment')}>
                  <Image
                    source={require('../assets/Image/mobile.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Mobile App
                    Development</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('ECommerceDevelopment')}}>
                  <Image
                    source={require('../assets/Image/ECommerce.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>E-commerce
                    Development</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>



          <View style={styles.mainContent}>
            <View style={styles.cardContainer}>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>navigation.navigate('InternetMarketing')}>
                  <Image
                    source={require('../assets/Image/InternetM.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Internet
                    Marketing</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('SoftwareDevelopment')}}>
                  <Image
                    source={require('../assets/Image/softwareD.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Software
                    Development</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('IOTSolutions')}}>
                  <Image
                    source={require('../assets/Image/iot.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>IOT
                    Solutions</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>


          <View style={styles.mainContent}>
            <View style={styles.cardContainer}>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('ItConsultancey')}}>
                  <Image
                    source={require('../assets/Image/itconsult.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>IT
                    Consultancy</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('BusinessSolutions')}}>
                  <Image
                    source={require('../assets/Image/business.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Business
                    Solutions</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('UIUXDesigining')}>
                  <Image
                    source={require('../assets/Image/uiux.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>UI/UX
                    Designing</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>



          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>

            <View style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
            }}><Text style={{ fontSize: 16, fontWeight: '500', color: '#00274D' }}>Staff Augmentation - Our Business Models</Text></View>
          </View>

          <View style={styles.mainContent}>
            <View style={styles.cardContainer}>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('DedicatedHiring')}}>
                  <Image
                    source={require('../assets/Image/dedicatedh.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Dedicated
                    Hiring Model</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('Projectbased')}}>
                  <Image
                    source={require('../assets/Image/pb.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Project Based
                    Model</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('TaskBasedModel')}}>
                  <Image
                    source={require('../assets/Image/model.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Task Based
                    Model</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>


          <View style={styles.mainContent}>
            <View style={styles.cardContainer}>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('HourModel')}}>
                  <Image
                    source={require('../assets/Image/hour.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Hour
                    Model</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>navigation.navigate('SupportModel')}>
                  <Image
                    source={require('../assets/Image/support.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Support
                    Model</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('HybrideModel')}}>
                  <Image
                    source={require('../assets/Image/hybridm.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Hybrid
                    Model</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

  },
  card: {
    backgroundColor: '#FEEFE5',
    width: '27%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    padding: 8,borderColor:'#FFE6D6',

  },
  cardText: {
    marginTop: 8,
    textAlign: 'center',
    color: '#00274D',
    fontSize: 12,
    fontWeight: '400',
  },
})


