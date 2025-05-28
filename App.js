import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/RegisterScreen';
import CreateUsignEmail from './screens/CreateUsignEmail';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Landing' component={MainScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='ContinueEmail' component={CreateUsignEmail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
