import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import useState from 'react'
import { Video } from 'expo-av';
import { Button } from 'react-native-paper';


const screen10 = () => {
    const video = React.useRef(null);
    const secondVideo = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
   
    
  return (
    <View style = {styles.container}>
        <Video
            ref={video}
            style = {styles.video}
            source={{uri:'https://www.f5.com/content/dam/f5-labs-v2/media-files/video/Happy%20Cow.mp4'}}
            useNativeControls
            resizeMode='contain'
            isLooping
            onPlaybackStatusUpdate={setStatus}
        >
         
        </Video>
        <View style = {{with: '100%', height: '100%', backgroundColor: '#1A5653', borderRadius: 40, alignItems: 'center' }}>
            <Text style = {{fontSize: 20, top: 30, color: 'white'}}>Secored Time</Text>
        </View>
        
       
        
    </View>
    
  )
}
const styles = StyleSheet.create({
   
    
    video:{
        // backgroundColor: 'black',
        width: '100%',
        height: 600,
        
    },
    container: {
        width: '100%',
        height: '100%',
       backgroundColor: 'black',
        
    }

   
   
})

export default screen10