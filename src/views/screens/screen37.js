import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground,FlatList } from 'react-native'
import { SearchBar } from '@rneui/themed';
const screen37 = ()=>{
    
const [search, setSearch] = useState("");

const updateSearch = (search) => {
  setSearch(search);
};
    return(
        <View style={styles.container}>
            <View style={styles.view}>
            <SearchBar
                 placeholder="Weightlifting Basic"
                 onChangeText={updateSearch}
                 value={search}
              />
            
            </View>
                <Text style={styles.text5}>Search Results</Text>
            <View>

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
    text5:{
      
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 14,
    },
    icon:{

    },
    view: {
        marginTop: 71,
        marginLeft: 61,
        marginRight:22,
        marginBottom: 20
      },
  });
export default screen37;