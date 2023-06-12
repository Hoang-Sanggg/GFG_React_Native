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
            <Text style={styles.titleText}>{itemName}</Text>
            <Image
                style={styles.image}
                source={{ uri: itemImage }}
            />
            <View style={styles.textContainer}>
                <Text style={{ fontSize: 20 }}>Mô tả : </Text>
                <Text style={styles.description}>Vị trí bắt đầu: đứng với đầu gối hơi khuỵu và di chuyển người về phía trước một chút, hơi cúi lưng. Giữ tay cầm với khoảng cách hẹp hơn vai. Cố gắng duỗi tay và gần chạm vào chân. Khi duỗi tay thở ra. Khi trở về vị trí ban đầu thì hít vào.</Text>
                {/* <Text style={styles.description}>{itemName}</Text> */}
                <Text style={{ fontSize: 20, marginTop: 16 }}>Hãy nhớ: </Text>
                <Text style={styles.description}>Giữ cùi chỏ tì vào người, không được di chuyển cùi chỏ lên xuống khi co duỗi tay. Ghi nhớ vị trí lưng dưới của bạn.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginTop: 20,
        marginStart: 10,
    },
    textContainer: {
        margin: 16,
    },
    description: {
        marginTop: 14,
        fontSize: 16,
    },
    image: {
        width: 250,
        height: 250,
        marginRight: 16,
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

