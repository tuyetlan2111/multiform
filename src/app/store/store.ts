import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { formReducer } from "./formSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const formDataPersistConfig = {
  key: "formData",
  storage: storage,
  whitelist: ["formDataState"],
};

const rootReducer = combineReducers({
  formFin: persistReducer(formDataPersistConfig, formReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

