import { List, ListProps } from "antd";
import { ITask } from "@/entities/Task";
import { ToggleTask } from "@/features/ToggleTask";

export const TasksList = ({ tasks }: { tasks: ListProps<ITask>["dataSource"] }) => {
    return (
        <List
            bordered
            dataSource={tasks}
            renderItem={(task) => <ToggleTask key={task.id} {...task} />}
        />
    );
};
