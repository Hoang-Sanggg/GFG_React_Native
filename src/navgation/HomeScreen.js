import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const DATA = [
    { id: '1', title: 'Item 1', icon: 'https://th.bing.com/th/id/R.dd057c78d0c6992a4a8261282ce7b5ef?rik=aebPCnnGzoEmfw&pid=ImgRaw&r=0' },
    { id: '2', title: 'Item 2', icon: 'https://th.bing.com/th/id/OIP.TMFshh05M-ZJPuosn1aPrQHaHa?pid=ImgDet&rs=1' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
];

export default function MainScreen({ navigation }) {
    const handleMenuPress = () => {
        // Xử lý sự kiện khi nút menu được nhấn
    };

    const handleNotificationPress = () => {
        // Xử lý sự kiện khi biểu tượng thông báo được nhấn
        navigation.navigate('Notification');
    };

    const handlePlan = () => {
        // Xử lý sự kiện khi biểu tượng hồ sơ được nhấn
        navigation.navigate('WorkoutPlan');
    };


    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.toolbar}>
                    <View style={styles.leftContainer}>
                        <Image
                            source={{
                                uri: 'https://th.bing.com/th/id/R.f062133d4f57eaa706e8448d36805c8f?rik=ZdP1CR4E67%2fctA&pid=ImgRaw&r=0'
                            }}
                            style={styles.logo}
                        />
                    </View>
                    <View style={styles.rightContainer}>
                        <TouchableOpacity onPress={handleNotificationPress}>
                            <Image
                                source={{
                                    uri: 'https://th.bing.com/th/id/R.f062133d4f57eaa706e8448d36805c8f?rik=ZdP1CR4E67%2fctA&pid=ImgRaw&r=0'
                                }}
                                style={styles.notificationIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePlan}>
                            <Image
                                source={{
                                    uri: 'https://th.bing.com/th/id/R.f062133d4f57eaa706e8448d36805c8f?rik=ZdP1CR4E67%2fctA&pid=ImgRaw&r=0'
                                }}
                                style={styles.profileIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.cardContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.status}>PHẠM HOÀNG SANG</Text>
                            <Image
                                source={{ uri: 'https://th.bing.com/th/id/R.f062133d4f57eaa706e8448d36805c8f?rik=ZdP1CR4E67%2fctA&pid=ImgRaw&r=0' }}
                                style={styles.imageQRCode}
                            />
                        </View>
                        <Text style={styles.name}>PHẠM HOÀNG SANG</Text>
                        <Text style={styles.id}>12032003</Text>

                    </View>
                    <View style={styles.listContainer}>
                        <Text style={styles.text}>Tiện ích</Text>
                    </View>
                    <View style={styles.listContainer}>
                        {/* Các thành phần khác tại đây */}
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => (
                                <View style={styles.listItem}>
                                    <Image style={styles.listItemImage} src={item.icon} />
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                            horizontal
                        />
                    </View>
                    <View style={styles.listContainer}>
                        <Text style={styles.text}>Tiện ích</Text>
                    </View>
                    <View style={styles.cardContainer2}>
                        <Image
                            source={{ uri: 'https://thethaodonga.com/wp-content/uploads/2022/01/anh-gym-nghe-thuat-9.jpg' }}
                            style={styles.cardImage}
                        />
                    </View>
                    <View style={styles.listContainer}>
                        <Text style={styles.text}>Tiện ích</Text>
                    </View>
                    <View style={styles.cardContainer2}>
                        <Image
                            source={{ uri: 'https://thethaodonga.com/wp-content/uploads/2022/01/anh-gym-nghe-thuat-9.jpg' }}
                            style={styles.cardImage}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
    toolbarContainer: {
        backgroundColor: '#ffffff',
        elevation: 4,
    },
    toolbar: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    toolbarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardContainer: {
        width: '92%',
        height: 230,
        marginTop: 16,
        marginStart: '4%',
        marginEnd: '4%',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'gray',
    },
    cardImage: {
        width: '100%',
        height: 200,
    },
    listContainer: {
        marginTop: 10,
        paddingHorizontal: 16,
    },
    listItem: {
        width: 60,
        height: 60,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    listItemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    listItemImage: {
        width: 50,
        height: 50,
    },
    text: {
        fontSize: 16,
        marginTop: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    cardContainer2: {
        marginTop: 16,
        overflow: 'hidden',
    },
    status: {
        marginTop: 40,
        marginStart: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    name: {
        marginTop: 10,
        marginStart: 10,

        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    },
    id: {
        marginTop: 5,
        marginStart: 10,

        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    },
    imageQRCode: {
        width: 105,
        height: 105, // Thay chiều cao cố định bằng '100%' để hình ảnh chiếm toàn bộ chiều cao của cardContainer
        marginTop: 40,
        marginStart: 70,
    },
    toolbar: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 24,
    },
    notificationIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    profileIcon: {
        width: 30,
        height: 30,
    },

});
