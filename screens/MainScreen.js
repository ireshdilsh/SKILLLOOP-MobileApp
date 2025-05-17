import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function MainScreen() {
  return (
    <View>
      <LinearGradient
        colors={['#00c6ff', '#0072ff']}
        style={styles.container}
      >
        <Text style={styles.title}>Landing Page</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Consolas',
  },

  container:{
    height: '100%',
    width: '100%',
    display:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})