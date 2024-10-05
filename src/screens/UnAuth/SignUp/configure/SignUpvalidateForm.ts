import { TitleConstants } from "../../../../Constants/TitleConstants";

interface FormValues {
    fullName: string;
    email: string;
    password: string;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    password?: string;
}

export const SignUpvalidateForm = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};

    if (!values.fullName) {
        errors.fullName = TitleConstants.fullNameRequired; 
    } else if (values.fullName.length > 50) {
        errors.fullName = TitleConstants.fullNameMaxLength; 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email) {
        errors.email = TitleConstants.emailRequired;
    } else if (!emailRegex.test(values.email)) {
        errors.email = TitleConstants.emailInvalid;
    }

    const passwordRegex = /^[A-Za-z0-9]+$/;
    if (!values.password) {
        errors.password = TitleConstants.passwordRequired;
    } else if (values.password.length < 8) {
        errors.password = TitleConstants.passwordMinLength;
    } else if (!passwordRegex.test(values.password)) {
        errors.password = TitleConstants.passwordInvalid;
    }

    return errors;
};
