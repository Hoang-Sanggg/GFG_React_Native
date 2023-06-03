import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen37 from './src/views/screens/screen37';
import Screen34 from './src/views/screens/screen34';
import Screen35 from './src/views/screens/screen35';
import StatusUser from './src/views/screens/StatusUser';
import Screen10 from './src/views/screens/screen10';
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    
    <Screen10></Screen10>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
