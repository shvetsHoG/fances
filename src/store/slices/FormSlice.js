import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: {
        value: "",
        focus: false,
    },
    phone: {
        value: "",
        focus: false,
    }
}

const FormSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setPhone: (state, {payload}) => {
            state.phone.value = payload
        },

        setName: (state, {payload}) => {
            state.name.value = payload
        },

        setNameFocus: (state, {payload}) => {
            state.name.focus = payload
        },

        setPhoneFocus: (state, {payload}) => {
            state.phone.focus = payload
        },

        setAllFalse: (state) => {
            state.phone.focus = false;
            state.name.focus = false;

        }
    }
})

export default FormSlice.reducer
export const {setName, setPhone, setNameFocus, setAllFalse, setPhoneFocus} = FormSlice.actions