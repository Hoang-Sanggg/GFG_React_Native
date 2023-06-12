import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#007bff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
