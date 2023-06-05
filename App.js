import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen7 from './src/views/screens/screen7';
export default function App() {
  return (
    <Screen7/>
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
