import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: string = ''

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        changeAddress: (__, action: PayloadAction<string>) => {
            return action.payload
        },
        clearAddress: () => {
            return ''
        }
    }
})

export const {changeAddress} = addressSlice.actions
export default addressSlice.reducer