import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/login';
import MainScreen from './src/screens/main';
import Details from './src/screens/details';
import Register from './src/screens/register';
import SplashScreen from './src/screens/splashScreen';
import WeightPicker from './src/screens/weightPicker';
import HeightPicker from './src/screens/heightPicker';
import GoalPicker from './src/screens/goalPicker';
import Infor from './src/screens/Information';
import WorkoutPlan from './src/screens/workoutplan';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating a delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Goal" component={GoalPicker} />
        <Stack.Screen name="Weight" component={WeightPicker} options={{ headerLeft: false }} />
        <Stack.Screen name="Height" component={HeightPicker} />
        <Stack.Screen name="Information" component={Infor} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        {/* Thêm các màn hình khác ở đây */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
