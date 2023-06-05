import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import screen7 from './src/views/screens/screen7';
export default function App() {
  return (
    <View>
      <screen7></screen7>
    </View>
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
