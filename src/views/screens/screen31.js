import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Icon } from "react-native-vector-icons/icon";
const screen31 = ()=>{
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
             
              <Text style={styles.text}>Like</Text>
            </View>
           
            <View style={styles.container2}>
                
                <ImageBackground
                resizeMode={'cover'}
                style={{flex:1, height:171}}
                source={require('../components/images/man.png')}
                ></ImageBackground>
                
                <Text style={styles.text3}>Weightlifting Basic</Text>
                <Text style={styles.text4}><Text style={{color: '#E32020'}}>| </Text>6 Workouts for Beginner</Text>
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
        marginTop:20,
        alignSelf: 'center',
       
        width: '89%',
        height: '20.5%',
      

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
    },
    text3:{
        color: '#FFFFFF',
        marginLeft: 20,
        fontWeight: 600,
        fontSize: 14,
    },
    text4:{
        marginBottom:16,
        color: '#FFFFFF',
        marginLeft: 20,
        fontWeight: 600,
        fontSize: 14,
    },
    icon:{

    }
  });
export default screen31;