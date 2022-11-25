import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const paymentCard = createAsyncThunk(
    'Payment/paymentCard',
    async (result) => {
        setTimeout(() => {
            result.map((item) => console.log(item)) 
            console.log(result);
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
            action.meta.arg.length === 4 ? state.paymentData.push(action.meta.arg): console.log('sosi jepu')
            console.log(action);
        }
    }
})

export default paymentSlice.reducer