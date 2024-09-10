
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const HomeCustomHeader = ({ navigation, title }) => {
    return (
        <View
            style={{
                backgroundColor: '#00274D',
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    width: '100%',
                }}>


                <View style={{ marginLeft: '30%' }}>
                    <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: '500' }}>{title}</Text>
                </View>
                <View style={{ marginLeft: '15%' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('QuotationScreen')} >
                        <Image source={require('../assets/Image/carbonhome.png')} style={{ size: 22 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require('../assets/Image/bar.png')} style={{ size: 22 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default HomeCustomHeader;
