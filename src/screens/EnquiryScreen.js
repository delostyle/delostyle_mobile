// import React, { useState } from 'react';
// import { View, Text, Alert, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import RNPickerSelect from 'react-native-picker-select';
// import CustomHeader from '../Components/CustomHeader';
// import axios from 'axios';
// import Spinner from 'react-native-loading-spinner-overlay';
// import RNFetchBlob from 'rn-fetch-blob';

// const CarriersScreen = ({ navigation }) => {
//   const [file, setFile] = useState(null);
//   const [designation, setDesignation] = useState('');
//   const [location, setLocation] = useState('');
//   const [formKey, setFormKey] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const handleFileUpload = async () => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.pdf], // Allows picking all types of files
//       });

//       setFile(result[0]);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         Alert.alert('File selection was canceled.');
//       } else {
//         console.error('Error occurred during file selection:', err);
//         Alert.alert('Unknown Error', JSON.stringify(err));
//       }
//     }
//   };

//   const handleApply = async () => {
//     if (file && designation && location) {
//       setLoading(true);
  
//       const { uri, type, name } = file;
//       const fileData = await RNFetchBlob.fs.readFile(uri, 'base64');
  
//       const formData = new FormData();
//       formData.append('file', {
//         uri,
//         type,
//         name,
//       });
//       formData.append('jobrole', designation);
//       formData.append('location', location);
  
//       try {
//         const response = await RNFetchBlob.fetch('POST', 'https://dstbackendnew1.onrender.com/api/v1/sendCv?type=3', {
//           'Content-Type': 'multipart/form-data',
//         }, formData);
//         Alert.alert('Success', response.json().message);
//         resetForm();
//       } catch (error) {
//         console.error('Error occurred during form submission:', error);
//         Alert.alert('Submission Error', 'There was an error submitting your application.');
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       Alert.alert('Please fill all the fields');
//     }
//   };
  


//   const resetForm = () => {
//     setFile(null);
//     setDesignation('');
//     setLocation('');
//     setFormKey(prevKey => prevKey + 1); // Trigger a re-render by changing the formKey
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <CustomHeader navigation={navigation} title="Careers" />

//       <View style={{ padding: 22, justifyContent: 'center' }}>
//         <ScrollView key={formKey}>
//           <View style={styles.container}>
//             <Text style={styles.label}>Upload Your Document</Text>

//             <View style={styles.uploadContainer}>
//               <TouchableOpacity style={styles.uploadButton} onPress={handleFileUpload}>
//                 <Text style={styles.uploadButtonText}>
//                   {file ? file.name : 'Choose Document'}
//                 </Text>
//               </TouchableOpacity>

//               {file && (
//                 <Image
//                   source={{ uri: file.uri }}
//                   style={styles.image}
//                 />
//               )}
//             </View>

//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Designation</Text>
//               <RNPickerSelect
//                 onValueChange={(value) => setDesignation(value)}
//                 items={[
//                   { label: 'Development', value: 'development' },
//                   { label: 'Support', value: 'support' },
//                   { label: 'Human Resources', value: 'humanResources' },
//                   { label: 'Administrative', value: 'administrative' },
//                   { label: 'Quality Assurance', value: 'strategic' },
//                   { label: 'Management', value: 'management' },
//                 ]}
//                 placeholder={{ label: 'Designation', value: '' }}
//                 style={pickerSelectStyles}
//               />
//             </View>

//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Location</Text>
//               <RNPickerSelect
//                 onValueChange={(value) => setLocation(value)}
//                 items={[
//                   { label: 'Andhra Pradesh', value: 'Andhra_Pradesh' },
//                   { label: 'Andaman and Nicobar Island', value: 'Andaman_and_Nicobar_Island' },
//                   { label: 'Arunachal Pradesh', value: 'Arunachal_Pradesh' },
//                   { label: 'Assam', value: 'Assam' },
//                   { label: 'Bihar', value: 'Bihar' },
//                   { label: 'Chandigarh', value: 'Chandigarh' },
//                   { label: 'Chhattishgarh', value: 'Chhattishgarh' },
//                   { label: 'Dadra and Nagar Haveli and Daman and Diu', value: 'Dadra_and_Nagar_Haveli_and_Daman_and_Diu' },
//                   { label: 'Delhi', value: 'Delhi' },
//                   { label: 'Goa', value: 'Goa' },
//                   { label: 'Gujarat', value: 'Gujarat' },
//                   { label: 'Haryana', value: 'Haryana' },
//                   { label: 'Himachal Pradesh', value: 'Himachal_Pradesh' },
//                   { label: 'Jammu and Kashmir', value: 'Jammu_and_Kashmir' },
//                   { label: 'Jharkhand', value: 'Jharkhand' },
//                   { label: 'Karnataka', value: 'Karnataka' },
//                   { label: 'Kerala', value: 'Kerala' },
//                   { label: 'Ladakh', value: 'Ladakh' },
//                   { label: 'Lakshadweep', value: 'Lakshadweep' },
//                   { label: 'Madhya Pradesh', value: 'Madhya_Pradesh' },
//                   { label: 'Maharashtra', value: 'Maharashtra' },
//                   { label: 'Manipur', value: 'Manipur' },
//                   { label: 'Meghalaya', value: 'Meghalaya' },
//                   { label: 'Mizoram', value: 'Mizoram' },
//                   { label: 'Nagaland', value: 'Nagaland' },
//                   { label: 'Odisha', value: 'Odisha' },
//                   { label: 'Punjab', value: 'Punjab' },
//                   { label: 'Puducherry', value: 'Puducherry' },
//                   { label: 'Rajasthan', value: 'Rajasthan' },
//                   { label: 'Sikkim', value: 'Sikkim' },
//                   { label: 'Tamil Nadu', value: 'Tamil_Nadu' },
//                   { label: 'Telangana', value: 'Telangana' },
//                   { label: 'Tripura', value: 'Tripura' },
//                   { label: 'Uttarakhand', value: 'Uttarakhand' },
//                   { label: 'Uttar Pradesh', value: 'Uttar_Pradesh' },
//                   { label: 'West Bengal', value: 'West_Bengal' },
//                 ]}
//                 placeholder={{ label: 'Select Location', value: '' }}
//                 style={pickerSelectStyles}
//               />
//             </View>

