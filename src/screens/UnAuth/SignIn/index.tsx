import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { navigate } from '../../../navigation/navigationService';
import { routes } from '../../../navigation/Routes';
import MainBackground from '../../Common/MainBackground';

const SignIn: React.FC = () => {
  return (
    <MainBackground>
      <Text style={{ color: 'black', fontSize: 24 }}>SignIn Page</Text>

      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 8,
          marginVertical:16
        }}
        onPress={() => {
          navigate(routes.HomeScreen);
        }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Go to Home Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 8
        }}
        onPress={() => {
          navigate(routes.SignUpScreen);
        }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Go to Sign Up Page</Text>
      </TouchableOpacity>
    </MainBackground>
  );
};

export default SignIn;
