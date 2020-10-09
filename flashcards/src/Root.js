import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/Routes';

export default function RootConatiner(){
    return (
        <NavigationContainer>
           <Routes />
        </NavigationContainer>
    )
}
