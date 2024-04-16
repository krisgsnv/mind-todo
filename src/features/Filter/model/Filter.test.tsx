import { render, screen } from "@/app/providers/AppProvider";
import { MainPage } from "@/pages/MainPage";
import userEvent from "@testing-library/user-event";

test("does filter value change", async () => {
    render(<MainPage />);
    const filterItem = screen.getByTestId("Активные").closest("label");
    if (filterItem) {
        await userEvent.click(filterItem);

        expect(screen.getByText(/попасть в mindbox/i)).toBeInTheDocument();
        expect(screen.queryByText(/сделать тестовое задание/i)).not.toBeInTheDocument();
    }
});
