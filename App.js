import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen7 from './src/views/screens/screen7';
import Screen31 from './src/views/screens/screen31';
export default function App() {
  return (
    <Screen31/>
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
