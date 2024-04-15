import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "@/entities/Task";

export const store = configureStore({
    reducer: {
        [tasksSlice.name]: tasksSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
