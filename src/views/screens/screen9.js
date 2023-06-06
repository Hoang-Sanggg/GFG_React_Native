import React from "react";
import { View, Text, StyleSheet, ImageBackground,Image, TextInput } from 'react-native'

const screen9 = ()=>{
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.container2}>
                    <Image style={styles.personalImg}
                    source={require('../components/images/pimg.png')}
                    resizeMode="stretch"
                    >
                    </Image>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Jefro Suirop</Text>
                    </View>
                    <View>
                        <Text style={styles.text4}>JefroSuirop@gmail.com</Text>
                    </View>
                </View>
               
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
        marginTop:74,
        marginLeft:22,
        width:94,
        height: 94,
    },
    container3:{
        flexDirection: "row",
        flex:2,
        justifyContent: 'space-between',
        marginLeft: 22,
        marginRight:22,
        marginTop:24,
    },
    text: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 700,
        color: '#FFFFFF',
        marginTop: 62,
    },
    text2:{
        marginLeft: 14,
        marginTop: 90,
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
    text4:{
        fontWeight: 500,
        fontSize:16,
        color: '#FFFFFF',
        marginTop: 8,
        marginLeft:14,
    },
    personalImg:{
        width: '100%',
        height: '100%',
        flex: 1,
    },
    personaldataView:{
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
export default screen9;