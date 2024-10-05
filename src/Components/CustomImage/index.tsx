import React from 'react';
import { Image, View, ViewStyle, ImageStyle } from 'react-native';
import { CustomImageCss } from './css';

interface CustomImageProps {
  source: any; 
  width?: number;
  height?: number; 
  style?: ImageStyle | ViewStyle;
}

const CustomImage: React.FC<CustomImageProps> = ({ source, width = 300, height = 300, style }) => {
  return (
    <View style={[CustomImageCss.container, style]}>
      <Image
        source={source}
        style={[CustomImageCss.image, { width: width, height: height }]}
        resizeMode="contain"
      />
    </View>
  );
};

export default CustomImage;
