import { configureStore } from "@reduxjs/toolkit"
import AtmAccountReducer from "./reducer";

const store = configureStore({ reducer: { atmAccounts: AtmAccountReducer } });

export type RootState = ReturnType<typeof store.getState>

export default store;