import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './navigationService';
import { routes } from './Routes';
import Splash from '../screens/UnAuth/Splash';
import Home from '../screens/Auth/Home';
import SignIn from '../screens/UnAuth/SignIn';
import SignUp from '../screens/UnAuth/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const MainNavigation: React.FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={routes.SplashScreen}>
                <Stack.Screen name={routes.SplashScreen} component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name={routes.SignInScreen} component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name={routes.SignUpScreen} component={SignUp} options={{ headerShown: false }} />

                <Stack.Screen name={routes.HomeScreen} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
