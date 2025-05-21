import {View, TouchableOpacity, Text, TextInput, Alert, ScrollView} from 'react-native';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';

function AddProduct({ navigation }){

    const [productName, setProductName] = useState('');
    const [quantity, setquantity] = useState('');
    const [description, setdescription] = useState('');


    const sendData = async() => {
        if (productName === '' || quantity === '' || description === '') {
            Alert.alert("Error!",'Please fill all fields');
        } 
        else {
            await fetch(`${Url}addproduct.php?pn=${productName}&q=${quantity}&desc=${description}`)
            .then((response) => response.text())
            .then((data) => {
                if(data==1){
                    navigation.navigate('home');
                }
                else{
                    Alert.alert("Error!",'Something went wrong');
                }
            })
        }
    }

    
    return(
        <ScrollView style={{ margin:20 }}>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: Colors.accent,
                    textAlign: 'center',
                    marginTop: 20
                }}
            >Add Product</Text>
            <TextInput placeholder="Product Name" 
            
            style={{
                height: 50,
                borderWidth: 1,
                borderColor: Colors.accent,
                borderRadius: 10,
                paddingLeft: 10,
                marginTop: 50
            }}
            onChangeText={(text) => setProductName(text)}
            />
            <TextInput placeholder="Quantity" 
            
            style={{
                height: 50,
                borderWidth: 1,
                borderColor: Colors.accent,
                borderRadius: 10,
                paddingLeft: 10,
                marginTop: 10
            }}
            onChangeText={(text) => setquantity(text)}
            /><TextInput placeholder="Description" 
            
            style={{
                height: 50,
                borderWidth: 1,
                borderColor: Colors.accent,
                borderRadius: 10,
                paddingLeft: 10,
                marginTop: 10
            }}
            onChangeText={(text) => setdescription(text)}
            />
            
            <TouchableOpacity
                style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: Colors.accent,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10
                }}
                 onPress={() => sendData()}
                
            >
                
                
                <Text style={{color: '#fff', fontWeight: '800'}}>SEND</Text>

            </TouchableOpacity>

            
        </ScrollView>
    );
}


export default AddProduct;