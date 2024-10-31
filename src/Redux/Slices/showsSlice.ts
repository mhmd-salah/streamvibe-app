import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import showsServices from "../Services/showsServices";
import errorConstants from "../../Constant/errorConstants";

// error handling
const handleErrorResponse = (error:any, thunkAPI:any) => {
  if (error.response) {
    const { status, data } = error.response;
    let code = null;
    if (status === 404) {
      code = errorConstants.ERR_404;
    } else if (status == 429) {
      code = errorConstants.ERR_429;
    }
    return thunkAPI.rejectWithValue({
      code,
      message: data.message || "Server Error",
    });
  }else if(error?.response){
    return thunkAPI.rejectWithValue({
      code: error.code ,
      message:"network error"
    })
  }
  return thunkAPI.rejectWithValue({
    code: "ERR_GENERIC",
    message: "Error",
  });
};

export const fetchAllShows = createAsyncThunk(
  "shows/fetchAllShows",
  async (_, thunkAPI) => {
    try {
      return await showsServices.fetchAllShows();
    } catch (error) {
      return handleErrorResponse(error, thunkAPI);
    }
  }
);

const initialState = {
  shows:[],
  isLoading:{
    fetchAllShows:false,
  },
  isError:{
    fetchAllShows:false,
  },
  isSuccess:{
    fetchAllShows:false
  },
  error:null,
}

const showsSlice  =createSlice({
  name:"shows",
  initialState,
  reducers:{},
  // extraReducers:(builder)=>{
  //   builder.addCase(fetchAllShows.pending, (state)=>{
  //     state.isLoading.fetchAllShows= true;
  //     state.isSuccess.fetchAllShows = false;
  //     state.isError.fetchAllShows= false;
  //   }),
  //   builder.addCase(fetchAllShows.fulfilled, (state,action)=>{
  //     state.isLoading.fetchAllShows = false;
  //     state.isSuccess.fetchAllShows = true;
  //     state.isError.fetchAllShows= false;
  //     state.shows = action.payload;
  //   }),
  //   builder.addCase(fetchAllShows.rejected, (state)=>{
  //     state.isLoading.fetchAllShows = false;
  //     state.isSuccess.fetchAllShows = false;
  //     state.isError.fetchAllShows= true;
  //   })
  // }
})