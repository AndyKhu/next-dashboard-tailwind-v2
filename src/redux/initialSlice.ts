import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface initialState{
    collapse: boolean,
    darkMode: boolean,
    fullScreen: boolean
}

const initialState:initialState = {
    collapse: false,
    darkMode: false,
    fullScreen: false
}

export const authSlice = createSlice({
    name: 'init',
    initialState,
    reducers: {
        setCollapse: (state, action:PayloadAction<boolean>) =>{
            state.collapse = action.payload;
        },
        setDarkMode: (state, action:PayloadAction<boolean>) =>{
            state.darkMode = action.payload;
        },
        setFullScreen: (state, action:PayloadAction<boolean>) =>{
            state.fullScreen = action.payload;
        }
    }
})

export const {setCollapse,setDarkMode,setFullScreen} = authSlice.actions

export default authSlice.reducer