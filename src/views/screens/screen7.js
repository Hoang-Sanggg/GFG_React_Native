import React from "react";
import { View, Text, StyleSheet } from 'react-native'
const screen7 = ()=>{
    return(
        <View style={styles.container}>
            <View>
              <Text style={styles.text}>Daily Workout Schedule</Text>
            </View>
        </View>
      
    

     
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center',
     
    },
    text: {
        fontSize: 24,
        fontWeight: 700,
        color: '#FFFFFF',
      
    },
  });
export default screen7;