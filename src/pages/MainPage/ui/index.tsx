import { selectTasks } from "@/entities/Task/model/tasksSlice";
import { useAppSelector } from "@/shared/hooks";
import { AddTask } from "@/features/AddTask";
import { selectActiveTasks, selectCompletedTasks, selectFilter } from "@/entities/Task";
import { Filter } from "@/features/Filter";
import { TasksList } from "./TasksList";
import { TasksCount } from "./TasksCount";

export const MainPage = () => {
    const filter = useAppSelector(selectFilter);
    const allTasks = useAppSelector(selectTasks);
    const completedTasks = useAppSelector(selectCompletedTasks);
    const activeTasks = useAppSelector(selectActiveTasks);

    const tasksMap = {
        Все: allTasks,
        Завершенные: completedTasks,
        Активные: activeTasks
    };

    return (
        <>
            <AddTask />
            <Filter />
            <TasksList tasks={tasksMap[filter]} />
            <TasksCount count={activeTasks.length} />
        </>
    );
};
