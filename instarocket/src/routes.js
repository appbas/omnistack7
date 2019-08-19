import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import New from './pages/New';
import Feed from './pages/Feed';

import logo from './assets/logo.png';

export default createAppContainer (
    // navegação em pilha
    createStackNavigator({
        Feed,
        New
    },{
        initialRouteName: 'Feed',
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} /> ,
            headerBackTitle: null
        },
        mode: 'modal'
    })
);