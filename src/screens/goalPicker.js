import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const GoalPicker = ({ navigation }) => {
    const [selectedGoal, setSelectedGoal] = useState('');

    const goalOptions = [
        { label: 'Tăng cân', value: 'option1' },
        { label: 'Tăng cơ', value: 'option2' },
        { label: 'Giảm mỡ', value: 'option3' },
    ];

    const onGoalChange = (itemValue, itemIndex) => {
        setSelectedGoal(itemValue);
    };

    const onPressButton = () => {
        navigation.navigate('Information');
    };

    return (
        <View style={styles.pickerContainer}>
            <SafeAreaView>
                <Text style={styles.label}>Goal:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedGoal}
                    onValueChange={onGoalChange}>
                    {goalOptions.map((option) => (
                        <Picker.Item key={option.value} label={option.label} value={option.value} />
                    ))}
                </Picker>
                <TouchableOpacity style={styles.button} onPress={onPressButton}>
                    <Text>Continue</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
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

export default GoalPicker;