import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import Auth from '../pages/Authetication/Auth'
import Auth2 from '../pages/Authetication/AuthStep2'
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Screen'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Navbar from '../components/Navbar/Navbar';

const Tab = createBottomTabNavigator()

function MyTabs(){
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarActiveTintColor: '#000 '}}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarLabel: 'Bosh Sahifa',
                tabBarIcon: ({color, size})=>(
                    <MaterialCommunityIcons name='home' color={color} size={size}/>
                    ),
                    tabBarBadge: 7,
                    headerShown: false
                }}/>
            <Tab.Screen name='Auth' component={Auth} options={{
                tabBarLabel: 'Ro`yhatdan o`tish',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="account-circle" color={color} size={size} />
                    ),
                    headerShown: false
                    
                }}/>
            <Tab.Screen name="Auth2" component={Auth2} />
            <Tab.Screen name="SignIn" component={SignIn} />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return (
         <>
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
         </>
    )
}