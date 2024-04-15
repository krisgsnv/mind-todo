import { Checkbox, List } from "antd";
import clsx from "clsx";
import { type ITask, toggleTaskCompleted } from "@/entities/Task";
import { useAppDispatch } from "@/shared/hooks";

import "./styles.css";

const checkBoxClassName = (completed: ITask["completed"]) => {
    return clsx({ checkbox: true, checkbox_completed: completed });
};

export const ToggleTask = ({ id, name, completed }: ITask) => {
    const dispatch = useAppDispatch();

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
