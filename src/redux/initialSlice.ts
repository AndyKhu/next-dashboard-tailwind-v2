import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface initialState{
    collapse: boolean
}

const initialState:initialState = {
    collapse: false
}

export const authSlice = createSlice({
    name: 'init',
    initialState,
    reducers: {
        setCollapse: (state, action:PayloadAction<boolean>) =>{
            state.collapse = action.payload;
        }
    }
})

export const {setCollapse} = authSlice.actions

export default authSlice.reducer