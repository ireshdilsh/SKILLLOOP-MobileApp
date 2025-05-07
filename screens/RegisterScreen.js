import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
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

            {/* Agreement with Radio button */}
            
            <Pressable style={styles.registerBtn}><Text style={styles.registerText}>Register Now</Text></Pressable>
            <View style={styles.login}>
                <Text style={styles.loginDisc}>Already have an account?</Text>
                <Text style={styles.loginText}>Sign In Here</Text>
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
        marginTop:-30
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
        marginTop: 40,
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

    toggleButton: {
        width: 60,
        height: 48
    },

    toggleText: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: 'gray',
        fontWeight: 700,
        position: 'absolute',
        right: -120,
        top: -33
    },

    registerBtn:{
        backgroundColor:'#0d6efd',
        width: 340,
        height: 48,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },

    registerText:{
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#fff',
        fontWeight: 600
    },

    login:{
        display:'flex',
        flexDirection:'row',
        gap:85,
        marginTop:25
    },

    loginDisc:{
        color:'#333',
        fontWeight:600,
        fontSize:14,
        fontFamily:'Poppins'
    },

    loginText:{
        color:'#0d6efd',
        fontWeight:600,
        fontSize:14,
        fontFamily:'Poppins',
    },
})