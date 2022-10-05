import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Feather } from '@expo/vector-icons';

import {
    HomeScreen,
    AuthScreen
} from '../pages/Home/Screen'

const DrawerNavigator = createDrawerNavigator({
    HomeScreen,
    AuthScreen
})


export default createAppContainer(DrawerNavigator)
