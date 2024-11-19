import { configureStore } from "@reduxjs/toolkit";
import applicantDataReducer from './common/applicantSlice'

export const store = configureStore({
    reducer: {
        applicantData: applicantDataReducer,
    }
})