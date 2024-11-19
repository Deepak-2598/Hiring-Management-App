import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchApplicantData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get('https://reqres.in/api/users?page=1');
    console.log(response,'checkResponse')
    return response.data.data;
})

export const addApplicantData = createAsyncThunk('data/addApplicant', async (newApplicant) => {
    const response = await axios.post('https://reqres.in/api/user', newApplicant );
    // console.log(response,'add-data');
    return response.data;
})

const applicantDataSlice = createSlice({
    name: 'tableDetail',
    initialState: {
        data:[],
        error:null,
        status: 'idle',
        cartData: []
    },
    reducers: {
        addApplicant: (state,action) => {
            state.cartData.push(action.payload)
        },
        removeApplicant: (state,action) => {
            state.cartData = state.cartData.filter(data => data.id !== action.payload);
            // console.log(state.data,'Main-data');
            // console.log(state.cartData,'cart-data');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApplicantData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchApplicantData.fulfilled, (state,action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchApplicantData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addApplicantData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addApplicantData.fulfilled, (state,action) => {
                // state.status = 'succeeded';
                state.data.push(action.payload);
                // console.log(action.payload,'payloadData-Add...')
            })
            .addCase(addApplicantData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export const { addApplicant, removeApplicant } = applicantDataSlice.actions; 

export default applicantDataSlice.reducer;