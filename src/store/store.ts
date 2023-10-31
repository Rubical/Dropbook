import {combineReducers, configureStore} from "@reduxjs/toolkit";
import addressReducer from "./address.slice";

const rootReducer = combineReducers({
    address: addressReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>