import { View, Text, StyleSheet  } from 'react-native'
import React, { useState } from 'react'
import { Button, List, TextInput } from 'react-native-paper'

export default function LoginScreen() {
    const [title, message] = useState('')
    const [titles, messagess] = useState([])
    const submit = () => {
        messagess(prev => [...prev, title])
    }
  return (
    <View style = {styles.container}>
      <Text>LoginScreen</Text>
      <TextInput value={title} onChange={e => message(e.target.value)} style = {{width: 200, height: 40}}/>
      <Button onClick={submit} style = {{borderRadius: 1, width: 100, height: 50, backgroundColor: 'white'}}>Theem</Button>
      <View {titles.map((title, index)=>(
        <Text key={index}>{title}</Text>
      ))}></View>
    </View>
  )
  
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A5653',
        alignItems: 'center',
        top: 60,
        flex: 1,
    }
});
