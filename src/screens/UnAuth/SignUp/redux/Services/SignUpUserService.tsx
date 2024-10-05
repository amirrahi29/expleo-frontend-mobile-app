import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpFormValues } from "../SignUpTypes";
import AxiosInstance from "../../../../../Config/AxiosInstance";
import { TitleConstants } from "../../../../../Constants/TitleConstants";

export const SignUpUserService = createAsyncThunk(
    'signUp/signUpUser',
    async (formValues: SignUpFormValues, { rejectWithValue }) => {
      try {
        const username = formValues.fullName.replace(/\s+/g, '').toLowerCase();
        const response = await AxiosInstance.post('/users', {
          name: formValues.fullName,
          email: formValues.email,
          password: formValues.password,
          username: username,
        });
        return response.data;
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || TitleConstants.signUpFailed;
        return rejectWithValue(errorMessage);
      }
    }
  );