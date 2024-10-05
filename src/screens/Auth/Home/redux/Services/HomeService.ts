// redux/Services/HomeService.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../../../../Config/AxiosInstance";
import { TitleConstants } from "../../../../../Constants/TitleConstants";
import { AuthEndPoint } from "../../../../../Config/AuthEndPointUrl";

export const HomeService = createAsyncThunk(
    'Auth/usersList',
    async (_, { rejectWithValue }) => { 
        try {
            const response = await AxiosInstance.get(AuthEndPoint.users);
            return response.data;
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || TitleConstants.signUpFailed;
            return rejectWithValue(errorMessage);
        }
    }
);
