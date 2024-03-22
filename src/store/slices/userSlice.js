import { createSlice } from "@reduxjs/toolkit";
import { validationSettings } from "../../utils/constant";
import { isEmail } from "validator";

const initialState = {
  phone: {
    value: "",
    isValid: false,
    errorMessage: "",
    isEmpty: true,
    showErrorFlag: false,
  },
  name: {
    value: "",
    isValid: false,
    errorMessage: "",
    isEmpty: true,
    showErrorFlag: false,
  },
  email: {
    value: "",
    isValid: false,
    errorMessage: "",
    isEmpty: true,
    showErrorFlag: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPhone: (state, action) => {
      state.phone.value = action.payload.value;
      state.phone.isValid = action.payload.isValid;
      state.phone.isEmpty = !state.phone.value.replace("+7", "").length;
      state.phone.errorMessage = state.phone.isValid
        ? ""
        : validationSettings.phone.message;
      state.phone.showErrorFlag = false;
    },
    setName: (state, action) => {
      state.name.value = action.payload.value;
      state.name.isValid =
        state.name.value.replace(/[' ']/g, "").length >= validationSettings.name.minLength &&
        !validationSettings.name.pattern.test(state.name.value);
      state.name.isEmpty = !state.name.value.replace(/[' ']/g, "").length;
      state.name.errorMessage = state.name.isValid
        ? ""
        : validationSettings.name.message;
      state.name.showErrorFlag = false;
    },
    setEmail: (state, action) => {
      state.email.value = action.payload.value;
      state.email.isValid = isEmail(state.email.value);
      state.email.isEmpty = !state.email.value.replace(/[' ']/g, "").length;
      state.email.errorMessage = state.email.isValid
        ? ""
        : validationSettings.email.message;
      state.email.showErrorFlag = false;
    },
    setShowErrorFlag: (state) => {
      state.phone.showErrorFlag = true;
      state.name.showErrorFlag = true;
      state.email.showErrorFlag = true;
    },
    resetShowErrorFlag: (state) => {
      state.phone.showErrorFlag = false;
      state.name.showErrorFlag = false;
      state.email.showErrorFlag = false;
    },
  },
});

export const { reducer: userReducer, actions: userAction } = userSlice;
