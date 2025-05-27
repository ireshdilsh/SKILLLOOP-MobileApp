import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
        <Text style={styles.title}>Connect Through</Text>
        <Text style={styles.title}>Book Swapping</Text>
        <Text style={styles.discription}>A simple app to swap books with nearby readers.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'#fff',
    padding:30,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  
  logo:{
    marginTop:50,
    height:100
  },

  title:{
    color:'#333',
    fontSize:30,
    fontWeight:700,
  }
})
