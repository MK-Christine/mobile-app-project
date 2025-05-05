
import * as React from 'react';
import {NavigationContainer, NavigationIndependentTree} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './signup'; 

import Login from './login';


const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <NavigationIndependentTree>
        <Login/>
        <NavigationContainer>

                <Stack.Navigator>

                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="signup" component={Signup} />

                </Stack.Navigator>

        </NavigationContainer>

    </NavigationIndependentTree>
  );
};

export default Home;