//             <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
//               <Text style={styles.applyButtonText}>Apply For Job</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.restartButton} onPress={resetForm}>
//               <Text style={styles.restartButtonText}>Restart</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </View>

//       {/* Add the spinner overlay here */}
//       <Spinner
//         visible={loading}
//         textContent={'Submitting...'}
//         textStyle={styles.spinnerTextStyle}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#FEEFE5',
//     borderRadius: 12,
//   },
//   uploadContainer: {
//     alignItems: 'flex-start',
//     backgroundColor: '#FFFFFF',
//     padding: 5,
//     borderRadius: 8,
//     marginBottom: 20,
//     justifyContent: 'flex-start',
//   },
//   uploadButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 152,
//     height: 32,
//     borderColor: '#FF6600',
//     borderWidth: 1,
//     marginVertical: 10,
//     borderRadius: 24,
//     backgroundColor: '#FF660021',
//     left: 22,
//   },
//   uploadButtonText: {
//     color: '#FF6600',
//     textAlign: 'center',
//     fontWeight: '400',
//   },
//   image: {
//     marginTop: 10,
//     width: 100,
//     height: 100,
//     resizeMode: 'contain',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     marginBottom: 8,
//     fontSize: 16,
//     color: '#00274D',
//     fontWeight: '500',
//   },
//   applyButton: {
//     backgroundColor: '#FF6600',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   applyButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   restartButton: {
//     backgroundColor: '#DDDDDD',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   restartButtonText: {
//     color: '#000000',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   spinnerTextStyle: {
//     color: '#FFF',
//   },
// });

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 4,
//     color: '#00274D',
//     paddingRight: 30,
//   },
//   inputAndroid: {
//     fontSize: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 8,
//     color: '#00274D',
//     paddingRight: 30,
//   },
// });

// export default CarriersScreen;

// ..............Top Code should be wrong........

// import { View, Text } from 'react-native'
// import React from 'react'

// const EnquiryScreen = () => {
//   return (
//     <View>
//       <Text>EnquiryScreen</Text>
//     </View>
//   )
// }

// export default EnquiryScreen




import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import CustomHeader from '../Components/CustomHeader';

// Helper function to validate email format
const isValidEmail = (email) => {
  // Regular expression to check for a valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const EnquiryForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSendMessage = async () => {
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    const data = {
      name,
      email,
      subject,
      details: projectDetails,
    };

    setLoading(true); // Set loading to true when starting the request

    try {
      const response = await fetch('https://dstbackend-2.onrender.com/api/v1/sendEnquiry?type=1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Alert.alert('Success', 'Your enquiry has been sent successfully!');
        resetForm(); // Reset the form after a successful submission
      } else {
        Alert.alert('Error', 'Failed to send enquiry. Please try again later.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while sending your enquiry.');
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setProjectDetails('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader navigation={navigation} title="Enquiry" />
      <View style={{ padding: 22, justifyContent: "center" }}>
        <ScrollView style={{ backgroundColor: '' }}>
          <View style={{
            paddingHorizontal: 30,
            paddingVertical: 22,
            backgroundColor: '#FEEFE5',
          }}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Name
                <Text style={styles.required}> *</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholderTextColor={'red'}
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Your Email
                <Text style={styles.required}> *</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
                autoCompleteType="email" 
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Subject
                <Text style={styles.required}> *</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={subject}
                onChangeText={text => setSubject(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Project Details
                <Text style={styles.required}> *</Text>
              </Text>
              <TextInput
                style={[styles.input, styles.textarea]}
                placeholder="Enter project details"
                value={projectDetails}
                onChangeText={text => setProjectDetails(text)}
                multiline
                numberOfLines={4}
                placeholderTextColor={'gray'}
              />
            </View>
            {loading ? (
              <ActivityIndicator size="large" color="#FF6600" style={styles.loader} />
            ) : (
              <>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSendMessage}
                >
                  <Text style={styles.buttonText}>Send Message</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.resetButton]}
                  onPress={resetForm}
                >
                  {/* <Text style={styles.buttonText}>Reset Form</Text> */}
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#00274D',
  },
  required: {
    color: 'red',
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    color: "#000000",
  },
  textarea: {
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FF6600',
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#CCCCCC',
    marginTop: 10,
  },
  loader: {
    marginTop: 20,
  },
});

export default EnquiryForm;
