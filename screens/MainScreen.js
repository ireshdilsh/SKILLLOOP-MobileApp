import { View, Text, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainScreen() {
  const videoRef = useRef(null);

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <Video
        ref={videoRef}
        source={require('../assets/hero-video.mp4')}
        style={{ height: '100%', width: '100%' }}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        shouldPlay
      />
      <LinearGradient colors={['#fff', 'transparent']} style={{ height: '100%', width: '100%', position: 'absolute', padding: 40 }}>
        <Text style={{ fontSize: 16, marginTop: 390, fontWeight: 700, color: '#fff' }}>Your Journey, Your Way_</Text>
        <Text style={{ color: '#fff', fontSize: 36, fontWeight: 800 }}>Explore the World</Text>
        <Text style={{ color: '#fff', fontSize: 36, fontWeight: 800 }}>with Confidence</Text>
        <Text style={{ color: '#fff', textAlign: 'justify', marginTop: 8 }}>From sun-soaked beaches to mountain escapes, we offer personalized travel experiences and unforgettable memories.</Text>
        <TouchableOpacity style={{ marginTop: 55, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d6efd', height: 48, borderRadius: 5 }}>
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>Get Stated</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}