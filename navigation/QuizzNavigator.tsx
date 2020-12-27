import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ParamsScreen from '../screens/ParamsScreen';
import NewQuizzScreen from '../screens/NewQuizzScreen';
import SelectThemeScreen from '../screens/SelectThemeScreen';
import NewThemeScreen from '../screens/NewThemeScreen';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Quizz = () => {
    return (
        <Stack.Navigator
            initialRouteName="Paramètres"
            headerMode="screen"
        >
            <Stack.Screen 
                name="Paramètres" 
                component={ParamsScreen} 
                options={({ }) => ({ 
                    title: 'Paramètres du quizz',
                })}
            />
            <Stack.Screen 
                name="NewQuizz" 
                component={NewQuizzScreen} 
            />
        </Stack.Navigator>
    )
}

const Edit = () => {
    return (
        <Stack.Navigator
            initialRouteName="SelectTheme"
            headerMode="screen"
        >
            <Stack.Screen 
                name="SelectTheme" 
                component={SelectThemeScreen} 
                options={({ }) => ({ 
                    title: 'Choix du thème',
                })}
            />
            <Stack.Screen 
                name="NewTheme" 
                component={NewThemeScreen} 
            />
        </Stack.Navigator>
    )
}

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: {
                        fontFamily: 'poppins'
                    }
                }}>
                <Tab.Screen 
                    name="PlayQuizz" 
                    component={Quizz} 
                />
                <Tab.Screen 
                    name="EditQuizz" 
                    component={Edit} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;