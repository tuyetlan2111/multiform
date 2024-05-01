
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    lastName: "",
    selectedOption: ""
  },
};

export const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updateField: (state, action) => {
      return {
        ...state.formData,
        ...action.payload,
      };
    },
    updateSelect: (state, action) => {
      state.formData.selectedOption = action.payload;
    }
  },
});

export const { updateField, updateSelect } = formSlice.actions;
export const formReducer = formSlice.reducer;