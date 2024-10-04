import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/UnAuth/SignIn';
import SignUp from '../screens/UnAuth/SignUp'
import { routes } from './routes';

const Stack = createNativeStackNavigator();

export const UnAuthNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName={routes.SignInScreen}>
            <Stack.Screen name={routes.SignInScreen} component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name={routes.SignUpScreen} component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};