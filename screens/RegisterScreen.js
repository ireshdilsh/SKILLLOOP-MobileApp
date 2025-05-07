import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function RegisterScreen() {

    const [passwords, setpasswords] = useState('');
    const [secure, setsecure] = useState(true);

    const toggleSecureEntry = () => setsecure(!secure);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.image}></Image>
            <Text style={styles.caption}>Create Account</Text>
            <Text style={styles.discription}>Join and start swapping skills today.</Text>
            {/* name text input and label */}
            <View style={styles.name}>
                <Text style={styles.nameLbl}>Full Name</Text>
                <TextInput placeholder='Mr. Smith' style={styles.nameInput} />
            </View>
            {/* email input and label */}
            <View style={styles.email}>
                <Text style={styles.emailLbl}>Email Address</Text>
                <TextInput keyboardType='email-address' style={styles.emailInput} placeholder='test1234@gmail.com'></TextInput>
            </View>
            {/* password input and label */}
            <View style={styles.password}>
                <Text style={styles.passLbl}>Create Password</Text>
                <TextInput
                    style={styles.passInput}
                    placeholder="Enter your password"
                    secureTextEntry={secure}
                    value={passwords}
                    onChangeText={setpasswords}
                />
                <TouchableOpacity onPress={toggleSecureEntry} style={styles.toggleButton}>
                    <Text style={styles.toggleText}>{secure ? 'Show' : 'Hide'}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20
    },

    image: {
        height: 200,
        width: 200,
        marginTop: -150
    },

    caption: {
        fontSize: 24,
        fontFamily: 'Poppins',
        color: '#333',
        fontWeight: 600
    },

    discription: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#333',
        marginTop: 3
    },

    name: {
        width: '100%',
        display: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    nameLbl: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#333',
        marginTop: 50,
        marginLeft: -273
    },

    nameInput: {
        width: 340,
        height: 48,
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        marginTop: 5,
        paddingLeft: 20
    },

    email: {
        width: '100%',
        display: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    emailInput: {
        width: 340,
        height: 48,
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        marginTop: 5,
        paddingLeft: 20
    },

    emailLbl: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#333',
        marginTop: 25,
        marginLeft: -245
    },

    password: {
        width: '100%',
        display: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    passInput: {
        width: 340,
        height: 48,
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        marginTop: 5,
        paddingLeft: 20
    },

    passLbl: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#333',
        marginTop: 25,
        marginLeft: -230
    },

    toggleButton:{
        width:60,
        height:48
    },

    toggleText:{
        fontSize:12,
        fontFamily: 'Poppins',
        color: 'gray',
        fontWeight:700,
        position:'absolute',
        right:-120,
        top:-33
    }
})