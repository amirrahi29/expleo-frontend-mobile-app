import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignUp from '..';
import { SignUpUserService } from '../redux/Services/SignUpUserService';
import { TitleConstants } from '../../../../Constants/TitleConstants';
import { navigate } from '../../../../navigation/navigationService';

jest.mock('../../../../navigation/navigationService', () => ({
  navigate: jest.fn(),
}));

jest.mock('../redux/Services/SignUpUserService', () => ({
  SignUpUserService: jest.fn().mockResolvedValue({
    payload: { success: true }, 
  }),
}));

const MockedSignUp = () => <SignUp />;

describe('SignUp Component', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('should navigate to HomeScreen on successful sign-up', async () => {
    const { getByText, getByPlaceholderText } = render(<MockedSignUp />);

    fireEvent.changeText(getByPlaceholderText(TitleConstants.fullNamePlaceholder), 'John Doe');
    fireEvent.changeText(getByPlaceholderText(TitleConstants.emailPlaceholder), 'john@example.com');
    fireEvent.changeText(getByPlaceholderText(TitleConstants.passwordPlaceholder), 'password123');
    fireEvent.press(getByText(TitleConstants.signUpButtonTitle));

    await waitFor(() => {
      expect(SignUpUserService).toHaveBeenCalledWith({
        fullName: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        agreed: false,
      });
      expect(navigate).toHaveBeenCalledWith('HomeScreen');
    });
  });

  it('should display validation error if form is not filled correctly', async () => {
    const { getByText } = render(<MockedSignUp />);

    fireEvent.press(getByText(TitleConstants.signUpButtonTitle));
    await waitFor(() => {
      expect(getByText('Validation Error')).toBeTruthy();
    });
  });

  it('should show error if sign-up fails', async () => {
    SignUpUserService: jest.fn().mockImplementationOnce(async () => {
      return { payload: { success: false } };
    });

    const { getByText, getByPlaceholderText } = render(<MockedSignUp />);

    fireEvent.changeText(getByPlaceholderText(TitleConstants.fullNamePlaceholder), 'John Doe');
    fireEvent.changeText(getByPlaceholderText(TitleConstants.emailPlaceholder), 'john@example.com');
    fireEvent.changeText(getByPlaceholderText(TitleConstants.passwordPlaceholder), 'password123');
    fireEvent.press(getByText(TitleConstants.signUpButtonTitle));

    await waitFor(() => {
      expect(SignUpUserService).toHaveBeenCalled();
      expect(getByText('Error')).toBeTruthy();
    });
  });

  it('should show terms and privacy error if not agreed', async () => {
    const { getByText, getByPlaceholderText } = render(<MockedSignUp />);

    fireEvent.changeText(getByPlaceholderText(TitleConstants.fullNamePlaceholder), 'John Doe');
    fireEvent.changeText(getByPlaceholderText(TitleConstants.emailPlaceholder), 'john@example.com');
    fireEvent.changeText(getByPlaceholderText(TitleConstants.passwordPlaceholder), 'password123');
    
    fireEvent.press(getByText(TitleConstants.signUpButtonTitle));

    await waitFor(() => {
      expect(getByText(TitleConstants.termsAndPrivacyError)).toBeTruthy(); 
    });
  });
});
