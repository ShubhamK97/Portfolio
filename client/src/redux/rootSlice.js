import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name:'root',
    initialState:{
        loading:false,
        portfolioData:null,
        reloaData:false
    },
    reducers:{
        ShowLoading: (state,action)=>{
            state.loading=true;
        },
        HideLoading:(state,action)=>{
            state.loading=false;
        },
        SetPortfolioData:(state,action)=>{
            state.portfolioData = action.payload;
        },
        ReloadData:(state,action)=>{
            state.reloaData=action.payload;
        }
    }
})

export default rootSlice.reducer;
export const {ShowLoading,HideLoading,SetPortfolioData,ReloadData} = rootSlice.actions;