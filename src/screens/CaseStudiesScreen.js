import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import CustomHeader from '../Components/CustomHeader'
import HomeCustom from '../Components/HomeCustom'

const CaseStudiesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <CustomHeader navigation={navigation} title="Case Studies" /> */}

      <HomeCustom navigation={navigation} title="Case Studies" />

      <ScrollView style={{ padding: 10, }}>

        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate('ProjectRangamaati')}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View>
                <Image
                  source={require('../assets/Image/projectRanSmall.png')}
                />
              </View>
              <View style={{ width: '60%' }}>
                <Text style={styles.textbold}>Project Rangamaati-
                  Grassroot Initiative</Text>
                <Text style={styles.text}>Project Rangamaati works as a catalyst for impacting producer livelihoods at...</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>



        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate('BetterBuild')}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View>
                <Image
                  source={require('../assets/Image/batterSmall.png')}
                />
              </View>
              <View style={{ width: '60%' }}>
                <Text style={styles.textbold}>BetterBuild - Future Of The Industry</Text>
                <Text style={styles.text}>Frameworks to provide a robust synopsis for high level overviews. Iterative approaches...</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>




        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate('Grocair')}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View>
                <Image
                  source={require('../assets/Image/GrocairSmall.png')}
                />
              </View>
              <View style={{ width: '60%' }}>
                <Text style={styles.textbold}>Grocair - The Grocery App</Text>
                <Text style={styles.text}>In an era where convenience and efficiency are paramount, Grocair stands out as a pioneering solution that...</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>




        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate('EiffelIndustries')} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View>
                <Image
                  source={require('../assets/Image/EiffelSmall.png')}
                />
              </View>
              <View style={{ width: '60%' }}>
                <Text style={styles.textbold}>Eiffel Industries – A Beautiful Website Creation</Text>
                <Text style={styles.text}>DeloStyleStudio is proud to have created a stunning and effective website for...</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>



      </ScrollView>
    </SafeAreaView>

  )
}

export default CaseStudiesScreen;

const styles = StyleSheet.create({
  textbold: {
    marginBottom: 10,
    color: '#2E2E2E',
    fontSize: 14,
    fontWeight: '600'
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: "#777777",
  },
  card: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 10,
  }
})