import React from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TextInputProps,
  ImageSourcePropType,
} from 'react-native';
import { ColorConstants } from '../../Constants/ColorConstants';
import { CustomTextInputCss } from './css';

interface CustomInputProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  prefixImage?: ImageSourcePropType;
  suffixImage?: ImageSourcePropType;
  onSuffixPress?: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  prefixImage,
  suffixImage,
  onSuffixPress,
  ...rest
}) => {
  return (
    <View style={CustomTextInputCss.container}>
      <View style={CustomTextInputCss.inputContainer}>
        {prefixImage && <Image source={prefixImage} style={CustomTextInputCss.icon} />}
        <TextInput
          placeholderTextColor={ColorConstants.placeholderColor}
          style={CustomTextInputCss.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
        {suffixImage && (
          <TouchableOpacity onPress={onSuffixPress} disabled={!onSuffixPress}>
            <Image source={suffixImage} style={CustomTextInputCss.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
