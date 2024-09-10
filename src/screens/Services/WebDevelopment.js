// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
// import CustomHeader from '../../Components/CustomHeader';
// const WebDevelopment = ({navigation}) => {
//   return (
// <SafeAreaView style={{flex:1}}>
// <CustomHeader navigation={navigation} title="Services" />
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Web Development</Text>
//       <Text style={styles.paragraph}>
//         Looking to build a strong online presence? At Delostyle Studio, we offer top-notch web development services tailored to your needs. Our team of skilled developers creates responsive, user-friendly websites designed to captivate your audience and drive business growth.
//       </Text>
//       <Text style={styles.paragraph}>
//         We understand that every business is unique, which is why we focus on delivering customized web solutions that reflect your brand identity and meet your specific objectives.
//       </Text>
//       <Text style={styles.paragraph}>
//         Partner with us to transform your vision into a stunning, functional website.
//       </Text>
//       <Text style={styles.subheading}>Here's what we offer:</Text>
//       <View style={styles.list}>
//         <Text style={styles.listItem}>• Custom Web Development</Text>
//         <Text style={styles.listItem}>• Responsive Design</Text>
//         <Text style={styles.listItem}>• E-commerce Solutions</Text>
//         <Text style={styles.listItem}>• Content Management Systems</Text>
//         <Text style={styles.listItem}>• SEO Optimization</Text>
//         <Text style={styles.listItem}>• Maintenance and Support</Text>
//         <Text style={styles.listItem}>• User Experience Focus</Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('EnquiryForm')}>
//         <Text style={styles.buttonText}>Get In Touch</Text>
//       </TouchableOpacity>
//     </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//     flexGrow: 1,
//   },
//   heading: {
//     fontSize: 16,
//     fontWeight: '500',
//     marginBottom: 10,
//     color:'#00274D', 
//   },
//   paragraph: {
//     fontSize: 14,
//     marginBottom: 10,
//     fontWeight:'400',
//     color:'#777777',
//   },
//   subheading: {
//     fontSize: 16,
//     fontWeight: '400',
//     marginVertical: 10,
//     color:'#777777',
//   },
//   list: {
//     marginBottom: 20,
//   },
//   listItem: {
//     fontSize: 14,
//     marginBottom: 5,
//     fontWeight:'600',
//     color:'#2E2E2E',
//   },
//   button: {
//     backgroundColor: '#FF6600',
//     padding: 15,
//     alignItems: 'center',
//     borderRadius: 12,
//   },
//   buttonText: {
//     color: '#FFFFED',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// export default WebDevelopment;






import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import CustomHeader from '../../Components/CustomHeader';

const WebDevelopment = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} title="Services" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Web Development</Text>
        <Text style={styles.paragraph}>
          Looking to build a strong online presence? At Delostyle Studio, we offer top-notch web development services tailored to your needs. Our team of skilled developers creates responsive, user-friendly websites designed to captivate your audience and drive business growth.
        </Text>
        <Text style={styles.paragraph}>
          We understand that every business is unique, which is why we focus on delivering customized web solutions that reflect your brand identity and meet your specific objectives.
        </Text>
        <Text style={styles.paragraph}>
          Partner with us to transform your vision into a stunning, functional website.
        </Text>
        <Text style={styles.subheading}>Here's what we offer:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Custom Web Development</Text>
          <Text style={styles.listItem}>• Responsive Design</Text>
          <Text style={styles.listItem}>• E-commerce Solutions</Text>
          <Text style={styles.listItem}>• Content Management Systems</Text>
          <Text style={styles.listItem}>• SEO Optimization</Text>
          <Text style={styles.listItem}>• Maintenance and Support</Text>
          <Text style={styles.listItem}>• User Experience Focus</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EnquiryForm')}>
          <Text style={styles.buttonText}>Get In Touch</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: '#00274D',
  },
  paragraph: {
    fontSize: 14, // Increased font size from 14 to 16
    marginBottom: 10,
    fontWeight: '400',
    color: '#777777',
    fontStyle:"Roboto",
  },
  subheading: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 10,
    color: '#777777',
    marginBottom: 15,
  },
  list: {
    marginBottom: 20,
    marginLeft:5,
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '600',
    color: '#2E2E2E',
  },
  button: {
    backgroundColor: '#FF6600',
    padding: 15,
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFED',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WebDevelopment;
