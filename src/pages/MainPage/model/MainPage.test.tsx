import { render, screen } from "@/app/providers/AppProvider";
import { MainPage } from "../ui";
import userEvent from "@testing-library/user-event";

test("Check empty list stubs", async () => {
    render(<MainPage />);
    const filterItem = screen.getByText("Активные");
    const task = screen.getByText(/попасть в mindbox/i);

    await userEvent.click(task);
    expect(screen.getByText(/все задачи выполнены/i)).toBeInTheDocument();
    
    await userEvent.click(filterItem);
    expect(screen.getByText(/нет данных/i)).toBeInTheDocument();
});
