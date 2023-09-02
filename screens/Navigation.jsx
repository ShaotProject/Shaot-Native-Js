import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { SettingScreen } from "./SettingScreen";
import { AllWorkers } from './AllWorkers';
import { ShiftWeekScreen } from "./ShiftWeekScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Home' component={ShiftWeekScreen} options={{title: 'Shift a Week'}}/>
        <Stack.Screen name='Setting' component={SettingScreen} options={{title: 'Setting Shift'}}/>
        <Stack.Screen name='Workers' component={AllWorkers} options={{title: 'All Workers'}}/>
    </Stack.Navigator>
</NavigationContainer>
  )
}