import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Auth/Home';
import { routes } from './routes';

const Stack = createNativeStackNavigator();

export const AuthNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName={routes.HomeScreen}>
            <Stack.Screen name={routes.HomeScreen} component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};