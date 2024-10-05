import React from 'react';
import { View } from 'react-native';
import { ImageConstants } from '../../../Constants/ImageConstants';
import { SplashCss } from './css/SplashCss';
import { routes } from '../../../navigation/Routes';
import { launchScreen } from './configure/launchScreen';
import CustomImage from '../../../Components/CustomImage';

const Splash: React.FC = () => {

  launchScreen(routes.SignInScreen, 2000);

  return (
    <View style={SplashCss.container}>
      <CustomImage
        source={ImageConstants.logoImage}
        width={200}
        height={80}
        style={SplashCss.logo}
      />
    </View>
  );
};

export default Splash;
