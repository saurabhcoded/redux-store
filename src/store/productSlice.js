import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  // In normal thunk
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  // by using createAsync thunk

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Thunks
// by using createAsyncThunk
export const fetchProduct = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

// in normal thunk
// export function fetchProduct() {
//   return async function fetchProductThunk(dispatch, getState) {
//     // const property=getState().data
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       dispatch(setProducts(response.data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setProducts([]));
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
