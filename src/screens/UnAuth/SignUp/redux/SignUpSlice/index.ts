import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AxiosInstance from '../../../../../Config/AxiosInstance';
import { TitleConstants } from '../../../../../Constants/TitleConstants';
import { SignUpFormValues } from '../SignUpTypes';
import { SignUpUserService } from '../Services/SignUpUserService';

interface SignUpState {
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  user: any; 
}

const initialState: SignUpState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  user: null, 
};

const SignUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    resetSignUpState: () => initialState, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(SignUpUserService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SignUpUserService.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload; 
      })
      .addCase(SignUpUserService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setAuthenticated, resetSignUpState } = SignUpSlice.actions;

export default SignUpSlice.reducer;
