import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './Presentation/navigator/Navigator';



export const ComponentsApp = () => {
    return(
        <NavigationContainer>
        <Navigator />
        </NavigationContainer>
        
    );
}