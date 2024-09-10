

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
const Projectbased = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <CustomHeader navigation={navigation} title="Services" />

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.heading}>Project Based Model</Text>
                <Text style={styles.paragraph}>
                    Our team exclusively stands out for identifying how every project is distinct, having its own set of challenges and objectives. Thus we came up with this model that’s perfectly designed to provide you with the flexibility and expertise your business needs to achieve success in your IT initiatives.
                </Text>

                <Text style={styles.paragraph}>
                    Our Project Based Model is your gateway to effective IT consulting services.
                </Text>

                {/* <Text style={styles.subheading}>Here's what we offer:</Text> */}
                <View style={styles.list}>
                    <Text style={styles.listItem}>• Project based services</Text>
                    <Text style={styles.listItem}>• Engagement of risk free models</Text>
                    <Text style={styles.listItem}>• Perfect skill match</Text>
                    <Text style={styles.listItem}>• Fit to your project budget</Text>
                    <Text style={styles.listItem}>• Flexibility based on requirements</Text>

                    <View style={{
                        borderBottomColor: '#FEE2D0',
                        borderBottomWidth: 1,
                        marginVertical: 10,
                    }} />


                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={styles.card}>

                            <Image
                                source={require('../../assets/Image/Ssl.png')} style={{ size: 22 }} />
                            <Text style={styles.cardText}>Server Side
                                Language</Text>

                        </View>
                        <View style={styles.card}>

                            <Image
                                source={require('../../assets/Image/Db.png')} style={{ size: 22 }} />
                            <Text style={styles.cardText}>Database Specialization</Text>

                        </View>
                        <View style={styles.card}>

                            <Image
                                source={require('../../assets/Image/FeT.png')} style={{ size: 22 }} />
                            <Text style={styles.cardText}>Front-end
                                Technology</Text>

                        </View>
                        <View style={styles.card}>

                            <Image
                                source={require('../../assets/Image/Pm.png')} style={{ size: 22 }} />
                            <Text style={styles.cardText}>Project
                                Management</Text>

                        </View>
                    </View>


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
        fontSize: 14,
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
    },
    list: {
        marginBottom: 20,
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
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFED',
        fontSize: 18,
        fontWeight: '600',
    },
    card: {
        // backgroundColor: '#FEEFE5',
        width: '27%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 8,

    },
    cardText: {
        marginTop: 8,
        textAlign: 'center',
        color: '#00274D',
        fontSize: 12,
        fontWeight: '400',
    },

});

export default Projectbased;
