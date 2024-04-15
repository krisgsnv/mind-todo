import { List as AntdList, ListProps, Radio, Space } from "antd";
import { selectTasks } from "@/entities/Task/model/tasksSlice";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { AddTask } from "@/features/AddTask";
import {
    Task,
    selectActiveTasks,
    selectCompletedTasks,
    selectFilter,
    tasksSlice,
    type ITask
} from "@/entities/Task";

const List = ({ tasks }: { tasks: ListProps<ITask>["dataSource"] }) => {
    return (
        <AntdList
            bordered
            dataSource={tasks}
            renderItem={(task) => <Task key={task.id} {...task} />}
        />
    );
};

const filterOptions = ["Все", "Завершенные", "Активные"];

export const App = () =>  {
    const dispatch = useAppDispatch();
    const { setFilter } = tasksSlice.actions;
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
            <Space>
                <Radio.Group
                    optionType="button"
                    value={filter}
                    onChange={(e) => {
                        dispatch(setFilter(e.target.value));
                    }}
                >
                    {filterOptions.map((filterValue) => (
                        <Radio.Button key={filterValue} value={filterValue}>
                            {filterValue}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Space>
            <List tasks={tasksMap[filter]} />
        </>
    );
}
