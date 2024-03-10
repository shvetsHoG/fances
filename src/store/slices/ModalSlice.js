import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

const ModalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalState: (state, {payload}) => {
            state.value = payload
        }
    }
})

export default ModalSlice.reducer
export const {setModalState} = ModalSlice.actions