import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { CustomButtonCss } from './CustomButtonCss';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={CustomButtonCss.CustomButton} onPress={onPress}>
            <Text style={CustomButtonCss.CustomButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
