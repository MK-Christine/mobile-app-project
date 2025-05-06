import {NavigationContainer, NavigationIndependentTree} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../components/signup'; 
import Index from '../components/index'; // Import your Index component
import Login from '../components/login'; // Import your Login component
import Home from '../components/home'; // Import your Home component


const Stack = createNativeStackNavigator();


export default function RootLayout() {
 
  return (
    <NavigationIndependentTree>
            
            <NavigationContainer>
    
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
            
                      <Stack.Screen name="login" component={Login} />
                      <Stack.Screen name="signup" component={Signup} />
                      <Stack.Screen name="home" component={Home} />
            
                    </Stack.Navigator>
    
            </NavigationContainer>
    
        </NavigationIndependentTree>
  );
}
