import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CustomHeader from '../Components/CustomHeader';

const TechnologiesScreen = ({ navigation }) => {
  const [showIcons, setShowIcons] = useState(false);
  const [showServer, setShowServer] = useState(false);

  const [Mobile , setMobile ] = useState(false);
  const [CMS, setCMS] = useState(false);
  const [Database, setDatabase] = useState(false);
  const [Datascience, setDatascience] = useState(false);



  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const toggleServer = () => {
    setShowServer(!showServer);
  };

  const toggleMobile = () => {
    setMobile(!Mobile);
  };

  const toggleCMS = () => {
    setCMS(!CMS);
  };


  const toggleDatabase = () => {
    setDatabase(!Database);
  };

  const toggleDatascience = () => {
    setDatascience(!Datascience);
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} title="Technologies" />

      <ScrollView style={styles.containerView}>
        <View>
          <TouchableOpacity onPress={toggleIcons} style={[styles.header, showIcons && styles.headerActive]}>
            <Text style={styles.headerText}>Front End</Text>
            <Image
              source={showIcons ? require('../assets/Image/uparrow.png') : require('../assets/Image/downarrow.png')}
              style={styles.caretIcon}
            />
          </TouchableOpacity>

          {showIcons && (
            <View style={styles.iconRow}>
              <View style={styles.iconContainer}>
                <Image source={require('../assets/Image/html.png')} style={styles.iconImage} />
                </View>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/css.png')}
                  style={styles.iconImage}
                />
              </View>

              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/jquary.png')}
                  style={styles.iconImage}
                />
              </View>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/agroup.png')}
                  style={styles.iconImage}
                />
              </View>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/react.png')}
                  style={styles.iconImage}
                />
              </View>

            </View>
          )}
        </View>
        {/* ...................................................Server Side Start ............................................................... */}
        <View>
          <TouchableOpacity onPress={toggleServer} style={[styles.header, showServer && styles.headerActive]}>
            <Text style={styles.headerText}>Server Side</Text>
            <Image
              source={showServer ? require('../assets/Image/uparrow.png') : require('../assets/Image/downarrow.png')}
              style={styles.caretIcon}
            />
          </TouchableOpacity>

          {showServer && (
            <View style={styles.iconRow}>
              <View style={styles.iconContainer}>
                <Image source={require('../assets/Image/php.png')} style={styles.iconImage} />
              </View>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/s.png')}
                  style={styles.iconImage}
                />
              </View>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/c.png')}
                  style={styles.iconImage}
                />
              </View>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/django.png')}
                  style={styles.iconImage}
                />
              </View>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/vector.png')}
                  style={styles.iconImage}
                />
              </View>
            </View>
          )}
        </View>

        {/* ................................................................Server Side Start................................................................................. */}

        {/* ..........................................Mobile App START ............................................................................... */}
        <View>
          <TouchableOpacity onPress={toggleMobile} style={[styles.header, Mobile && styles.headerActive]}>
            <Text style={styles.headerText}>Mobile App</Text>
            <Image
              source={Mobile ? require('../assets/Image/uparrow.png') : require('../assets/Image/downarrow.png')}
              style={styles.caretIcon}
            />
          </TouchableOpacity>

          {Mobile && (
            <View style={styles.iconRow}>
              <View style={styles.iconContainer}>
                <Image source={require('../assets/Image/andr.png')} style={styles.iconImage} />
              </View>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/ios.png')}
                  style={styles.iconImage}
                />
              </View>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/molbii.png')}
                  style={styles.iconImage}
                />
              </View>

              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/react.png')}
                  style={styles.iconImage}
                />
              </View>
            </View>
          )}
        </View>
        {/* ..........................................Mobile App END............................................................................... */}



        {/* ..........................................CMS  START ............................................................................... */}
        <View>
          <TouchableOpacity onPress={toggleCMS} style={[styles.header, CMS && styles.headerActive]}>
            <Text style={styles.headerText}>CMS</Text>
            <Image
              source={CMS ? require('../assets/Image/uparrow.png') : require('../assets/Image/downarrow.png')}
              style={styles.caretIcon}
            />
          </TouchableOpacity>

          {CMS && (
            <View style={{ flexDirection: 'row',
            flexWrap: 'wrap', 
            marginTop: 10,
           }}>
              <View style={styles.iconContainer}>
                <Image source={require('../assets/Image/W.png')} style={styles.iconImage} />
              </View>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/cmswater.png')}
                  style={styles.iconImage}
                />
              </View>
            
            </View>
          )}
        </View>
        {/* ..........................................CMS END............................................................................... */}




        {/* ..........................................Database START ............................................................................... */}
        <View>
          <TouchableOpacity onPress={toggleDatabase} style={[styles.header, Database && styles.headerActive]}>
            <Text style={styles.headerText}>Database</Text>
            <Image
              source={Database ? require('../assets/Image/uparrow.png') : require('../assets/Image/downarrow.png')}
              style={styles.caretIcon}
            />
          </TouchableOpacity>

          {Database && (
            <View style={{ flexDirection: 'row',
            flexWrap: 'wrap', 
            marginTop: 10,
            }}>
              <View style={styles.iconContainer}>
                <Image source={require('../assets/Image/dbone.png')} style={styles.iconImage} />
              </View>
              
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/Image/dbleaf.png')}
                  style={styles.iconImage}
                />
              </View>

            </View>
          )}
        </View>
        {/* ..........................................Database END............................................................................... */}



        {/* ..........................................Datascience START ............................................................................... */}
        <View>
          <TouchableOpacity onPress={toggleDatascience} style={[styles.header, Datascience && styles.headerActive]}>
            <Text style={styles.headerText}>Datascience</Text>
            <Image
              source={Datascience ? require('../assets/Image/uparrow.png') : require('../assets/Image/downarrow.png')}
              style={styles.caretIcon}
            />
          </TouchableOpacity>

          {Datascience && (
            <View style={{ flexDirection: 'row',
            flexWrap: 'wrap', 
            marginBottom : 22,
            }}>
              <View style={styles.iconContainer}>
                <Image source={require('../assets/Image/datascience.png')} style={styles.iconImage} />
              </View>
              

            </View>
          )}
        </View>
        {/* ..........................................Datascience END............................................................................... */}


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,  
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  headerText: {
    color: '#00274D',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
  },
  headerActive: {
    backgroundColor: '#FF6600',
  },
  caretIcon: {
    width: 20,
    height: 20,
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    marginTop: 10,
    justifyContent:'space-between',
  },
  iconContainer: {
    margin: 8, 
 
  },
  iconImage: {
    width: 45, 
    height: 45, 
    resizeMode: 'contain', 
  },
});

export default TechnologiesScreen;
//