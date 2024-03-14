import { configureStore, createSlice } from "@reduxjs/toolkit";

const productPageState = { activeCategory: "all" };

const activeCategorySlice = createSlice({
  name: "active product",
  initialState: productPageState,
  reducers: {
    changecategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const productAction = activeCategorySlice.actions;

const store = configureStore({
  reducer: activeCategorySlice.reducer,
});

export default store;
