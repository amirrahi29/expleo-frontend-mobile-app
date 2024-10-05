import React, { useState } from 'react';
import { Text, ScrollView, Alert } from 'react-native';
import MainBackground from '../../Common/MainBackground';
import { ImageConstants } from '../../../Constants/ImageConstants';
import CustomInput from '../../../Components/CustomTextInput';
import CustomCheckBox from '../../../Components/CustomCheckBox';
import CustomButton from '../../../Components/CustomButton';
import CustomImage from '../../../Components/CustomImage';
import { SignUpCss } from './css/SignUpCss';
import { SignUpvalidateForm } from './configure/SignUpvalidateForm';
import { TitleConstants } from '../../../Constants/TitleConstants'; 
import AxiosInstance from '../../../Config/AxiosInstance';
import AppLoader from '../../../Components/AppLoader'; // Import AppLoader

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    agreed: false,
    isPasswordVisible: false,
  });

  const [loading, setLoading] = useState(false); 

  const handleChange = (field: string, value: string | boolean) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const generateUsername = (fullName: string) => {
    return fullName.replace(/\s+/g, '').toLowerCase();
  };

  const handleSignUp = async () => {
    const { fullName, email, password, agreed } = formValues; 
    const validationErrors = SignUpvalidateForm({ fullName, email, password });

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorKey = Object.keys(validationErrors)[0] as keyof typeof validationErrors;
      Alert.alert('Validation Error', validationErrors[firstErrorKey]!);
      return;
    }

    if (!agreed) {
      Alert.alert('Error', TitleConstants.termsAndPrivacyError); 
      return;
    }

    const username = generateUsername(fullName);

    try {
      setLoading(true);
      const response = await AxiosInstance.post('/users', {
        name: fullName,
        email: email,
        password: password,
        username: username,
      });

      console.log('Sign Up Successful:', response.data);
      Alert.alert('Success', 'Sign up successful!');
    } catch (error:any) {
      console.error('Sign Up Error:', error.response?.data || error.message);
      Alert.alert('Error', 'Sign up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainBackground>
      <ScrollView contentContainerStyle={SignUpCss.container}>
        <CustomImage source={ImageConstants.logoImage} style={SignUpCss.logo} />
        <Text style={SignUpCss.title}>{TitleConstants.createAccountTitle}</Text> 
        <CustomInput
          label={TitleConstants.fullNameLabel}
          value={formValues.fullName}
          onChangeText={(value) => handleChange('fullName', value)}
          placeholder={TitleConstants.fullNamePlaceholder}
          prefixImage={ImageConstants.nameImage}
        />
        <CustomInput
          label={TitleConstants.emailLabel}
          value={formValues.email}
          onChangeText={(value) => handleChange('email', value)}
          placeholder={TitleConstants.emailPlaceholder}
          prefixImage={ImageConstants.emailImage}
        />
        <CustomInput
          label={TitleConstants.passwordLabel}
          value={formValues.password}
          onChangeText={(value) => handleChange('password', value)}
          placeholder={TitleConstants.passwordPlaceholder}
          secureTextEntry={!formValues.isPasswordVisible}
          prefixImage={ImageConstants.passwordImage}
          suffixImage={formValues.isPasswordVisible ? ImageConstants.showImage : ImageConstants.hideImage} 
          onSuffixPress={() => handleChange('isPasswordVisible', !formValues.isPasswordVisible)}
        />
        <CustomCheckBox
          checked={formValues.agreed}
          onChange={() => handleChange('agreed', !formValues.agreed)}
          label={TitleConstants.agreeTermsLabel} 
        />
        <CustomButton title={TitleConstants.signUpButtonTitle} onPress={handleSignUp} />
      </ScrollView>
      <AppLoader loading={loading} />
    </MainBackground>
  );
};

export default SignUp;
