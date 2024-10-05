import { configureStore } from '@reduxjs/toolkit';
import SignUpSlice from './screens/UnAuth/SignUp/redux/Slices';
import HomeSlice from './screens/Auth/Home/redux/Slices/HomeSlice';

export const Store = configureStore({
  reducer: {
    signUp: SignUpSlice,
    home: HomeSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
