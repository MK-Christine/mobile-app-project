import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useState, useEffect } from "react";
import Url from "../constants/url";


function Sellproduct({ navigation}){

      const [products, setProducts] = useState([]);
        const [product, setProduct] = useState('');
        const [quantity, setQuantity] = useState('');
    
      const getProducts = async () => {
    
        await fetch(`${Url}/getproduct.php`)
        .then((response) => response.text())
        .then((data) => {
          const products = JSON.parse(data);
          setProducts(products);
        })
      }
    
      useEffect(() => {
        
        
          getProducts();
      
        
      },[]);
    

    const sendData = async() => {
        if (product === '' || quantity === '') {
            Alert.alert("Error!",'Please fill all fields');
        } 
        else {
            await fetch(`${Url}sell.php?pid=${product}&q=${quantity}`)
            .then((response) => response.text())
            .then((data) => {
                if(data==1){
                    navigation.navigate('home');
                }
                else if(data==2){
                    alert('Not enough quantity');
                }
                else if(data==0){
                    alert('Product not found');
                }
            })
        }
    }


    return(
<View>
    <Text 
     style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.accent,
        textAlign: 'center',
        marginTop: 20
     }}
    >
        Sell Product
    </Text>

    <View style={{ marginTop: 40, alignItems: 'center', margin: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Select Category:</Text>
        <select
            style={{
                width: '100%',
                height: 40,
                fontSize: 16,
                borderRadius: 10,
                borderColor: '#ccc',
                paddingLeft: 10,
            }}
            onChange={(e) => setProduct(e.target.value)}
            value={product}
        >
            <option value="">Choose...</option>
            
            {products.map((product) => (
                <option key={product.id} value={product.id}>
                    {product.productname}
                </option>
            ))}
        </select>

        <TextInput
            placeholder="Quantity"
            style={{
                width: '100%',
                height: 40,
                borderWidth: 1,
                borderColor: Colors.accent,
                borderRadius: 10,
                paddingLeft: 10,
                marginTop: 20
            }}
            onChangeText={(text) => setQuantity(text)}
            keyboardType="numeric"
        />
        <TouchableOpacity 
        onPress={()=>sendData()}
        style={{
            width: '100%',
            padding: 10,
            backgroundColor: Colors.accent,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
            marginTop: 20
        }}>
        <text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            SUBMIT
        </text>
        </TouchableOpacity>
    </View>
</View>
    );
}
export default Sellproduct;