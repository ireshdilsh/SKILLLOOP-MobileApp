import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image}></Image>
      <Text style={styles.caption}>Unlock the Power of Peer Learning </Text>
      <Text style={styles.discription}>SkillLoop lets you exchange skills with others—no cost, just community.</Text>
      <Pressable style={styles.button}><Text style={styles.btn_text}>Get Started</Text></Pressable>
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
    height: 300,
    width: 300,
    marginTop: -200
  },

  caption: {
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#333',
    fontWeight: 800
  },

  discription: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 15
  },

  button: {
    backgroundColor: '#0D6EFD',
    padding: 15,
    width: 350,
    borderRadius: 10,
    position: 'absolute',
    top: 750
  },
  btn_text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 600
  }
})

