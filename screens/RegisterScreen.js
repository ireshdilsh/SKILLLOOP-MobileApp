import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.discription}>Sign up to swap books and connect with fellow readers.</Text>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.googleBtn}><Text style={styles.googleText}>Continue with Google</Text></TouchableOpacity>
        <TouchableOpacity style={styles.emailBtn}><Text style={styles.emailText}>Continue with Email</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  },

  title: {
    fontSize: 30,
    fontWeight: 700,
    fontFamily: 'Poppins',
    marginTop: 50,
    marginBottom: 15,
    color: '#333'
  },

  discription: {
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Poppins',
    color: '#333'
  },

  logo: {
    height: 300,
    width: 300,
    position: 'absolute',
    left: 45,
    top: 80
  },

  btns: {
    width: '100%'
  },

  googleBtn: {
    backgroundColor: '#0d6efd',
    marginTop: 100,
    padding: 10,
    borderRadius: 8,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emailBtn: {
    backgroundColor: '#fff',
    borderColor:'#333',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15
  },

  googleText:{
    fontFamily:'Poppins',
    fontWeight:600,
    color:'#fff'
  },

  emailText:{
    fontFamily:'Poppins',
    fontWeight:600,
    color:'#333'
  }

})
