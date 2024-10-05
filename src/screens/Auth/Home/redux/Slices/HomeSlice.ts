import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { navigate } from '../../../../../navigation/navigationService';
import { routes } from '../../../../../navigation/Routes';
import { HomeService } from '../Services/HomeService';

interface SignUpState {
  loading: boolean;
  error: string | null;
  user: any; 
}

const initialState: SignUpState = {
  loading: false,
  error: null,
  user: null, 
};

const SignUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      
    },
    resetSignUpState: () => initialState, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(HomeService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(HomeService.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; 
        navigate(routes.HomeScreen);
      })
      .addCase(HomeService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setAuthenticated, resetSignUpState } = SignUpSlice.actions;

export default SignUpSlice.reducer;
