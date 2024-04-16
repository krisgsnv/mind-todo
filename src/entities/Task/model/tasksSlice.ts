import { RootState } from "@/app/store";
import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask, TaskFilterType } from "./types";

interface ITasksState {
    filter: TaskFilterType;
    tasks: ITask[];
}

const initialState: ITasksState = {
    filter: "Все",
    tasks: [
        { id: 1, name: "Сделать тестовое задание", completed: true },
        { id: 2, name: "Попасть в Mindbox", completed: false }
    ]
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: ({ tasks }, action: PayloadAction<Omit<ITask, "id">>) => {
            const id = tasks[tasks.length - 1].id + 1;
            tasks.push({ id, ...action.payload });
        },
        toggleTaskCompleted: ({ tasks }, action: PayloadAction<ITask["id"]>) => {
            const id = action.payload;
            const task = tasks.find((task) => task.id === id);

            if (task) {
                task.completed = !task.completed;
            }
        },
        setFilter: (state, action: PayloadAction<TaskFilterType>) => {
            state.filter = action.payload;
        }
    }
});

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectFilter = (state: RootState) => state.tasks.filter;

export const selectActiveTasks = createSelector([selectTasks], (tasks) =>
    tasks.filter((task) => !task.completed)
);
export const selectCompletedTasks = createSelector([selectTasks], (tasks) =>
    tasks.filter((task) => task.completed)
);
