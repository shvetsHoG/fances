import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ModalSlice from "./slices/ModalSlice";
import FormSlice from "./slices/FormSlice";

const rootReducer = combineReducers({
    modal: ModalSlice,
    form: FormSlice,
})

export const store = configureStore({
    reducer: rootReducer
})