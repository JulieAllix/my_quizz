import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import ParamsScreen from '../screens/ParamsScreen';
import NewQuizzScreen from '../screens/NewQuizzScreen';
import SelectThemeScreen from '../screens/SelectThemeScreen';
import CreateThemeScreen from '../screens/CreateThemeScreen';
import CreateQuestionScreen from '../screens/CreateQuestionScreen';
import EditThemeScreen from '../screens/EditThemeScreen';

import Colors from '../constants/Colors';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultStackNavOptions = {
    headerTitleStyle: {
        fontFamily: 'openSans-b',
        fontSize: 18,
    },
    cardStyle: { backgroundColor: '#fff'}
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

const Edit = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="Edit theme"
            headerMode="screen"
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen 
                name="Themes" 
                component={SelectThemeScreen} 
                options={(navData) => ({ 
                    title: 'Themes',
                })}
            />
            <Stack.Screen 
                name="New theme" 
                component={CreateThemeScreen}
                options={(navData) => ({ 
                    title: 'New theme',
                })} 
            />
            <Stack.Screen 
                name="New question" 
                component={CreateQuestionScreen}
                options={(navData) => ({ 
                    title: 'New question',
                })} 
            />
            <Stack.Screen 
                name="Edit theme" 
                component={EditThemeScreen}
                options={(navData) => ({ 
                    title: 'Edit theme',
                })} 
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