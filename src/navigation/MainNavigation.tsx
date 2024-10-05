import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './AuthNavigator';
import { UnAuthNavigator } from './UnAuthNavigator';
import { navigationRef } from './navigationService';

export const MainNavigation: React.FC<{ isAuthenticated: boolean, setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isAuthenticated, setIsAuthenticated }) => {
    return (
        <NavigationContainer ref={navigationRef}>
            {isAuthenticated ? <AuthNavigator /> : <UnAuthNavigator setIsAuthenticated={setIsAuthenticated} />}
        </NavigationContainer>
    );
};
