import { configureStore } from '@reduxjs/toolkit';
import SignUpSlice from './screens/UnAuth/SignUp/redux/SignUpSlice';

export const Store = configureStore({
  reducer: {
    signUp: SignUpSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
