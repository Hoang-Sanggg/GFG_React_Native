import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

const UserProfileScreen = ({ navigation }) => {
    const onPressButton = () => {
        navigation.navigate('MainScreen');
    };
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: 'https://scr.vn/wp-content/uploads/2020/07/Avt-Anime-c%C3%B4-g%C3%A1i-cute-1024x1024.jpg' }} // Đường dẫn ảnh đại diện
                    style={styles.avatar}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Tên:</Text>
                <Text style={styles.text}>John Doe</Text>

                <Text style={styles.label}>Email:</Text>
                <Text style={styles.text}>johndoe@example.com</Text>

                <Text style={styles.label}>Địa chỉ:</Text>
                <Text style={styles.text}>123 ABC Street, XYZ City</Text>

                <Text style={styles.label}>Cân nặng:</Text>
                <Text style={styles.text}>70 kg</Text>

                <Text style={styles.label}>Chiều cao:</Text>
                <Text style={styles.text}>180 cm</Text>

                <Text style={styles.label}>Mục tiêu tập luyện:</Text>
                <Text style={styles.text}>Giảm cân và tăng cơ</Text>

                <TouchableOpacity style={styles.button} onPress={onPressButton}>
                    <Text>Bắt đầu ngay</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avatarContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    infoContainer: {
        width: '80%',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        marginBottom: 16,
    },
    button: {
        marginTop: 30,
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        width: '50%',
        alignItems: 'center',
        marginStart: '25%',
    },
});

export default UserProfileScreen;
