
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
const SupportModel = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <CustomHeader navigation={navigation} title="Services" />

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.heading}>Support Model</Text>
                <Text style={styles.paragraph}>
                    Welcome to Delostyle Studio’s “Support Model” – your go-to solution for dependable and timely IT consulting services. In today’s fast-paced world of technology, our Support Model is designed to offer you the assistance you require, precisely when you need it, ensuring your business stays on the cutting edge.
                </Text>




                <View style={styles.list}>
                    <Text style={styles.listItem}>• Evaluation services</Text>
                    <Text style={styles.listItem}>• Development of risk free models</Text>
                    <Text style={styles.listItem}>• Perfect skill match</Text>
                    <Text style={styles.listItem}>• Fit to your budgett</Text>
                    <Text style={styles.listItem}>• Flexibility based on requirements</Text>
                </View>

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

export default SupportModel;
