import { Checkbox, List } from "antd";
import clsx from "clsx";
import { tasksSlice, type ITask } from "@/entities/Task";
import { useAppDispatch } from "@/shared/hooks";

import "./styles.css";

const checkBoxClassName = (completed: ITask["completed"]) => {
    return clsx({ checkbox: true, checkbox_completed: completed });
};

export const ToggleTask = ({ id, name, completed }: ITask) => {
    const dispatch = useAppDispatch();

    const { toggleTaskCompleted } = tasksSlice.actions;
    
    const handleChange = () => {
        dispatch(toggleTaskCompleted(id));
    };

    return (
        <List.Item>
            <Checkbox
                onChange={handleChange}
                className={checkBoxClassName(completed)}
                defaultChecked={completed}
            >
                {name}
            </Checkbox>
        </List.Item>
    );
};
