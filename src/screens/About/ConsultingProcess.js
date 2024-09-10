// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// import AboutScreenCustomHeader from '../../Components/AboutScreenCustomHeader';

// const ConsultingProcess = ({ navigation }) => {
//   const steps = [
//     'Identify the client Requirement',
//     'Identify possible sources of manpower Supply',
//     'Communicating the Information to client',
//     'Start Opening',
//   ];

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <AboutScreenCustomHeader navigation={navigation} title="About" />

//       <ScrollView style={{ padding: 20, backgroundColor: '#fff', }}>

//         <View style={styles.container}>
//           <Text style={styles.title}>Consulting Process</Text>
//           {steps.map((step, index) => (
//             <View key={index} style={styles.stepContainer}>
//               <View style={styles.circle}>
//                 <Text style={styles.circleText}>{index + 1}</Text>
//               </View>
//               <Text style={styles.stepText}>{step}</Text>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {


//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '500',
//     marginBottom: 20,
//     color: '#00274D',
//   },
//   stepContainer: {
//     flexDirection: 'row',
//     // alignItems: 'center',
//     marginBottom: 20,
//     alignItems: 'flex-start',
//   },
//   circle: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#FFFFFF',
//     borderColor: '#B0BEC5',
//     borderWidth: 4,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//     // Changed to 20 to be a perfect circle
//   },
//   circleText: {
//     fontSize: 16,
//     color: '#FF6600',
//   },
//   stepText: {
//     fontSize: 14,
//     color: "#777777",
//     fontWeight: '700',
//   },
// });

// export default ConsultingProcess;




import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import AboutScreenCustomHeader from '../../Components/AboutScreenCustomHeader';

const ConsultingProcess = ({ navigation }) => {
  const steps = [
    'Identify the client Requirement',
    'Identify possible sources of manpower Supply',
    'Communicating the Information to client',
    'Start Opening',
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <AboutScreenCustomHeader navigation={navigation} title="About" />
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Consulting Process</Text>
          {steps.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 20,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
    color: '#00274D',
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#B0BEC5',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  circleText: {
    fontSize: 16,
    color: '#FF6600',
    
  },
  stepText: {
    fontSize: 14,
    color: "#777777",
    fontWeight: '700',
    flexShrink: 1, 
    
  },
});

export default ConsultingProcess;

