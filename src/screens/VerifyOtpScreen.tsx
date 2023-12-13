import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import loginImg from '../assets/images/login.jpg';
import downarrow from '../assets/images/downarrow.png';


export default function VerifyOtpScreen() {

    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = Array(4).fill(0);

    const handleOtpChange = (index: any, value: any) => {
        const newOtp = [...otp];
        newOtp[index] = value;

        if (index < 3 && value !== '') {
            this[`otpInput${index + 1}`].focus();
        }

        setOtp(newOtp);
    };

    const verifyDetails = () => {
        // Perform necessary actions on verification
        Alert.alert('Verification', 'Your details have been submitted!');
    };

    return (
        <SafeAreaView style={styles.root}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Text style={styles.headerTxt}>OTP Verify</Text>
            <Image style={styles.img} resizeMode='contain' source={loginImg} />
            <View style={styles.mainView}>

                <Text style={styles.otpTxt}>OTP sent to</Text>
                <Text style={styles.otpNumberTxt}>+91 70967 72996</Text>

                <View style={styles.container}>
                    {inputs.map((_, index) => (
                        <TextInput
                            key={index}
                            style={styles.inputOTP}
                            value={otp[index]}
                            onChangeText={(text) => handleOtpChange(index, text)}
                            keyboardType="numeric"
                            maxLength={1}
                            ref={(input) => {
                                this[`otpInput${index}`] = input;
                            }}
                        />
                    ))}
                </View>

                <View>
                    <TouchableOpacity style={styles.button} onPress={verifyDetails}>
                        <Text style={styles.buttonText}>Verify OTP</Text>
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
        marginHorizontal: 15
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

    },
    tncText: {
        color: '#D3D3D3',
        fontSize: 20,
        textAlign: 'center'
    },
    mainView: {
        marginTop: '15%'
    },
    otpTxt: {
        textAlign: 'center',
        fontSize: 14,
        color: '#343434'
    },
    otpNumberTxt: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#303030'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        marginTop: 20,
        marginBottom: 20
    },
    inputOTP: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        textAlign: 'center',
        fontSize: 20,
    },
})