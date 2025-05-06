
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';


function Signup({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const abc = async() => {

        if (email === '' || password === '' || confirmPassword === '' || firstName === '' || lastName === '') {
            Alert.alert("Error!",'Please fill all fields');
        } 
        else if (password !== confirmPassword) {
            Alert.alert("Error",'Passwords do not match');
        } else {
            
            await fetch(`http://192.168.137.68/pharmacy/signup.php?em=${email}&npass=${password}&fn=${firstName}&ln=${lastName}`)
            .then((response) => response.text())
            .then((data) => {
                if(data==1){
                    navigation.navigate('login');
                }
            })

            
        }
    }

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
                onChangeText={text => setFirstName(text)}
                
              
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
              onChangeText={text => setLastName(text)}
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
                onChangeText={text => setEmail(text)}   
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
                onChangeText={text => setPassword(text)}
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
                onChangeText={text => setConfirmPassword(text)}
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
                onPress={abc}>
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