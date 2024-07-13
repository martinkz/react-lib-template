import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Counter from "../Counter/Counter";

describe("Counter", () => {
	it("renders the default state", () => {
		render(<Counter />);
		const button = screen.getByRole("button");
		expect(button).toHaveTextContent("Count is 0 😎");
	});

	it("increments the count by 1 on click", async () => {
		render(<Counter />);
		const button = screen.getByRole("button");
		await userEvent.click(button);
		expect(button).toHaveTextContent("Count is 1 😎");
	});
});
