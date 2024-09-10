import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigation';
import EnquiryScreen from '../screens/EnquiryScreen';
import ServicesScreen from '../screens/ServicesScreen';
import { Image, View, StyleSheet } from 'react-native';
import ContactScreen from '../screens/ContactScreen';

const Tab = createBottomTabNavigator();


const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          flexDirection: 'row',
          height: '10%',
          backgroundColor: '#00274D',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 14,
          color: '#FFFFFF',
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconBackgroundColor;

          switch (route.name) {
            case 'Home':
              iconName = require('../assets/Image/home.png');
              iconBackgroundColor = focused ? '#FF6600' : 'transparent';
              break;
            case 'Enquiry':
              iconName = require('../assets/Image/enquiry.png');
              iconBackgroundColor = focused ? '#FF6600' : 'transparent';
              break;
            case 'Services':
              iconName = require('../assets/Image/services.png');
              iconBackgroundColor = focused ? '#FF6600' : 'transparent';
              break;
            default:
              iconName = require('../assets/Image/home.png');
              iconBackgroundColor = 'transparent';
          }

          return (
            <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
              <Image source={iconName} style={styles.icon} />
            </View>
          );
        }
      })}
    >
      <Tab.Screen
        name='Home'
        component={StackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name="Enquiry"
        component={EnquiryScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Enquiry',
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Services',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 5,
  },
  icon: {
    height: 27,
    width: 27,
  },
});

export default BottomTabStack;
