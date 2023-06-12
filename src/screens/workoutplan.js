import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
const backgroundImg = require('../assets/images/OIP.png');

export default function MainScreen({ navigation }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://63e37f1dc919fe386c07b15b.mockapi.io/source')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Details', {
                    itemId: item.id,
                    itemName: item.name,
                    itemImage: item.image,
                    itemQuantity: item.quantity,
                    itemPrice: item.price,
                    itemDescription: item.description,
                    itemCategory: item.catId,
                });
            }}>
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={{ uri: item.image }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Tên : {item.name}</Text>
                    <Text style={styles.subtitle}>Số lượng : {item.quantity}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <ImageBackground source={backgroundImg} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titleText}>Danh sách sản phẩm</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    style={styles.flatList}
                    contentContainerStyle={styles.flatListContainer}

                />
            </SafeAreaView>
        </ImageBackground >

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        alignSelf: 'center',
        marginTop: 16,
        fontFamily: 'Consolas',
    },
    flatList: {
        width: '98%',
        alignSelf: 'center',
    },
    flatListContainer: {
        paddingBottom: 16,
    },
    item: {
        flexDirection: 'row',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        color: '#888888',
    },
});