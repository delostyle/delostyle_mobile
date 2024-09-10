// import React from 'react';
// import { View, Text, SafeAreaView, ScrollView } from 'react-native';
// import CustomHeader from '../Components/CustomHeader';

// const ContactScreen = ({ navigation }) => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>

//       <CustomHeader navigation={navigation} title="Contacts" />
//       <ScrollView>
//         <View style={{ marginBottom: 22, padding: 22 }}>
//           <Text style={{ fontWeight: '700', color: '#00274D', fontSize: 18, marginBottom: 22 }}>
//             +91 6291 095 253
//           </Text>

//           <View
//             style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//             <View style={{ width: '50%' }}>
//               <Text style={{ fontWeight: '500', color: '#00274D' }}>
//                 Headquarter
//               </Text>
//               <Text
//                 style={{
//                   color: '#FF6600',
//                   fontSize: 24,
//                   fontWeight: 700,
//                   paddingTop: 11,
//                 }}>
//                 Kasba
//               </Text>
//               <Text
//                 style={{
//                   color: '#777777',
//                   fontSize: 14,
//                   fontWeight: '400',
//                   width: '100%',
//                 }}>
//                 1409, Rajdanga Block, BF-38, Shantipally, 1st Floor,
//                 Shantipally, Sector B, East Kolkata Twp, Kolkata, West Bengal
//                 700107
//               </Text>
//             </View>

//             <View style={{}}>
//               <Text style={{ fontWeight: '500', color: '#00274D' }}>
//                 Working Hours
//               </Text>
//               <Text
//                 style={{
//                   color: '#777777',
//                   fontSize: 14,
//                   fontWeight: '400',
//                   width: '100%',
//                   paddingTop: 11,
//                 }}>
//                 Monday - Friday
//               </Text>

//               <Text
//                 style={{
//                   color: '#777777',
//                   fontSize: 14,
//                   fontWeight: '400',
//                   width: '100%',
//                 }}>
//                 10 am to 6 pm IST
//               </Text>
//             </View>
//           </View>
//           <View style={{ borderBottomColor: '#8C9EAF', borderBottomWidth: 1, marginVertical: 10 }} />
//           <View
//             style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//             <View style={{ width: '50%' }}>
//               <Text style={{ fontWeight: '500', color: '#00274D' }}>
//                 Corporate Office
//               </Text>
//               <Text
//                 style={{
//                   color: '#FF6600',
//                   fontSize: 24,
//                   fontWeight: 700,
//                   paddingTop: 11,
//                 }}>
//                 Saltlake
//               </Text>
//               <Text
//                 style={{
//                   color: '#777777',
//                   fontSize: 14,
//                   fontWeight: '400',
//                   width: '100%',
//                 }}>
//                 Unit 17B Globsyn Crystals Block EP SaltLake 4th Floor Sector V Kolkata - 700091
//               </Text>
//             </View>

//             <View style={{}}>
//               <Text style={{ fontWeight: '500', color: '#00274D' }}>
//                 Working Hours
//               </Text>
//               <Text
//                 style={{
//                   color: '#777777',
//                   fontSize: 14,
//                   fontWeight: '400',
//                   width: '100%',
//                   paddingTop: 11,
//                 }}>
//                 Monday - Friday
//               </Text>

//               <Text
//                 style={{
//                   color: '#777777',
//                   fontSize: 14,
//                   fontWeight: '400',
//                   width: '100%',
//                 }}>
//                 10 am to 6 pm IST
//               </Text>
//             </View>
//           </View>



//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ContactScreen;






import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Linking , Image} from 'react-native';
import CustomHeader from '../Components/CustomHeader';

const ContactScreen = ({ navigation }) => {
  const handlePhoneCall = () => {
    const phoneNumber = '+916291095253';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
      <CustomHeader navigation={navigation} title="Contacts" />
      <ScrollView>
        <View style={{ marginBottom: 22, padding: 22 }}>



          <TouchableOpacity onPress={handlePhoneCall} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../assets/Image/contactCall.png')} 
              style={{ width: 24, height: 24, marginRight: 10 , marginBottom: 22 }} 
            />
            <Text style={{ fontWeight: '700', color: '#00274D', fontSize: 18, marginBottom: 22 }}>
              +91 6291 095 253
            </Text>
          </TouchableOpacity>




          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontWeight: '500', color: '#00274D' }}>
                Headquarter
              </Text>
              <Text style={{ color: '#FF6600', fontSize: 24, fontWeight: '700', paddingTop: 11 }}>
                Kasba
              </Text>
              <Text style={{ color: '#777777', fontSize: 14, fontWeight: '400', width: '100%' }}>
                1409, Rajdanga Block, BF-38, Shantipally, 1st Floor,
                Shantipally, Sector B, East Kolkata Twp, Kolkata, West Bengal
                700107
              </Text>
            </View>

            <View>
              <Text style={{ fontWeight: '500', color: '#00274D' }}>
                Working Hours
              </Text>
              <Text style={{ color: '#777777', fontSize: 14, fontWeight: '400', width: '100%', paddingTop: 11 }}>
                Monday - Friday
              </Text>
              <Text style={{ color: '#777777', fontSize: 14, fontWeight: '400', width: '100%' }}>
                10 am to 6 pm IST
              </Text>
            </View>
          </View>

          <View style={{ borderBottomColor: '#8C9EAF', borderBottomWidth: 1, marginVertical: 10 }} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontWeight: '500', color: '#00274D' }}>
                Corporate Office
              </Text>
              <Text style={{ color: '#FF6600', fontSize: 24, fontWeight: '700', paddingTop: 11 }}>
                Saltlake
              </Text>
              <Text style={{ color: '#777777', fontSize: 14, fontWeight: '400', width: '100%' }}>
                Unit 17B Globsyn Crystals Block EP SaltLake 4th Floor Sector V Kolkata - 700091
              </Text>
            </View>

            <View>
              <Text style={{ fontWeight: '500', color: '#00274D' }}>
                Working Hours
              </Text>
              <Text style={{ color: '#777777', fontSize: 14, fontWeight: '400', width: '100%', paddingTop: 11 }}>
                Monday - Friday
              </Text>
              <Text style={{ color: '#777777', fontSize: 14, fontWeight: '400', width: '100%' }}>
                10 am to 6 pm IST
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;
