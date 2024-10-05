import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Auth/Home';
import { routes } from './Routes';
import Splash from '../screens/UnAuth/Splash';

const Stack = createNativeStackNavigator();

export const AuthNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName={routes.SplashScreen}>
            <Stack.Screen name={routes.SplashScreen} component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name={routes.HomeScreen} component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};