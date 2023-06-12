import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';
import axios from 'axios';

export default function Details({ route }) {
    const { itemId,
        itemName,
        itemImage,
        itemQuantity,
        itemPrice,
        itemDescription,
        itemCategory } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Chi tiết sản phẩm</Text>
            <Image
                style={styles.image}
                source={{ uri: itemImage }}
            />

            <View style={styles.textContainer}>
                <Text style={styles.title}>{itemName}</Text>
                <Text style={styles.subtitle}>Số lượng: <Text style={styles.subtitleText}>{itemQuantity}</Text></Text>
                <Text style={styles.subtitle}>Giá sản phẩm: <Text style={styles.subtitleText}>{itemPrice}</Text></Text>
                <Text style={styles.subtitle}>Mô tả: <Text style={styles.subtitleText}>{itemDescription}</Text></Text>
                <Text style={styles.subtitle}>Loại sản phẩm: <Text style={styles.subtitleText}>{itemCategory}</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 50,
        marginTop: 0,
        fontFamily: 'Consolas',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 32,
    },
    inputContainer: {
        width: '80%',
    },
    image: {
        width: 250,
        height: 250,
        marginRight: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 8,
        marginBottom: 16,
        borderRadius: 8,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textContainer: {
        padding: 16,
        width: '80%',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 16,
        color: '#333333',
    },
    subtitleText: {
        color: '#666666',
        fontWeight: 'bold',
    },
});

