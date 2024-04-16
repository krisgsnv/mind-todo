import { render, screen } from "@/app/providers/AppProvider";
import { MainPage } from "@/pages/MainPage";
import userEvent from "@testing-library/user-event";

test("Filter selection triggers content change", async () => {
    render(<MainPage />);
    const filterItem = screen.getByText("Активные");

    await userEvent.click(filterItem);

    expect(screen.getByText(/попасть в mindbox/i)).toBeInTheDocument();
    expect(screen.queryByText(/сделать тестовое задание/i)).not.toBeInTheDocument();
});
