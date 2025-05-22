
import {useState, useEffect} from 'react';

import { View, Text, ScrollView, TextInput,TouchableOpacity} from 'react-native';

import Url from '../constants/url';

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);

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


  const search = async (text) => {
    if (text === '') {
      getProducts();
    } else {
      await fetch(`${Url}/search.php?search=${text}`)
        .then((response) => response.text())
        .then((data) => {
          const products = JSON.parse(data);
          setProducts(products);
        });
    }
  }

  return (
      
    <View style={{}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#004225',
          marginVertical: 10,
          marginHorizontal: 20,
          
        }}>
        Welcome to the Pharmacy
      </Text>
      
       <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 50}}>
      <TouchableOpacity
          style={{
            flex: 1,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            backgroundColor: '#006600',
            borderRadius: 50,
            color: 'white',
            paddingVertical: 15,
          }}
          onPress={() => navigation.navigate('add')}
          >
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={{
            flex: 1,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            backgroundColor: '#aa0000',
            borderRadius: 50,
            color: 'white',
            paddingVertical: 15,
          }}
          onPress={() => navigation.navigate('sell')}
          >
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>-</Text>
      </TouchableOpacity>
     
    </View> 
      <View style={{margin: 20}}>
    <TextInput
        placeholder="Search"
        style={{
          width: '100%',
          height: 50,
          borderWidth: 1,
          borderColor: '#004225',
          borderRadius: 10,
          paddingLeft: 10,
        }}
        onChangeText={(text) => search(text)}
      />
      </View>
     <ScrollView style={{marginTop: 0}}>
  
      <View style={{marginTop: 10,  marginBottom: 250}}>

{
  products.map((prod, i)=>(
      <TouchableOpacity
           key={i}
          style={{
            width: '100%',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ddd',
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: '#f0f0f0',
            marginBottom: 5,
          }}
          onPress={() => navigation.navigate('details', {'id':prod.id})}
          >
          <Text style={{fontSize: 16, fontWeight: 'bold', color: ''}}>
            {prod.productname}
          </Text>
          <Text style={{fontSize: 14, fontStyle: 'italic', color: '#777', marginTop: 5}}>
            Quantity: {prod.quantity}
          </Text>
        </TouchableOpacity>
     
        ))}
      
      </View>

     </ScrollView>
    </View>
    
  );
};

export default Home;