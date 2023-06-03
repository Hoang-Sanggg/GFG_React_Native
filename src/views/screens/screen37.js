import { Button, Text, View, Image, Pressable, title } from 'react-native'
import React, { Component, useState } from 'react'
import { StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'





export class screen37 extends Component {
  render() {
    
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}>Tell Us About Yourself </Text>
        <Text style = {styles.text1}>To give you a better experience and results we need to know your gender</Text>
        <View style = {styles.boder}>
            <Image style = {styles.image} source={require('../components/picture/man.png')}/>
            <Text style = {styles.textGT}>Man</Text>
        </View>
        <View style = {styles.boder}>
            <Image style = {styles.image} source={require('../components/picture/woman.png')}/>
            <Text style = {styles.textGT}>Woman</Text>
        </View>
        

        <Pressable style={styles.button}>
           <Text style={styles.textbtn}>Contineu</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A5653',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        position: 'absolute',
        width: 343,
        height: 37,
        left: 55,
        top: 90,

       fontStyle: 'normal',
       fontWeight: 500,
       fontSize: 32,
       display: 'flex',
       color: 'white',

    },
    text1: {
      position: 'absolute',
      width: 366,
      height: 45,
      left: 27,
      top: 139,

     fontStyle: 'normal',
     fontWeight: 400,
     fontSize: 18,
     textAlign: 'center',
     alignItems: 'center',
     letterSpacing: -0.02,
     display: 'flex',
     color: 'white',

  },
  boder:{
    top: 240, 
    width: 150,
    height: 150,
    marginBottom: 50,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    
  },
  image:{
    width: 100,
    height: 100,
  },
  textGT:{
    padding: 10,
    fontStyle: 'normal',
     fontWeight: 400,
     fontSize: 18,
     textAlign: 'center',
     alignItems: 'center',
     letterSpacing: -0.02,
     display: 'flex',
     color: 'white',
  },
  button: {
    top: 300,
    width: 343,
    height: 70,
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: '#E0FE10',
  },
  textbtn: {
    fontSize: 24,
    padding: 17,
    fontWeight: 500,
    color: 'black',
  },
  
  
});
export default screen37