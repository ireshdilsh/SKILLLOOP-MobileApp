import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function MainScreen() {
  return (
    <View>
      <LinearGradient
        colors={['#00c6ff', '#0072ff']}
        style={styles.container}
      >
        <Text style={styles.title}>Main Screen</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'open-sans-bold',
  },

  container:{
    height: '100%',
    width: '100%',
    display:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})