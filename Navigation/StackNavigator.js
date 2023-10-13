import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Screens/Home"
import HelpScreen from "../Screens/HelpScreen"
import TabNavigator from "./TabNavigator"

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="HelpScreen" component={HelpScreen}/>
    </Stack.Navigator>

  );
}