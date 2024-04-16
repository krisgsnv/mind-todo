import { render, screen } from "@/app/providers/AppProvider";
import { ToggleTask } from "../ui";
import userEvent from "@testing-library/user-event";

test("Task state toggles when clicked", async () => {
    render(<ToggleTask id={100} name="one" completed={false} />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    const initialState = checkbox.checked;

    await userEvent.click(checkbox);
    const updatedState = checkbox.checked;

    expect(updatedState).toEqual(!initialState);
});

test("Task state remains unchanged when clicked twice", async () => {
    render(<ToggleTask id={200} name="double" completed={true} />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    const initialState = checkbox.checked;

    await userEvent.dblClick(checkbox);
    const updatedState = checkbox.checked;

    expect(updatedState).toEqual(initialState);
});