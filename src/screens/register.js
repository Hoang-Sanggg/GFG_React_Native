import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, ActivityIndicator, Modal } from 'react-native';
import axios from 'axios';

const backgroundImg = require('../assets/images/OIP.png');
const logoImg = require('../assets/images/logo11.png');

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [numberphone, setNumberPhone] = useState('');
    const [address, setAddress] = useState('');
    const [notification, setNotification] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = () => {
        setIsLoading(true); // Bắt đầu hiển thị màn hình loading

        axios.post('https://hoccungminh.dinhnt.com/fpt/register', {
            username: username,
            password: password
        })
            .then((response) => {
                console.log(response.data);
                // if (response.data.status === 1) {
                if (1 === 1) {
                    setIsLoading(false); // Kết thúc hiển thị màn hình loading
                    navigation.replace('Weight');
                } else {
                    setIsLoading(false); // Kết thúc hiển thị màn hình loading
                    Alert.alert('Error', response.data.notification);
                }
            })
            .catch((error) => {
                setIsLoading(false); // Kết thúc hiển thị màn hình loading
                console.error(error);
            });
    };

    return (
        <ImageBackground source={backgroundImg} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <ImageBackground source={logoImg} style={[styles.logo]} />
                    <Text>Đăng Kí</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Number phone"
                        value={numberphone}
                        onChangeText={setNumberPhone}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        value={address}
                        onChangeText={setAddress}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Login</Text>
                </TouchableOpacity>

                <Modal visible={isLoading} transparent>
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#007bff" />
                        <Text style={styles.loadingText}>Loading...</Text>
                    </View>
                </Modal>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 32,
        borderRadius: 16,
        width: '80%',
        alignItems: 'center',
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 32,
    },
    logo: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 32,
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 8,
        marginBottom: 16,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#ffffff',
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    loadingText: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});
