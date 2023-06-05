import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
const screen7 = ()=>{
    return(
        <View style={styles.container}>
            <View>
              <Text style={styles.text}>Daily Workout Schedule</Text>
            </View>
            <View >
                <Text style={styles.text2}>Upcoming Workout</Text>
            </View>
            <View style={styles.container2}>
                <ImageBackground
                resizeMode={'stretch'}
                style={{flex:1}}
                source={require('src\images\Rectangle10.png')}
                ></ImageBackground>
            </View>
        </View>
      
    

     
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
     
     
    },
    container2:{
        
        justifyContent: 'center',
        backgroundColor: '#fff',
        flex: 1,
        width: '89%',
        height: 171,

    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 700,
        color: '#FFFFFF',
        marginTop: 62,
    },
    text2:{
        marginLeft: 22,
        marginTop: 20,
        fontSize: 18,
        fontWeight: 600,
        color: '#FFFFFF',
    }
  });
export default screen7;