
import { Colors } from '@/constants/Colors';
import react from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';


function Signup({navigation}) {
  return (
    <ScrollView>
        <View style={{alignContents: 'center', alignItems: 'center', marginTop: 10}}>
            
            <Image
                source={require('../assets/images/icon.png')}
                style={{width: 150, height: 150, borderRadius: 75, borderWidth: 1, borderColor: Colors.accent}}
            />
        </View>


        <View style={{alignItems: 'center', marginTop: 60}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: Colors.accent}}>Signup</Text>
            <TextInput 
                placeholder="First name"
                style={{
                    width: 300,
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#004225',
                    borderRadius: 10,
                    paddingLeft: 10,
                    marginTop: 10
                }}
              
              />
              <TextInput 
              placeholder="Last name"
              style={{
                  width: 300,
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#004225',
                  borderRadius: 10,
                  paddingLeft: 10,
                  marginTop: 10
              }}
            
          />
            
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
                placeholder="new password"
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
             <TextInput 
                placeholder="Comfirm password"
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
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Signup</Text>
            </TouchableOpacity>

        </View>
        <View>
          
         
          <Text onPress={() => navigation.navigate('login')} style={{ fontSize: 20, margin: 50,marginTop:40, color: Colors.accent}} >Back to login</Text>
          
           
         
        </View>
    </ScrollView>
  );
}

export default Signup;