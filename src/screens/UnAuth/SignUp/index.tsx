import React, { useState, useEffect } from 'react';
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
import AppLoader from '../../../Components/AppLoader';
import { useAppDispatch, useAppSelector } from '../../../navigation/ReduxHooks';
import { RootState } from '../../../Store';
import { SignUpUserService } from './redux/Services/SignUpUserService';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector((state: RootState) => state.signUp);

  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    agreed: false,
    isPasswordVisible: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
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

    dispatch(SignUpUserService({ fullName, email, password, agreed }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      Alert.alert('Success', 'User created successfully!');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
  }, [error]);

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
