import { List, ListProps } from "antd";
import { selectTasks } from "@/entities/Task/model/tasksSlice";
import { useAppSelector } from "@/shared/hooks";
import { AddTask } from "@/features/AddTask";
import { selectActiveTasks, selectCompletedTasks, selectFilter, type ITask } from "@/entities/Task";
import { Filter } from "@/features/Filter";
import { ToggleTask } from "@/features/ToggleTask";

const TasksList = ({ tasks }: { tasks: ListProps<ITask>["dataSource"] }) => {
    return (
        <List
            bordered
            dataSource={tasks}
            renderItem={(task) => <ToggleTask key={task.id} {...task} />}
        />
    );
};

export const App = () => {
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
        </>
    );
};
