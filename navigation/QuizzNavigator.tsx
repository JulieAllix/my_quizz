import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import ParamsScreen from '../screens/ParamsScreen';
import SelectThemeScreen from '../screens/SelectThemeScreen';
import CreateThemeScreen from '../screens/CreateThemeScreen';
import CreateQuestionScreen from '../screens/CreateQuestionScreen';
import EditThemeScreen from '../screens/EditThemeScreen';
import EditQuestionScreen from '../screens/EditQuestionScreen';
import QuizzScreen from '../screens/QuizzScreen';

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

const Quizz = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="Paramètres"
            headerMode="screen"
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen 
                name="Paramètres" 
                component={ParamsScreen} 
                options={(navData) => ({ 
                    title: 'Parameters of the quizz',
                })}
            />
            <Stack.Screen 
                name="Quizz screen" 
                component={QuizzScreen} 
                options={(navData) => ({ 
                    title: 'Quizz screen',
                })}
            />
        </Stack.Navigator>
    )
}

const Edit = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="Themes"
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
            <Stack.Screen 
                name="Edit question" 
                component={EditQuestionScreen}
                options={(navData) => ({ 
                    title: 'Edit question',
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