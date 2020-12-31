import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import ParamsScreen from '../screens/ParamsScreen';
import NewQuizzScreen from '../screens/NewQuizzScreen';
import SelectThemeScreen from '../screens/SelectThemeScreen';
import NewThemeScreen from '../screens/NewThemeScreen';

import Colors from '../constants/Colors';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultStackNavOptions = {
    headerTitleStyle: {
        fontFamily: 'openSans-b',
        fontSize: 18,
    },
};

const Quizz = () => {
    return (
        <Stack.Navigator
            initialRouteName="Paramètres"
            headerMode="screen"
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen 
                name="Paramètres" 
                component={ParamsScreen} 
                options={({ }) => ({ 
                    title: 'Parameters of the quizz',
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
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen 
                name="SelectTheme" 
                component={SelectThemeScreen} 
                options={({ }) => ({ 
                    title: 'Themes',
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
                    activeTintColor: Colors.primaryColor,
                    labelStyle: {
                        fontFamily: 'openSans-b'
                    }
                }}>
                <Tab.Screen 
                    name="Quizz" 
                    component={Quizz} 
                    options={{
                        tabBarIcon: (tabInfo) => {
                            return <Ionicons 
                                name='md-play' 
                                size={25} 
                                color={tabInfo.color}
                            />;
                        }
                    }}
                />
                <Tab.Screen 
                    name="Edit" 
                    component={Edit} 
                    options={{
                        tabBarIcon: (tabInfo) => {
                            return <Ionicons 
                                name='md-brush' 
                                size={25} 
                                color={tabInfo.color}
                            />;
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;