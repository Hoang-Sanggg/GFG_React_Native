import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen7 from './src/views/screens/screen7';
import Screen31 from './src/views/screens/screen31';
import Screen37 from './src/views/screens/screen37';
import Screen30 from './src/views/screens/screen30';
import Screen9 from './src/views/screens/screen9';
import Profile from './src/views/screens/profile';
export default function App() {
  return (
    <Profile/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
