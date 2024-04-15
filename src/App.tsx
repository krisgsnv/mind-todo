import { selectTasks } from "@/entities/Task/model/tasksSlice";
import { useAppSelector } from "@/shared/hooks";

export function App() {
    const tasks = useAppSelector(selectTasks);
    return <>{tasks.map((task) => task.name)}</>;
}
