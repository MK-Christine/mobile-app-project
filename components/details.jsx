import url from '@/constants/url';
import{ View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useState, useEffect } from 'react';

function Details({ navigation, route }) {
    const { id } = route.params || {};
    const [details, setDetails] = useState([]);

    const getData = async () => { 
        await fetch(`${url}details.php?id=${id}`)
        .then((response) => response.text())
        .then((data) => {
            const details = JSON.parse(data);
            setDetails(details);
        })
    }
    useEffect(() => {
        getData();
    }, []);

    const deleteData = async () => {
        await fetch(`${url}delete.php?id=${id}`)
        .then((response) => response.text())
        .then((data) => {
            if (data == 1) {
                Alert.alert('Success', 'Product deleted successfully');
                navigation.navigate('home');
            } else {
                Alert.alert('Error', 'Failed to delete product');
            }
        })
    }

    const handleDelete = () => {
        Alert.alert(
            'Delete Product',
            'Are you sure you want to delete this product?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => deleteData()
                }
            ]
        );
    }

    return (
        <ScrollView
            style={{
                margin: 20,
            }}
        >
            
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: Colors.accent,
                        textAlign: 'center',
                        marginTop: 20
                    }}
                >Product Details</Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: Colors.accent,
                        textAlign: 'center',
                        marginTop: 70
                    }}
                >{details[0]?.productname}</Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'normal',
                        color: Colors.accent,
                        textAlign: 'center',
                        marginTop: 20
                    }}
                >Description: {details[0]?.description}</Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'normal',
                        color: Colors.accent,
                        textAlign: 'center',
                        marginTop: 20
                    }}
                >Quantity: {details[0]?.quantity}</Text>
            </View>

                   <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 50, marginTop: 70}}>
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
                      onPress={() => navigation.navigate('edit', { id })}
                      >
                      <Text style={{ fontWeight: 'bold', color: 'white'}}>EDIT</Text>
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
                      onPress={() => handleDelete()}
                      >
                      <Text style={{fontWeight: 'bold', color: 'white'}}>DELETE</Text>
                  </TouchableOpacity>
                 
                </View> 
        </ScrollView>
    );
}
export default Details;