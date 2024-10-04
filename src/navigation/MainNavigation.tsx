import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './AuthNavigator';
import { UnAuthNavigator } from './UnAuthNavigator';

export const MainNavigation: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
    return (
        <NavigationContainer>
            {isAuthenticated ? <AuthNavigator /> : <UnAuthNavigator />}
        </NavigationContainer>
    );
};

