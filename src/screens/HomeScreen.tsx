import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import loginImg from '../assets/images/login.jpg';
import downarrow from '../assets/images/downarrow.png';

export default function HomeScreen({ navigation }: any) {
    return (
        <SafeAreaView style={styles.root}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Text style={styles.headerTxt}>Log in</Text>
            <Image style={styles.img} resizeMode='contain' source={loginImg} />
            <View style={styles.mainView}>
                <View style={styles.inputContainer}>
                    <View style={styles.countryCodeContainer}>
                        <Text style={styles.countryCode}>+91</Text>
                        <Image style={styles.da} resizeMode='contain' source={downarrow} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"
                        keyboardType="phone-pad"
                        placeholderTextColor="gray"
                    />
                </View>

                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.push('VerifyOtpScreen')}>
                        <Text style={styles.buttonText}>Get OTP</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.tncMain}>
                    <Text style={styles.tncText}>By signin up, you agree with terms and conditions</Text>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16
    },
    img: {
        height: "40%",
        width: '80%',
        alignSelf: 'center',
        marginTop: '10%'
    },
    headerTxt: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginTop: '5%'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 28,
        paddingHorizontal: 10,
        marginVertical: 10,
        height: 56,
    },
    countryCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    countryCode: {
        marginLeft: 5,
        fontSize: 18,
        marginLeft: 15
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: 'black',
    },
    da: {
        height: 15,
        width: 15,
        alignSelf: 'center',
        marginHorizontal: 15,
        marginTop: 3
    },
    button: {
        height: 56,
        backgroundColor: 'orange',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    tncMain: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        marginTop: 30
    },
    tncText: {
        color: '#D3D3D3',
        fontSize: 20,
        textAlign: 'center'
    },
    mainView: {
        marginTop: '25%'
    }
})
