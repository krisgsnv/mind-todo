import { tasksSlice } from "@/entities/Task";
import { useAppDispatch } from "@/shared/hooks";
import { Button, Form, Input, Space } from "antd";

export function AddTask() {
    const dispatch = useAppDispatch();
    const { addTask } = tasksSlice.actions;

    const handleFinish = ({ name }: { name: string }) => {
        dispatch(addTask({ name, completed: false }));
    };

    return (
        <Form onFinish={handleFinish} validateTrigger="onSubmit" layout="horizontal">
            <Space>
                <Form.Item name="name" rules={[{ required: true, message: "Заполните поле" }]}>
                    <Input placeholder="Добавить новую задачу" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">Добавить</Button>
                </Form.Item>
            </Space>
        </Form>
    );
}
