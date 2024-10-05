import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { MainBackgroundCss } from './MainBackgroundCss';

const MainBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SafeAreaView style={MainBackgroundCss.container}>
            <View style={MainBackgroundCss.background}>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default MainBackground;
