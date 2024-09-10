import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import CustomHeader from '../Components/CustomHeader';
import Spinner from 'react-native-loading-spinner-overlay';

const CarriersScreen = ({ navigation }) => {
  const [file, setFile] = useState(null);
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSelectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: ['application/pdf'],
      });
      setFile(res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('File selection was cancelled');
      } else {
        Alert.alert('Unknown Error', err.message);
      }
    }
  };

  // const handleApply = async () => {
  //   if (file && designation && location) {
  //     setLoading(true); // Show the spinner

  //     const formData = new FormData();
  //     formData.append('file', {
  //       uri: file.uri,
  //       type: file.type,
  //       name: file.name || 'file',
  //     });
  //     formData.append('jobrole', designation);
  //     formData.append('location', location);

  //     try {
  //       const response = await axios.post('https://dstbackend-2.onrender.com/api/v1/sendCv?type=3', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });
  //       Alert.alert('Success', response.data.message);

  //       setFile(null);
  //       setDesignation('');
  //       setLocation('');
  //     } catch (error) {
  //       console.error('Upload Error:', error);
  //       Alert.alert('Error', 'Failed to upload file');
  //     } finally {
  //       setLoading(false); // Hide the spinner
  //     }
  //   } else {
  //     Alert.alert('Please fill all the fields');
  //   }
  // };




  const handleApply = async () => {
    if (file && designation && location) {
      setLoading(true); // Show the spinner
  
      const formData = new FormData();
      formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.name || 'file',
      });
      formData.append('jobrole', designation);
      formData.append('location', location);
  
      try {
        const response = await axios.post('https://dstbackend-2.onrender.com/api/v1/sendCv?type=3', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        Alert.alert('Success', response.data.message);
  
        // Clear all fields on success
        setFile(null);
        setDesignation('');
        setLocation('');
      } catch (error) {
        console.error('Upload Error:', error);
        Alert.alert('Error', 'Failed to upload file');
  
        // Clear all fields on error
        setFile(null);
        setDesignation('');
        setLocation('');
      } finally {
        setLoading(false); // Hide the spinner
      }
    } else {
      Alert.alert('Please fill all the fields');
    }
  };
  

  


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} title="Careers" />

      <View style={{ padding: 22, justifyContent: 'center' }}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.label}>Upload Your CV</Text>

            <View style={styles.uploadContainer}>
              <TouchableOpacity style={styles.uploadButton} onPress={handleSelectFile}>
                <Text style={styles.uploadButtonText}>
                  {file ? file.name : 'Choose PDF File'}
                </Text>
              </TouchableOpacity>

              {file && (
                <Image
                  source={{ uri: file.uri }}
                  style={styles.image}
                />
              )}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Designation</Text>
              <RNPickerSelect
                onValueChange={(value) => setDesignation(value)}
                items={[
                  { label: 'Development', value: 'development' },
                  { label: 'Support', value: 'support' },
                  { label: 'Human Resources', value: 'humanResources' },
                  { label: 'Administrative', value: 'administrative' },
                  { label: 'Quality Assurance', value: 'strategic' },
                  { label: 'Management', value: 'management' },
                ]}
                placeholder={{ label: 'Designation', value: '' }}
                style={pickerSelectStyles}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Location</Text>
              <RNPickerSelect
                onValueChange={(value) => setLocation(value)}
                items={[
                  { label: 'Andhra Pradesh', value: 'Andhra_Pradesh' },
                  { label: 'Andaman and Nicobar Island', value: 'Andaman_and_Nicobar_Island' },
                  { label: 'Arunachal Pradesh', value: 'Arunachal_Pradesh' },
                  { label: 'Assam', value: 'Assam' },
                  { label: 'Bihar', value: 'Bihar' },
                  { label: 'Chandigarh', value: 'Chandigarh' },
                  { label: 'Chhattishgarh', value: 'Chhattishgarh' },
                  { label: 'Dadra and Nagar Haveli and Daman and Diu', value: 'Dadra_and_Nagar_Haveli_and_Daman_and_Diu' },
                  { label: 'Delhi', value: 'Delhi' },
                  { label: 'Goa', value: 'Goa' },
                  { label: 'Gujarat', value: 'Gujarat' },
                  { label: 'Haryana', value: 'Haryana' },
                  { label: 'Himachal Pradesh', value: 'Himachal_Pradesh' },
                  { label: 'Jammu and Kashmir', value: 'Jammu_and_Kashmir' },
                  { label: 'Jharkhand', value: 'Jharkhand' },
                  { label: 'Karnataka', value: 'Karnataka' },
                  { label: 'Kerala', value: 'Kerala' },
                  { label: 'Ladakh', value: 'Ladakh' },
                  { label: 'Lakshadweep', value: 'Lakshadweep' },
                  { label: 'Madhya Pradesh', value: 'Madhya_Pradesh' },
                  { label: 'Maharashtra', value: 'Maharashtra' },
                  { label: 'Manipur', value: 'Manipur' },
                  { label: 'Meghalaya', value: 'Meghalaya' },
                  { label: 'Mizoram', value: 'Mizoram' },
                  { label: 'Nagaland', value: 'Nagaland' },
                  { label: 'Odisha', value: 'Odisha' },
                  { label: 'Punjab', value: 'Punjab' },
                  { label: 'Puducherry', value: 'Puducherry' },
                  { label: 'Rajasthan', value: 'Rajasthan' },
                  { label: 'Sikkim', value: 'Sikkim' },
                  { label: 'Tamil Nadu', value: 'Tamil_Nadu' },
                  { label: 'Telangana', value: 'Telangana' },
                  { label: 'Tripura', value: 'Tripura' },
                  { label: 'Uttarakhand', value: 'Uttarakhand' },
                  { label: 'Uttar Pradesh', value: 'Uttar_Pradesh' },
                  { label: 'West Bengal', value: 'West_Bengal' },
                ]}
                placeholder={{ label: 'Select Location', value: '' }}
                style={pickerSelectStyles}
              />
            </View>

            <TouchableOpacity style={styles.applyButton} onPress={handleApply} disabled={loading}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.applyButtonText}>Apply For Job</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Add the spinner overlay here */}
      <Spinner
        visible={loading}
        textContent={'Submitting...'}
        textStyle={styles.spinnerTextStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FEEFE5',
    borderRadius: 12,
  },
  uploadContainer: {
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'flex-start',
  },
  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 152,
    height: 32,
    borderColor: '#FF6600',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 24,
    backgroundColor: '#FF660021',
    left: 22,
  },
  uploadButtonText: {
    color: '#FF6600',
    textAlign: 'center',
    fontWeight: '400',
  },
  image: {
    marginTop: 10,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: '#00274D',
    fontWeight: '500',
  },

  applyButton: {
    backgroundColor: '#FF6600',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },



  spinnerTextStyle: {
    color: '#FFF',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
});

export default CarriersScreen;
