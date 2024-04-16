import { render, screen } from "@/app/providers/AppProvider";
import { AddTask } from "../ui";
import userEvent from "@testing-library/user-event";

test("displays error message when input is clear", async () => {
    render(<AddTask />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    input.focus();
    await userEvent.keyboard("{enter}");
    await userEvent.click(button)

    expect(screen.getByText(/заполните поле/i)).toBeInTheDocument();
});

test("does not display error message when input is filled", async () => {
    render(<AddTask />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await userEvent.type(input, "test");
    await userEvent.keyboard("{enter}");
    await userEvent.click(button)

    expect(screen.queryByText(/заполните поле/i)).not.toBeInTheDocument();
});
