import Url from '../constants/url';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useState, useEffect } from 'react';

function Edit({ navigation, route }) {
    const { id } = route.params || {};
    const [details, setDetails] = useState([]);
    const [productname, setProductname] = useState('');
    const [description, setDescription] = useState(''); 
    const [quantity, setQuantity] = useState('');

    const getData = async () => { 
        await fetch(`${Url}details.php?id=${id}`)
        .then((response) => response.text())
        .then((data) => {
            const details = JSON.parse(data);
            setDetails(details);
            setProductname(details[0]?.productname || '');
            setDescription(details[0]?.description || '');
            setQuantity(details[0]?.quantity || '');
        })
    }

    useEffect(() => {
        getData();
    }, []);

    const updateData = async () => {
        if (productname && description && quantity) {
            await fetch(`${Url}update.php?id=${id}&name=${encodeURIComponent(productname)}&description=${encodeURIComponent(description)}&quantity=${encodeURIComponent(quantity)}`)
            .then((response) => response.text())
            .then((data) => {
                if (data == 1) {
                    Alert.alert('Success', 'Product updated successfully');
                    navigation.navigate('home');
                } else {
                    Alert.alert('Error', 'Failed to update product');
                }
            })
        } else {
            Alert.alert('Error', 'Please fill all the fields');
            return;
        }
    }

    return (
        <ScrollView style={{ margin: 30 }}>
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: Colors.accent,
                        textAlign: 'center',
                        marginTop: 20
                    }}
                >Edit Product</Text>
                <TextInput
                    placeholder="Product Name"
                    value={productname}
                    style={{
                        borderColor: Colors.accent,
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        marginTop: 70
                    }}
                    onChangeText={setProductname}
                />
                <TextInput
                    placeholder="Description"
                    value={description}
                    style={{
                        borderColor: Colors.accent,
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        marginTop: 10,
                        height: 100
                    }}
                    multiline
                    numberOfLines={10}
                    onChangeText={setDescription}
                />
                <TextInput
                    placeholder="Quantity"
                    value={quantity}
                    style={{
                        borderColor: Colors.accent,
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        marginTop: 10
                    }}
                    keyboardType='numeric'
                    onChangeText={setQuantity}
                />
            </View>
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    backgroundColor: '#006600',
                    borderRadius: 50,
                    color: 'white',
                    paddingVertical: 15,
                    marginTop: 20,
                }}
                onPress={updateData}
            >
                <Text style={{ fontWeight: 'bold', color: 'white'}}>SAVE</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
export default Edit;
