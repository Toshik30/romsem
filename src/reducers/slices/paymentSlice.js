import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const paymentCard = createAsyncThunk(
    'Payment/paymentCard',
    async (result) => {
         setTimeout(() =>  {
            result.map((item) => item) 
        }, 2000)
    }
)
const  paymentSlice = createSlice({
    name: 'Payment',
    initialState: {
        isLoading: false,
        paymentData: []
    },
    extraReducers: {
        [paymentCard.pending]: (state) => {
            state.isLoading = true
        },
        [paymentCard.fulfilled]: (state, action) => {
            action.meta.arg.map((item) => item !== '' ? state.paymentData = action.meta.arg : console.error('Error'))
            console.log(action);
            console.log(state.paymentData);
        }
    }
})

export default paymentSlice.reducer