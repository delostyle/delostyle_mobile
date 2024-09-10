import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import BottomTabStack from './BottomTabStack';
import { Image, TouchableOpacity, Text, View, StyleSheet, Linking } from 'react-native';
import AboutScreen from '../screens/AboutScreen';
import ServicesScreen from '../screens/ServicesScreen';
import TechnologiesScreen from '../screens/TechnologiesScreen';
import CaseStudiesScreen from '../screens/CaseStudiesScreen';
import ArticlesScreen from '../screens/ArticlesScreen';
import RatingScreen from '../screens/RatingScreen';
import CarriersScreen from '../screens/CarriersScreen';
import ContactScreen from '../screens/ContactScreen';
import CustomDrawerItem from './CustomDrawerItem'; 

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const handleLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Image/deloimage.png')}
          style={styles.posterImage}
          resizeMode="cover"
        />
      </View>

      {/* Default Drawer Items */}
      <View>
        <CustomDrawerItem
          label="Main"
          onPress={() => props.navigation.navigate('Main')}
        />
        <CustomDrawerItem
          label="About"
          onPress={() => props.navigation.navigate('About')}
        />
        <CustomDrawerItem
          label="Services"
          onPress={() => props.navigation.navigate('Services')}
        />
        <CustomDrawerItem
          label="Technologies"
          onPress={() => props.navigation.navigate('Technologies')}
        />
        <CustomDrawerItem
          label="Case Studies"
          onPress={() => props.navigation.navigate('Case Studies')}
        />
        <CustomDrawerItem
          label="Articles"
          onPress={() => props.navigation.navigate('Articles')}
        />
        <CustomDrawerItem
          label="Ratings"
          onPress={() => props.navigation.navigate('Ratings')}
        />
        <CustomDrawerItem
          label="Careers"
          onPress={() => props.navigation.navigate('Careers')}
        />
        <CustomDrawerItem
          label="Contacts"
          onPress={() => props.navigation.navigate('Contacts')}
        />
      </View>

      {/* Footer with Social Links */}
      <View style={styles.footer}>
        <View style={styles.socialRow}>
          <TouchableOpacity
            style={styles.footerItem}
            onPress={() => handleLink('https://www.facebook.com/officialdelostylestudio')}>
            <Image
              source={require('../assets/Image/facebook.png')}
              style={styles.footerImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerItem}
            onPress={() => handleLink('https://www.youtube.com/@delostylestudio8426')}>
            <Image
              source={require('../assets/Image/youtube.png')}
              style={styles.footerImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerItem}
            onPress={() => handleLink('https://www.instagram.com/delostylestudio')}>
            <Image
              source={require('../assets/Image/instagram.png')}
              style={styles.footerImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerItem}
            onPress={() => handleLink('https://www.linkedin.com/company/delostylestudio/')}>
            <Image
              source={require('../assets/Image/linkedin.png')}
              style={styles.footerImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {/* Row with Image and Text */}
        <TouchableOpacity onPress={() => handleLink('https://delostylestudio.com/')} style={{ backgroundColor: '#FFFFFF' }}>
          <View style={styles.additionalRow}>
            <View>
              <Image
                source={require('../assets/Image/www.png')}
                resizeMode="cover"
              />
            </View>
            <View>
              <Text style={styles.additionalRowText}>delostylestudio.com</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawarScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{ drawerPosition: 'right' }}
    >
      <Drawer.Screen name="Main" component={BottomTabStack} options={{ headerShown: false }} />
      <Drawer.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Technologies" component={TechnologiesScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Case Studies" component={CaseStudiesScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Articles" component={ArticlesScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Ratings" component={RatingScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Careers" component={CarriersScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Contacts" component={ContactScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  posterImage: {
    width: '50%',
    height: '50%',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  footerItem: {
    flex: 1,
    paddingVertical: 5,
    alignItems: 'center',
  },
  additionalRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '20%',
  },
  additionalImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  additionalRowText: {
    fontSize: 16,
    color: '#00274D',
  },
});

export default DrawarScreen;
