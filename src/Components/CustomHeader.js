
import React from 'react';
import { View, Text, TouchableOpacity , Image} from 'react-native';
const CustomHeader = ({ navigation, title }) => {
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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Image/leftarrowA.png')} style={{ size: 22 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color:'#FFFFED'  , fontWeight:'500',marginLeft: '10%' }}>{title}</Text>
                <TouchableOpacity
                   onPress={() => navigation.navigate('QuotationScreen')}  style={{ marginLeft: '5%' }}>
                    <Image source={require('../assets/Image/carbonhome.png')} style={{ size: 22 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require('../assets/Image/bar.png')} style={{ size: 22 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomHeader;
