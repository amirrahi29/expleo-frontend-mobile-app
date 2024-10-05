import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/UnAuth/SignIn';
import SignUp from '../screens/UnAuth/SignUp'
import { routes } from './Routes';
import Splash from '../screens/UnAuth/Splash';

const Stack = createNativeStackNavigator();

export const UnAuthNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName={routes.SplashScreen}>
            <Stack.Screen name={routes.SplashScreen} component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name={routes.SignInScreen} component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name={routes.SignUpScreen} component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};