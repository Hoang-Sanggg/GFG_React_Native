import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text, SafeAreaView, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const imageWidth = windowWidth * 0.48;
const evenButtonHeight = 180;
const oddButtonHeight = 180;

export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        // Xử lý tìm kiếm
    };

    const handleExercisePressChest = (exercise) => {
        // Xử lý khi nút bài tập được nhấn
        navigation.navigate('Chest');
    };

    const handleExercisePressBack = (exercise) => {
        navigation.navigate('Back');
    };
    const handleExercisePressFontArm = (exercise) => {
        // Xử lý khi nút bài tập được nhấn
        navigation.navigate('FontArm');
    };
    const handleExercisePressShoulder = (exercise) => {
        // Xử lý khi nút bài tập được nhấn
        navigation.navigate('Shoulder');
    };
    const handleExercisePressBackArm = (exercise) => {
        // Xử lý khi nút bài tập được nhấn
        navigation.navigate('BackArm');
    };
    const handleExercisePressBung = (exercise) => {
        // Xử lý khi nút bài tập được nhấn
        navigation.navigate('Bung');
    };
    const handleExercisePressLeg = (exercise) => {
        // Xử lý khi nút bài tập được nhấn
        navigation.navigate('Leg');
    };
    const handleExercisePressHeart = (exercise) => {
        // Xử lý khi nút bài tập được nhấn
        navigation.navigate('Heart');
    };
    const handleExercisePressCaNhan = (exercise) => {
        // Xử lý khi nút bài tập được nhấn
        navigation.navigate('Personal');
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Tìm kiếm"
                            value={searchText}
                            onChangeText={setSearchText}
                            onSubmitEditing={handleSearch}
                        />
                    </View>
                    <View style={styles.exerciseContainer}>
                        <View style={[styles.exerciseButton, { height: evenButtonHeight }]}>
                            <TouchableOpacity onPress={() => handleExercisePressChest('exercise1')} style={styles.imageButton}>
                                <Image source={require('../assets/images/nguc.jpg')} style={styles.exerciseImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.exerciseButton, { height: oddButtonHeight }]}>
                            <TouchableOpacity onPress={() => handleExercisePressBack('exercise2')} style={styles.imageButton}>
                                <Image source={require('../assets/images/trolai.jpg')} style={styles.exerciseImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.exerciseButton, { height: evenButtonHeight }]}>
                            <TouchableOpacity onPress={() => handleExercisePressShoulder('exercise3')} style={styles.imageButton}>
                                <Image source={require('../assets/images/vai.jpg')} style={styles.exerciseImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.exerciseButton, { height: oddButtonHeight }]}>
                            <TouchableOpacity onPress={() => handleExercisePressFontArm('exercise4')} style={styles.imageButton}>
                                <Image source={require('../assets/images/cotaytruoc.jpg')} style={styles.exerciseImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.exerciseButton, { height: evenButtonHeight }]}>
                            <TouchableOpacity onPress={() => handleExercisePressBackArm('exercise5')} style={styles.imageButton}>
                                <Image source={require('../assets/images/cotaysau.jpg')} style={styles.exerciseImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.exerciseButton, { height: oddButtonHeight }]}>
                            <TouchableOpacity onPress={() => handleExercisePressBung('exercise2')} style={styles.imageButton}>
                                <Image source={require('../assets/images/bung.jpg')} style={styles.exerciseImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.exerciseButton, { height: evenButtonHeight }]}>
                            <TouchableOpacity onPress={() => handleExercisePressLeg('exercise1')} style={styles.imageButton}>
                                <Image source={require('../assets/images/chan.jpg')} style={styles.exerciseImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.exerciseButton, { height: oddButtonHeight }]}>
                            <TouchableOpacity onPress={() => handleExercisePressHeart('exercise6')} style={styles.imageButton}>
                                <Image source={require('../assets/images/tim.jpg')} style={styles.exerciseImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.exerciseButton, { height: oddButtonHeight }]}>
                            <TouchableOpacity onPress={() => handleExercisePressCaNhan('exercise2')} style={styles.imageButton}>
                                <Image source={require('../assets/images/canhan.jpg')} style={styles.exerciseImage} />
                            </TouchableOpacity>
                        </View>
                        {/* Thêm các nút bài tập khác tương tự */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 16,
    },
    searchContainer: {
        marginBottom: 16,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 8,
        fontSize: 16,
    },
    exerciseContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    exerciseButton: {
        width: '47%', // Kích thước nút bài tập
        marginBottom: 16,
    },
    imageButton: {
        flex: 1,
    },
    exerciseImage: {
        flex: 1,
        width: '100%',
        borderRadius: 8,
    },
    exerciseText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});
