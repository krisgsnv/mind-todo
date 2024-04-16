import { Radio, type RadioChangeEvent } from "antd";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { selectFilter, tasksSlice } from "@/entities/Task";

const filterOptions = ["Все", "Завершенные", "Активные"];

export const Filter = () => {
    const dispatch = useAppDispatch();
    const { setFilter } = tasksSlice.actions;
    const filter = useAppSelector(selectFilter);

    const handleChange = (e: RadioChangeEvent) => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <Radio.Group optionType="button" value={filter} onChange={handleChange}>
            {filterOptions.map((filterValue) => (
                <Radio.Button data-testid={filterValue} key={filterValue} value={filterValue}>
                    {filterValue}
                </Radio.Button>
            ))}
        </Radio.Group>
    );
};
