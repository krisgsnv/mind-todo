import { Flex, Typography } from "antd";

interface ITasksCountProps {
    count: number;
}

export const TasksCount = ({ count }: ITasksCountProps) => {
    return (
        <Flex justify="end">
            <Typography.Text type="secondary">
                {count > 0 ? `Осталось выполнить задач: ${count}` : "Все задачи выполнены!"}
            </Typography.Text>
        </Flex>
    );
};
