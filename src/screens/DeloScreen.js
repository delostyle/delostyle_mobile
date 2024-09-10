import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

const DeloScreen = ({navigation}) => {

    const handleNext = () => {
        navigation.navigate('Main'); // Navigate to the main screen
      };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Image/background.png')} style={styles.backgroundImage}>
                <View style={styles.centerContainer}>
                    <Image source={require('../assets/Image/deloimage.png')} style={styles.centerImage} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: 259, height: 136 }}>
                        <Text style={styles.mainText}>Innovation</Text>
                        <Text style={{
                            fontSize: 40,
                            fontWeight: '700',
                            textAlign: 'center',
                            color: '#00274D',

                        }}>Generation</Text>
                        <Text style={styles.subText}>Consulting expertise that helps your business thrive</Text>
                    </View>
                </View>
            </ImageBackground>

          
            <TouchableOpacity style={styles.button}   onPress={handleNext}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerImage: {
        width: 259,
        height: 179,
        resizeMode: 'contain',
        marginBottom: 40,
    },
    mainText: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
        color: '#00274D',
        marginBottom: -10,
        fontStyle:'Roboto',
    },
    subText: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
        color: '#00274D',
        fontWeight: '400'
    },
    button: {
        position: 'absolute',
        bottom: 40, 
        backgroundColor: '#FF6600',
        paddingVertical: 10,
        paddingHorizontal: '30%',
        borderRadius: 12,
    },
    buttonText: {
        color: '#FFFFED',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default DeloScreen;
