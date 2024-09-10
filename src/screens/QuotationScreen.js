// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import Slider from '@react-native-community/slider';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import axios from 'axios';
// import CustomHeader from '../Components/CustomHeader';

// const QuotationScreen = ({ navigation }) => {
//   const [industry, setIndustry] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [message, setMessage] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [datePickerVisible, setDatePickerVisible] = useState(false);
//   const [timePickerVisible, setTimePickerVisible] = useState(false);
//   const [resources, setResources] = useState(1);
//   const [months, setMonths] = useState(1);
//   const basePrice = 3000;

//   const showDatePicker = () => setDatePickerVisible(true);
//   const hideDatePicker = () => setDatePickerVisible(false);
//   const showTimePicker = () => setTimePickerVisible(true);
//   const hideTimePicker = () => setTimePickerVisible(false);

//   const handleDateConfirm = (date) => {
//     setSelectedDate(date);
//     hideDatePicker();
//   };

//   const handleTimeConfirm = (time) => {
//     setSelectedTime(time);
//     hideTimePicker();
//   };

//   const calculatePrice = (resources, months) => {
//     return basePrice * resources * months;
//   };

//   const isValidEmail = (email) => {
//     // Simple regex for validating email format
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validateForm = () => {
//     if (!industry || !name || !email || !phone) {
//       Alert.alert('Validation Error', 'Please fill in all required fields.');
//       return false;
//     }
//     if (!isValidEmail(email)) {
//       Alert.alert('Validation Error', 'Please enter a valid email address.');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) {
//       return; // Stop submission if validation fails
//     }

//     const formattedDate = selectedDate ? selectedDate.toISOString() : '';
//     const formattedTime = selectedTime ? selectedTime.toISOString() : '';
//     const totalAmount = calculatePrice(resources, months);


//     try {
//       console.log('Request Data:', requestData); 
//       await axios.post('https://dstbackendnew1.onrender.com/api/v1/sendquotation?type=2', {
//         industry,
//         resources,
//         duration: months,
//         totalamount: totalAmount,
//         clientname: name,
//         email:email,
//         phone,
//         address,
//         servicedate: formattedDate,
//         message
//       });

//       console.log('API Response:', response.data);

//       Alert.alert('Success', 'Quotation sent successfully!');
//       resetForm();  // Call resetForm after successful submission
//     } catch (error) {
//       console.error('Error sending quotation:', error);
//       Alert.alert('Error', 'Failed to send quotation. Please try again.');
//     }
//   };

//   const resetForm = () => {
//     setIndustry('');
//     setName('');
//     setEmail('');
//     setPhone('');
//     setAddress('');
//     setMessage('');
//     setSelectedDate(null);
//     setSelectedTime(null);
//     setResources(1);
//     setMonths(1);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <CustomHeader navigation={navigation} title="Quotation" />
//       <View style={{ padding: 12 }}>
//         <ScrollView contentContainerStyle={styles.container}>
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Industry<Text style={styles.required}> *</Text></Text>
//             <Picker
//               selectedValue={industry}
//               onValueChange={(itemValue) => setIndustry(itemValue)}
//               style={styles.input}
//             >
//               <Picker.Item label="Select Industry" value="" />
//               <Picker.Item label="Energy" value="Energy" />
//               <Picker.Item label="Banking and Finance" value="Banking_and_Finance" />
//               <Picker.Item label="Food, Agriculture and Cosmetics" value="FoodAgricultureandCosmetics" />
//               <Picker.Item label="Healthcare and Pharmaceuticals" value="Healthcare_and_Pharmaceuticals" />
//               <Picker.Item label="Information Technology" value="Information_Technology" />
//               <Picker.Item label="Media and Telecom" value="Media_and_Telecom" />
//               <Picker.Item label="Retail and Consumer Goods" value="Retail_and_Consumer_Goods" />
//               <Picker.Item label="Construction" value="Construction" />
//               {/* Add more industries as needed */}
//             </Picker>
//           </View>

//           <View style={styles.sliderContainer}>
//             <Text style={styles.label}>
//               Approx Number of Resources:
//               <Text style={styles.sliderValueText}>{resources}</Text>
//             </Text>
//             <Slider
//               style={styles.slidersize}
//               minimumValue={1}
//               maximumValue={100}
//               minimumTrackTintColor="#FF6600"
//               maximumTrackTintColor="#000000"
//               thumbTintColor="#FF6600"
//               step={1}
//               value={resources}
//               onValueChange={value => setResources(value)}
//             />
//           </View>

//           <View style={styles.sliderContainer}>
//             <Text style={styles.label}>
//               Number of Months:
//               <Text style={styles.sliderValueText}>{months}</Text>
//             </Text>
//             <Slider
//               style={styles.slider}
//               minimumValue={1}
//               maximumValue={36}
//               minimumTrackTintColor="#FF6600"
//               maximumTrackTintColor="#000000"
//               thumbTintColor="#FF6600"
//               step={1}
//               value={months}
//               onValueChange={value => setMonths(value)}
//             />
//           </View>

//           <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//             <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//               <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, color: '#FF6600' }}>
//                 Total:
//               </Text>
//             </View>
//             <View>
//               <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, backgroundColor: '#00274D', padding: 15, color: '#FFFFED', borderBottomRightRadius: 22 }}>
//                 ${calculatePrice(resources, months).toFixed(2)}
//               </Text>
//             </View>
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Name<Text style={styles.required}> *</Text></Text>
//             <TextInput
//               value={name}
//               onChangeText={(text) => setName(text)}
//               style={styles.input}
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Email<Text style={styles.required}> *</Text></Text>
//             <TextInput
//               value={email}
//               onChangeText={(text) => setEmail(text)}
//               style={styles.input}
//               keyboardType="email-address"
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Phone Number<Text style={styles.required}> *</Text></Text>
//             <TextInput
//               value={phone}
//               onChangeText={(text) => setPhone(text)}
//               style={styles.input}
//               keyboardType="phone-pad"
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Address</Text>
//             <TextInput
//               value={address}
//               onChangeText={(text) => setAddress(text)}
//               style={styles.input}
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Preferred Service Date</Text>
//             <Text style={{ fontSize: 18, marginBottom: 10, color: 'green' }}>
//               {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
//             </Text>
//             <TouchableOpacity onPress={showDatePicker} style={styles.date}>
//               <Text style={styles.submitButtonText}>SELECT DATE</Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               date={selectedDate || new Date()}
//               isVisible={datePickerVisible}
//               mode="date"
//               onConfirm={handleDateConfirm}
//               onCancel={hideDatePicker}
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Preferred Service Time</Text>
//             <Text style={{ fontSize: 18, marginBottom: 10, color: 'green' }}>
//               {selectedTime ? selectedTime.toLocaleTimeString() : 'No time selected'}
//             </Text>
//             <TouchableOpacity onPress={showTimePicker} style={styles.date}>
//               <Text style={styles.submitButtonText}>SELECT TIME</Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               date={selectedTime || new Date()}
//               isVisible={timePickerVisible}
//               mode="time"
//               onConfirm={handleTimeConfirm}
//               onCancel={hideTimePicker}
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Message</Text>
//             <TextInput
//               placeholder="Enter your message"
//               value={message}
//               onChangeText={(text) => setMessage(text)}
//               style={styles.textArea}
//               multiline
//               numberOfLines={4}
//             />
//           </View>

//           <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//             <Text style={styles.submitButtonText}>Send Message</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.resetButton} onPress={resetForm}>
//             <Text style={styles.resetButtonText}>Reset</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#FEEFE5F7',
//     borderRadius: 12,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   inputGroup: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     color: '#00274D',
//     marginBottom: 5,
//     fontWeight: '500',
//   },
//   date: {
//     backgroundColor: '#FF6600',
//     padding: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//     color: '#000',
//   },
//   textArea: {
//     height: 80,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//     color: '#000',
//   },
//   total: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 10,
//     color: '#FF6600',
//   },
//   submitButton: {
//     backgroundColor: '#FF6600',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 60,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   slider: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   slidersize: {
//     width: '100%',
//     height: 40,
//     marginRight: 10,
//   },
//   sliderValueText: {
//     fontSize: 20,
//     color: '#00274D',
//   },
//   required: {
//     color: 'red',
//   },
// });

// export default QuotationScreen;




///////////////////////////////////

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import Slider from '@react-native-community/slider';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import axios from 'axios';
// import CustomHeader from '../Components/CustomHeader';

// const QuotationScreen = ({ navigation }) => {
//   const [industry, setIndustry] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [message, setMessage] = useState('');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [datePickerVisible, setDatePickerVisible] = useState(false);
//   const [timePickerVisible, setTimePickerVisible] = useState(false);
//   const [resources, setResources] = useState(1);
//   const [months, setMonths] = useState(1);
//   const basePrice = 3000;

//   const showDatePicker = () => setDatePickerVisible(true);
//   const hideDatePicker = () => setDatePickerVisible(false);
//   const showTimePicker = () => setTimePickerVisible(true);
//   const hideTimePicker = () => setTimePickerVisible(false);

//   const handleDateConfirm = (date) => {
//     const today = new Date();
//     // Ensure that the selected date is not before today's date
//     if (date < today) {
//       Alert.alert('Invalid Date', 'Please select a date from today onwards.');
//       return;
//     }
//     setSelectedDate(date);
//     hideDatePicker();
//   };

//   const handleTimeConfirm = (time) => {
//     setSelectedTime(time);
//     hideTimePicker();
//   };

//   const calculatePrice = (resources, months) => {
//     return basePrice * resources * months;
//   };

//   const isValidEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validateForm = () => {
//     if (!industry || !name || !email || !phone) {
//       Alert.alert('Validation Error', 'Please fill in all required fields.');
//       return false;
//     }
//     if (!isValidEmail(email)) {
//       Alert.alert('Validation Error', 'Please enter a valid email address.');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) {
//       return; // Stop submission if validation fails
//     }

//     const formattedDate = selectedDate ? selectedDate.toISOString() : '';
//     const formattedTime = selectedTime ? selectedTime.toISOString() : '';
//     const totalAmount = calculatePrice(resources, months);

//     try {
//       const response = await axios.post('https://dstbackendnew1.onrender.com/api/v1/sendquotation?type=2', {
//         industry,
//         resources,
//         duration: months,
//         totalamount: totalAmount,
//         clientname: name,
//         email,
//         phone,
//         address,
//         servicedate: formattedDate,
//         servicetime: formattedTime, // Assuming you want to send the time as well
//         message
//       });

//       console.log('API Response:', response.data);

//       Alert.alert('Success', 'Quotation sent successfully!');
//       resetForm();  // Call resetForm after successful submission
//     } catch (error) {
//       console.error('Error sending quotation:', error);
//       Alert.alert('Error', 'Failed to send quotation. Please try again.');
//     }
//   };

//   const resetForm = () => {
//     setIndustry('');
//     setName('');
//     setEmail('');
//     setPhone('');
//     setAddress('');
//     setMessage('');
//     setSelectedDate(null);
//     setSelectedTime(null);
//     setResources(1);
//     setMonths(1);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <CustomHeader navigation={navigation} title="Quotation" />
//       <View style={{ padding: 12 }}>
//         <ScrollView contentContainerStyle={styles.container}>
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Industry<Text style={styles.required}> *</Text></Text>
//             <Picker
//               selectedValue={industry}
//               onValueChange={(itemValue) => setIndustry(itemValue)}
//               style={styles.input}
//             >
//               <Picker.Item label="Select Industry" value="" />
//               <Picker.Item label="Energy" value="Energy" />
//               <Picker.Item label="Banking and Finance" value="Banking_and_Finance" />
//               <Picker.Item label="Food, Agriculture and Cosmetics" value="FoodAgricultureandCosmetics" />
//               <Picker.Item label="Healthcare and Pharmaceuticals" value="Healthcare_and_Pharmaceuticals" />
//               <Picker.Item label="Information Technology" value="Information_Technology" />
//               <Picker.Item label="Media and Telecom" value="Media_and_Telecom" />
//               <Picker.Item label="Retail and Consumer Goods" value="Retail_and_Consumer_Goods" />
//               <Picker.Item label="Construction" value="Construction" />
//             </Picker>
//           </View>

//           <View style={styles.sliderContainer}>
//             <Text style={styles.label}>
//               Approx Number of Resources:
//               <Text style={styles.sliderValueText}>{resources}</Text>
//             </Text>
//             <Slider
//               style={styles.slidersize}
//               minimumValue={1}
//               maximumValue={100}
//               minimumTrackTintColor="#FF6600"
//               maximumTrackTintColor="#000000"
//               thumbTintColor="#FF6600"
//               step={1}
//               value={resources}
//               onValueChange={value => setResources(value)}
//             />
//           </View>

//           <View style={styles.sliderContainer}>
//             <Text style={styles.label}>
//               Number of Months:
//               <Text style={styles.sliderValueText}>{months}</Text>
//             </Text>
//             <Slider
//               style={styles.slider}
//               minimumValue={1}
//               maximumValue={36}
//               minimumTrackTintColor="#FF6600"
//               maximumTrackTintColor="#000000"
//               thumbTintColor="#FF6600"
//               step={1}
//               value={months}
//               onValueChange={value => setMonths(value)}
//             />
//           </View>

//           <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//             <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//               <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, color: '#FF6600' }}>
//                 Total:
//               </Text>
//             </View>
//             <View>
//               <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, backgroundColor: '#00274D', padding: 15, color: '#FFFFED', borderBottomRightRadius: 22 }}>
//                 ${calculatePrice(resources, months).toFixed(2)}
//               </Text>
//             </View>
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Name<Text style={styles.required}> *</Text></Text>
//             <TextInput
//               value={name}
//               onChangeText={(text) => setName(text)}
//               style={styles.input}
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Email<Text style={styles.required}> *</Text></Text>
//             <TextInput
//               value={email}
//               onChangeText={(text) => setEmail(text)}
//               style={styles.input}
//               keyboardType="email-address"
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Phone Number<Text style={styles.required}> *</Text></Text>
//             <TextInput
//               value={phone}
//               onChangeText={(text) => setPhone(text)}
//               style={styles.input}
//               keyboardType="phone-pad"
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Address</Text>
//             <TextInput
//               value={address}
//               onChangeText={(text) => setAddress(text)}
//               style={styles.input}
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Preferred Service Date</Text>
//             <Text style={{ fontSize: 18, marginBottom: 10, color: 'green' }}>
//               {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
//             </Text>
//             <TouchableOpacity onPress={showDatePicker} style={styles.date}>
//               <Text style={styles.submitButtonText}>SELECT DATE</Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               date={selectedDate || new Date()}
//               isVisible={datePickerVisible}
//               mode="date"
//               onConfirm={handleDateConfirm}
//               onCancel={hideDatePicker}
//               minimumDate={new Date()} // This will ensure the picker does not allow past dates
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Preferred Service Time</Text>
//             <Text style={{ fontSize: 18, marginBottom: 10, color: 'green' }}>
//               {selectedTime ? selectedTime.toLocaleTimeString() : 'No time selected'}
//             </Text>
//             <TouchableOpacity onPress={showTimePicker} style={styles.date}>
//               <Text style={styles.submitButtonText}>SELECT TIME</Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               date={selectedTime || new Date()}
//               isVisible={timePickerVisible}
//               mode="time"
//               onConfirm={handleTimeConfirm}
//               onCancel={hideTimePicker}
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Message</Text>
//             <TextInput
//               placeholder="Enter your message"
//               value={message}
//               onChangeText={(text) => setMessage(text)}
//               style={styles.textArea}
//               multiline
//               numberOfLines={4}
//             />
//           </View>

//           <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//             <Text style={styles.submitButtonText}>Send Message</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.resetButton} onPress={resetForm}>
//             <Text style={styles.resetButtonText}>Reset</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#FEEFE5F7',
//     borderRadius: 12,
//   },
//   inputGroup: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     color: '#00274D',
//     marginBottom: 5,
//     fontWeight: '500',
//   },
//   date: {
//     backgroundColor: '#FF6600',
//     padding: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//     color: '#000',
//   },
//   textArea: {
//     height: 80,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//     color: '#000',
//   },
//   total: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 10,
//     color: '#FF6600',
//   },
//   submitButton: {
//     backgroundColor: '#FF6600',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 60,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   slider: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   slidersize: {
//     width: '100%',
//     height: 40,
//     marginRight: 10,
//   },
//   sliderValueText: {
//     fontSize: 20,
//     color: '#00274D',
//   },
//   required: {
//     color: 'red',
//   },
// });

// export default QuotationScreen;








import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import axios from 'axios';
import CustomHeader from '../Components/CustomHeader';

const QuotationScreen = ({ navigation }) => {
  const [industry, setIndustry] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [resources, setResources] = useState(1);
  const [months, setMonths] = useState(1);
  const basePrice = 3000;

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);
  const showTimePicker = () => setTimePickerVisible(true);
  const hideTimePicker = () => setTimePickerVisible(false);

  const handleDateConfirm = (date) => {
    const today = new Date();
    // Ensure that the selected date is not before today's date
    if (date < today) {
      Alert.alert('Invalid Date', 'Please select a date from today onwards.');
      return;
    }
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleTimeConfirm = (time) => {
    setSelectedTime(time);
    hideTimePicker();
  };

  const calculatePrice = (resources, months) => {
    return basePrice * resources * months;
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    if (!industry) {
      Alert.alert('Validation Error', 'Please select an industry.');
      return false;
    }
    if (!name) {
      Alert.alert('Validation Error', 'Please enter your name.');
      return false;
    }
    if (!email) {
      Alert.alert('Validation Error', 'Please enter your email address.');
      return false;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return false;
    }
    if (!phone) {
      Alert.alert('Validation Error', 'Please enter your phone number.');
      return false;
    }
    if (!address) {
      Alert.alert('Validation Error', 'Please enter your address.');
      return false;
    }
    if (!message) {
      Alert.alert('Validation Error', 'Please enter your message.');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    const formattedDate = selectedDate ? selectedDate.toISOString() : '';
    const formattedTime = selectedTime ? selectedTime.toISOString() : '';
    const totalAmount = calculatePrice(resources, months);

    try {
      const response = await axios.post('https://dstbackendnew1.onrender.com/api/v1/sendquotation?type=2', {
        industry,
        resources,
        duration: months,
        totalamount: totalAmount,
        clientname: name,
        email,
        phone,
        address,
        servicedate: formattedDate,
        servicetime: formattedTime, // Assuming you want to send the time as well
        message
      });

      console.log('API Response:', response.data);

      Alert.alert('Success', 'Quotation sent successfully!');
      resetForm();  // Call resetForm after successful submission
    } catch (error) {
      console.error('Error sending quotation:', error);
      Alert.alert('Error', 'Failed to send quotation. Please try again.');
    }
  };

  const resetForm = () => {
    setIndustry('');
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setMessage('');
    setSelectedDate(null);
    setSelectedTime(null);
    setResources(1);
    setMonths(1);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} title="Quotation" />
      <View style={{ padding: 12 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Industry<Text style={styles.required}> *</Text></Text>
            <Picker
              selectedValue={industry}
              onValueChange={(itemValue) => setIndustry(itemValue)}
              style={styles.input}
            >
              <Picker.Item label="Select" value="" />
              <Picker.Item label="Energy" value="Energy" />
              <Picker.Item label="Banking and Finance" value="Banking_and_Finance" />
              <Picker.Item label="Food, Agriculture and Cosmetics" value="FoodAgricultureandCosmetics" />
              <Picker.Item label="Healthcare and Pharmaceuticals" value="Healthcare_and_Pharmaceuticals" />
              <Picker.Item label="Information Technology" value="Information_Technology" />
              <Picker.Item label="Media and Telecom" value="Media_and_Telecom" />
              <Picker.Item label="Retail and Consumer Goods" value="Retail_and_Consumer_Goods" />
              <Picker.Item label="Construction" value="Construction" />
            </Picker>
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.label}>
              Approx Number of Resources:
              <Text style={styles.sliderValueText}>{resources}</Text>
            </Text>
            <Slider
              style={styles.slidersize}
              minimumValue={1}
              maximumValue={100}
              minimumTrackTintColor="#FF6600"
              maximumTrackTintColor="#000000"
              thumbTintColor="#FF6600"
              step={1}
              value={resources}
              onValueChange={value => setResources(value)}
            />
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.label}>
              Number of Months:
              <Text style={styles.sliderValueText}>{months}</Text>
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={36}
              minimumTrackTintColor="#FF6600"
              maximumTrackTintColor="#000000"
              thumbTintColor="#FF6600"
              step={1}
              value={months}
              onValueChange={value => setMonths(value)}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, color: '#FF6600' }}>
                Total:
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, backgroundColor: '#00274D', padding: 15, color: '#FFFFED', borderBottomRightRadius: 22 }}>
                ${calculatePrice(resources, months).toFixed(2)}
              </Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name<Text style={styles.required}> *</Text></Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email<Text style={styles.required}> *</Text></Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number<Text style={styles.required}> *</Text></Text>
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              value={address}
              onChangeText={(text) => setAddress(text)}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Preferred Service Date</Text>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'green' }}>
              {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
            </Text>
            <TouchableOpacity onPress={showDatePicker} style={styles.date}>
              <Text style={styles.submitButtonText}>SELECT DATE</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              date={selectedDate || new Date()}
              isVisible={datePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
              minimumDate={new Date()} // This will ensure the picker does not allow past dates
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Preferred Service Time</Text>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'green' }}>
              {selectedTime ? selectedTime.toLocaleTimeString() : 'No time selected'}
            </Text>
            <TouchableOpacity onPress={showTimePicker} style={styles.date}>
              <Text style={styles.submitButtonText}>SELECT TIME</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              date={selectedTime || new Date()}
              isVisible={timePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              placeholder="Enter your message"
              value={message}
              onChangeText={(text) => setMessage(text)}
              style={styles.textArea}
              multiline
              numberOfLines={4}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Send Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetButton} onPress={resetForm}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FEEFE5F7',
    borderRadius: 12,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#00274D',
    marginBottom: 5,
    fontWeight: '500',
  },
  date: {
    backgroundColor: '#FF6600',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  textArea: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#FF6600',
  },
  submitButton: {
    backgroundColor: '#FF6600',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 60,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  slider: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  slidersize: {
    width: '100%',
    height: 40,
    marginRight: 10,
  },
  sliderValueText: {
    fontSize: 20,
    color: '#00274D',
  },
  required: {
    color: 'red',
  },
  resetButton: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default QuotationScreen;



/////////////////////////////////////////////////////////////////////////////