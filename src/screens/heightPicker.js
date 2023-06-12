import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HeightPicker = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("150");

    const onPressButton = () => {
        // Alert.alert('Selected Height', `${selectedValue} cm`)
        navigation.navigate('Goal');
    };

    return (
        <View style={styles.pickerContainer}>
            <SafeAreaView>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    {Array.from({ length: 200 }, (_, index) => index + 1).map((value) => (
                        <Picker.Item key={value} label={`${value} cm`} value={value.toString()} />
                    ))}
                </Picker>
                <TouchableOpacity style={styles.button} onPress={onPressButton}>
                    <Text>hehe</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View >
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        width: '100%',
        marginBottom: 20,
    },
    picker: {
        height: 40,
        width: '100%',
    },
    button: {
        marginTop: 300,
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        width: '50%',
        alignItems: 'center',
        marginStart: '25%',
    },
});

export default HeightPicker;