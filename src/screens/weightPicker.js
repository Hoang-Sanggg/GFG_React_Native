import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, StyleSheet, BackHandler } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WeightPicker = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("500");

    const handleValueChange = (itemValue) => {
        setSelectedValue(itemValue);
    };

    const formatValue = (value) => {
        const weightInKg = Number(value) / 10; // Convert value to kg (assuming it's in 100g)
        return `${weightInKg} kg`;
    };

    const onPressButton = () => {
        navigation.navigate('Height');
    };

    return (
        <View style={styles.pickerContainer}>
            <SafeAreaView>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={handleValueChange}>
                    {Array.from({ length: 1500 }, (_, index) => String(index)).map((value) => (
                        <Picker.Item key={value} label={formatValue(value)} value={value} />
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

export default WeightPicker;
