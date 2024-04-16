import { render, screen } from "@/app/providers/AppProvider";
import { AddTask } from "../ui";
import userEvent from "@testing-library/user-event";

test("Error message appears when input field is empty", async () => {
    render(<AddTask />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await userEvent.clear(input);
    await userEvent.keyboard("{enter}");
    await userEvent.click(button);

    expect(screen.getByText(/заполните поле/i)).toBeInTheDocument();
});

test("Error message does not appear when input field is filled", async () => {
    render(<AddTask />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await userEvent.type(input, "test");
    await userEvent.keyboard("{enter}");
    await userEvent.click(button);

    expect(screen.queryByText(/заполните поле/i)).not.toBeInTheDocument();
});
