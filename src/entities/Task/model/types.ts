export interface ITask {
    id: number;
    name: string;
    completed: boolean;
}

export type TaskFilterType = "Все" | "Завершенные" | "Активные";