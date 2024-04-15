import { RootState } from "@/app/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ITask {
    name: string;
}

interface ITasksState {
    tasks: ITask[];
}

const initialState: ITasksState = {
    tasks: [{ name: "Task1" }]
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.tasks.push(action.payload);
        }
    }
});

export const { addTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;
