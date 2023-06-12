import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Profile</Text>
            <View style={styles.profileContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.text}>John Doe</Text>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.label}>Age:</Text>
                <Text style={styles.text}>30</Text>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.label}>Gender:</Text>
                <Text style={styles.text}>Male</Text>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.label}>Height:</Text>
                <Text style={styles.text}>180 cm</Text>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.label}>Weight:</Text>
                <Text style={styles.text}>75 kg</Text>
            </View>
            {/* Add more profile information as needed */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    profileContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    label: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        flex: 2,
        fontSize: 16,
    },
});



