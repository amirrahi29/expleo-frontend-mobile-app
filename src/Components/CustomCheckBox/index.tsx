import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ColorConstants } from '../../Constants/ColorConstants';
import { CustomCheckBoxCss } from './CustomCheckBoxCss';

interface CustomCheckBoxProps {
    checked: boolean;
    onChange: () => void;
    label: string;
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ checked, onChange, label }) => {
    return (
        <TouchableOpacity style={CustomCheckBoxCss.container} onPress={onChange}>
            <View style={[CustomCheckBoxCss.CustomCheckBox, checked && CustomCheckBoxCss.checked]} />
            <Text style={CustomCheckBoxCss.label}>{label}</Text>
        </TouchableOpacity>
    );
};

export default CustomCheckBox;
