
import { Colors } from '@/constants/Colors';
import react from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native';


function Login({navigation}) {
  return (
    <View>
        <View style={{alignContents: 'center', alignItems: 'center', marginTop: 10}}>
            
            <Image
                source={require('../assets/images/icon.png')}
                style={{width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: Colors.accent}}
            />
        </View>


        <View style={{alignItems: 'center', marginTop: 60}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: Colors.accent}}>Login</Text>

            <TextInput 
                placeholder="Email"
                style={{
                    width: 300,
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#004225',
                    borderRadius: 10,
                    paddingLeft: 10,
                    marginTop: 20
                }}
            />
            <TextInput 
                placeholder="Password"
                style={{
                    width: 300,
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#004225',
                    borderRadius: 10,
                    paddingLeft: 10,
                    marginTop: 10
                }}
              secureTextEntry={true}
            />
            <TouchableOpacity
                style={{
                    width: 300,
                    height: 50,
                    backgroundColor: '#004225',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20
                }}
                onPress={() => alert('Login button pressed')}
            >
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>LOGIN</Text>
            </TouchableOpacity>

        </View>
        <View>
          
          <TouchableOpacity>
          <Text style={{ fontSize: 20, margin: 60,marginTop:'60'}}>Forgot Password</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, marginHorizontal: 60, marginTop:'-20', }}>Don't have an account?</Text>
          
          <TouchableOpacity style={{
            width: 80,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 10,
            borderColor: Colors.accent,
            borderWidth: 1, 
            alignItems: 'center',
            justifyContent: 'center',
           marginLeft: 250,
           marginTop: -35,
           
          }}
          onPress={() => navigation.navigate('signup')}
          >
          <Text style={{color: Colors.accent, fontWeight: 'condensedBold'}}> SIGN UP </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

export default Login;