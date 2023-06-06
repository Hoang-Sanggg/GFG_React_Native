import React from "react";
import { View, Text, StyleSheet, ImageBackground,Image, TextInput } from 'react-native'

const screen30 = ()=>{
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
             
              <Text style={styles.text}>Personal Data</Text>
            </View>
           
            <View style={styles.container2}>
                <Image style={styles.personalImg}
                source={require('../components/images/pimg.png')}
                resizeMode="stretch"
                >
                    
                </Image>
            </View>

            <View>
                <Text style={styles.text2}>Username</Text>
            </View>

            <View style={{flex: 0, marginLeft: 20, marginTop:5,marginRight:20,  backgroundColor: '#434B53', width: '89%', height: '6%',paddingLeft:10, borderRadius:10}}>
                <TextInput 
                style={styles.textInput}
                >Jedro Suidrop

                </TextInput>
            </View>
            <View>
                <Text style={styles.text3}>Email</Text>
            </View>
            <View style={{flex: 0, marginLeft: 20, marginTop:5,marginRight:20,  backgroundColor: '#434B53', width: '89%', height: '6%',paddingLeft:10, borderRadius: 10}}>
                <TextInput 
                style={styles.textInput}
                >JefroSuiropKu@gmail.com

                </TextInput>
            </View>
            <View>
                <Text style={styles.text3}>Personal Data</Text>
            </View>

            <View style={styles.container3}>
                <View style={styles.personaldataView}>
                    <Text style={styles.personaldataText1}>180cm</Text>
                    <Text style={styles.personaldataText2}>Height</Text>
                </View>

                <View style={styles.personaldataView}>
                     <Text style={styles.personaldataText1}>80kg</Text>
                    <Text style={styles.personaldataText2}>Weight</Text>
                </View>
                    
                <View style={styles.personaldataView}>
                      <Text style={styles.personaldataText1}>22yo</Text>
                    <Text style={styles.personaldataText2}>Age</Text>
                </View>
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
        width:146,
        height: 146,
    },
    container3:{
        flexDirection: "row",
        flex:2,
        justifyContent: 'space-between',
        marginLeft: 22,
        marginRight:22,
    },
    text: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 700,
        color: '#FFFFFF',
        marginTop: 62,
    },
    text2:{
        marginLeft: 20,
        marginTop: 52,
        fontSize: 22,
        fontWeight: 600,
        color: '#FFFFFF',
    },
    textInput:{
        color: '#FFFFFF',
        fontSize:20,
        paddingTop:15 ,
        paddingBottom:14,

    },
    text3:{
        marginLeft: 20,
        marginTop: 18,
        fontSize: 22,
        fontWeight: 600,
        color: '#FFFFFF',
    },
    personalImg:{
        width: '100%',
        height: '100%',
        flex: 1,
    },
    personaldataView:{
        borderRadius: 10,
        width: 94,
        height: 94,
        flex: 0,
        backgroundColor: '#434B53',
        justifyContent: 'center',
    },
    personaldataText1:{
        color: '#E0FE10',
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 600,
    },
    personaldataText2:{
        color:'#FFFFFF',
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 600,
    },
  });
export default screen30;