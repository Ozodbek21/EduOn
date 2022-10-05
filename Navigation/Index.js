import React from "react";
import Screen from "../pages/Home/Screen";
import Auth2 from '../pages/Authetication/AuthStep2'

export const HomeScreen = ({navigation}) => <Screen navigation={navigation} name='Home' />
export const AuthScreen = ({navigation}) => <Screen navigation={navigation} name='Auth' /> 
export const AuthScreen2 = ({navigation}) => <Screen navigation={navigation} name='Auth2' /> 