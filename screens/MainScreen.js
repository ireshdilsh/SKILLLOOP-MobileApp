import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function MainScreen ({navigation}) {

  const gotoRegisterScreen = () =>{
    navigation.navigate('Register')
  }

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
        <Text style={styles.titleOne}>Connect Through</Text>
        <Text style={styles.title}>Book Swapping</Text>
        <Text style={styles.discription}>A simple app to swap books with nearby readers.</Text>
        <TouchableOpacity onPress={gotoRegisterScreen} style={styles.btn}><Text style={styles.btntitle}>Get Started</Text></TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({

  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    padding: 40,
    justifyContent:'center',
    alignItems:'center'
  },

  logo: {
    height: 300,
    width: 300,
    position:'absolute',
    left:45,
    top:100
  },

  titleOne: {
    color: '#333',
    fontSize: 36,
    fontWeight: 800,
    fontFamily: 'Poppins',
    marginTop: 150
  },

  title: {
    color: '#333',
    fontSize: 36,
    fontWeight: 800,
    fontFamily: 'Poppins',
  },

  discription: {
    fontFamily: 'Poppins',
    marginTop:5
  },

  btn:{
    backgroundColor:'#0d6efd',
    marginTop:100,
    padding:10,
    borderRadius:8,
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },

  btntitle:{
    fontFamily:'Poppins',
    color:'#fff',
    fontWeight:700
  }

})

// setx /M REACT_NATIVE_PACKAGER_HOSTNAME 195.168.33.147