import { createSlice } from "@reduxjs/toolkit"


const uiSlice = createSlice({
    name:"ui",
    initialState: {cartIsVisible:false },
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        },
        
    }
})

export default uiSlice