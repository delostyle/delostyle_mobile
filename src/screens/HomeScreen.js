// It's a home Screen  Change App to Home Screen 

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// import CustomHeader from '../Components/CustomHeader';

import HomeCustomHeader from '../Components/HomeCustomHeader';

const HomeScreen = ({ navigation }) => {

  return ( 
    <SafeAreaView style={styles.container} >

      <HomeCustomHeader navigation={navigation} title="Home" />
      <ScrollView>
        <View style={{ padding: 20 }} >

          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/Image/homecard.png')}
              style={styles.image}
              resizeMode="cover"
            />
            {/* Four Texts aligned to the right of the image */}
            <View style={styles.textContainer}>
              <Text style={styles.text}>Looking for innovative </Text>
              <Text style={styles.textsecond}>business ideas<Text style={{ color: '#FFFFFF' }}>?</Text></Text>
              <Text style={styles.textthree}>We’re a young and creative company ready to bring fresh perspectives to your projects.</Text>

              <TouchableOpacity onPress={() => navigation.navigate('EnquiryForm')} style={styles.button}>
                <Text style={styles.buttonText}>Let’s Connect</Text>
              </TouchableOpacity>

            </View>
          </View>


          {/* ..Card 1. */}


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>

            <View style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
            }}><Text style={{ fontSize: 16, fontWeight: '500', color: '#00274D' }}>What We Offer</Text></View>

            <View style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
            }}>


              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                <Text style={{ fontSize: 12, fontWeight: '400', color: '#FF6600' }}>View All</Text>
              </TouchableOpacity>



            </View>
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

          {/* .......second Card ............. */}


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>

            <View style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
            }}><Text style={{ fontSize: 16, fontWeight: '500', color: '#00274D' }}>Our Business Models</Text></View>

            <View style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
            }}>
              <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                <Text style={{ fontSize: 12, fontWeight: '400', color: '#FF6600' }}>View All</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mainContent}>
            <View style={styles.cardContainer}>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('DedicatedHiring')}}>
                  <Image
                    source={require('../assets/Image/hoiringMOdel.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Dedicated
                    Hiring Model</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('Projectbased')}}>
                  <Image
                    source={require('../assets/Image/projectBased.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Project Based
                    Model</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>{navigation.navigate('TaskBasedModel')}}>
                  <Image
                    source={require('../assets/Image/TaskBased.png')} style={{ size: 22 }} />
                  <Text style={styles.cardText}>Task Based
                    Model</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>


        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imageContainer: {
    width: '100%',
    borderRadius: 11,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    position: 'absolute',
    top: 10,
    left: 22,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginVertical: 5,
    fontWeight: '600'
  },
  textsecond: {
    color: '#FF6600',
    fontSize: 18,
    marginVertical: 5,
    fontWeight: '600',
    marginTop:-8,
  },
  textthree: {
    color: 'white',
    fontSize: 12,
    marginVertical: 5,
    fontWeight: '400',
    width: '45%',
    marginTop:-2,
  },
  button: {
    backgroundColor: '#FF6600',
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    width: '40%',
    height: 'auto',
  },
  buttonText: {
    color: '#FFFFED',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 30,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
  },
  card: {
    backgroundColor: '#FEEFE5',
    width: '32%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    padding: 8,
    borderColor:'#FFE6D6',
  },
  cardText: {
    marginTop: 8,
    textAlign: 'center',
    color: '#00274D',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default HomeScreen;





// This is the Carrier Contact Screen Code for upload the PDF 



// import React, { useState } from 'react';
// import { View, Text, Button, Alert, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import RNFS from 'react-native-fs';
// import axios from 'axios';

// const CarriersScreen = () => {
//   const [fileName, setFileName] = useState('');
//   const [fileUri, setFileUri] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSelectFile = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: ['application/pdf'],
//       });
//       setFileName(res[0].name);
//       setFileUri(res[0].uri);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         Alert.alert('File selection was canceled');
//       } else {
//         Alert.alert('Unknown Error', err.message);
//       }
//     }
//   };

//   const handleUploadFile = async () => {
//     if (!fileUri) {
//       Alert.alert('No file selected');
//       return;
//     }

//     setLoading(true); 
//     try {
      
//       const fileContent = await RNFS.readFile(fileUri, 'base64');

     
//       const formData = new FormData();
//       formData.append('file', {
//         uri: fileUri,
//         type: 'application/pdf',
//         name: fileName,
//       });s

      
//       const response = await axios.post('https://dstbackend-2.onrender.com/api/v1/sendCv?type=3', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       Alert.alert('Upload Success', 'File uploaded successfully');
//       setFileName('');
//       setFileUri('');
//     } catch (error) {
//       console.error('Upload Error:', error);
//       Alert.alert('Error', 'Failed to upload file');
//     } finally {
//       setLoading(false); 
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Upload PDF File</Text>
//       <TouchableOpacity style={styles.button} onPress={handleSelectFile}>
//         <Text style={styles.buttonText}>Select PDF File</Text>
//       </TouchableOpacity>

//       {fileName ? (
//         <Text style={styles.fileName}>Selected File: {fileName}</Text>
//       ) : null}

//       <TouchableOpacity style={styles.button} onPress={handleUploadFile} disabled={loading}>
//         {loading ? (
//           <ActivityIndicator size="small" color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Upload File</Text>
//         )}
//       </TouchableOpacity>

//       {loading && <Text style={styles.loadingText}>Uploading...</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   button: {
//     backgroundColor: '#FF6600',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginVertical: 10,
//     width: '80%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   fileName: {
//     marginVertical: 10,
//     fontSize: 16,
//     color: '#555',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#555',
//   },
// });

// export default CarriersScreen;
