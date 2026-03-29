import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./select";

afterEach(cleanup);

function renderSelect(props?: {
	triggerProps?: Record<string, unknown>;
	disabled?: boolean;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
}) {
	return render(
		<Select
			disabled={props?.disabled}
			defaultValue={props?.defaultValue}
			onValueChange={props?.onValueChange}
		>
			<SelectTrigger {...props?.triggerProps}>
				<SelectValue placeholder="Select an option" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
			</SelectContent>
		</Select>,
	);
}

describe("Select", () => {
	it("renders with placeholder", () => {
		renderSelect();
		expect(screen.getByText("Select an option")).toBeInTheDocument();
	});

	it("renders trigger with correct data-slot", () => {
		renderSelect();
		const trigger = screen.getByRole("combobox");
		expect(trigger).toHaveAttribute("data-slot", "select-trigger");
	});

	it("applies default variant and size", () => {
		renderSelect();
		const trigger = screen.getByRole("combobox");
		expect(trigger).toHaveAttribute("data-variant", "outline");
		expect(trigger).toHaveAttribute("data-size", "default");
	});

	it("applies variant attribute", () => {
		renderSelect({ triggerProps: { variant: "secondary" } });
		expect(screen.getByRole("combobox")).toHaveAttribute(
			"data-variant",
			"secondary",
		);
	});

	it("applies size attribute", () => {
		renderSelect({ triggerProps: { size: "sm" } });
		expect(screen.getByRole("combobox")).toHaveAttribute("data-size", "sm");
	});

	it("has correct aria attributes on trigger", () => {
		renderSelect();
		const trigger = screen.getByRole("combobox");
		expect(trigger).toHaveAttribute("aria-expanded", "false");
		expect(trigger).toHaveAttribute("aria-autocomplete", "none");
	});

	it("renders with default value", () => {
		renderSelect({ defaultValue: "apple" });
		expect(screen.getByText("Apple")).toBeInTheDocument();
	});

	it("is disabled when disabled prop is set", () => {
		renderSelect({ disabled: true });
		expect(screen.getByRole("combobox")).toBeDisabled();
	});

	it("merges custom className on trigger", () => {
		renderSelect({ triggerProps: { className: "custom-class" } });
		const trigger = screen.getByRole("combobox");
		expect(trigger.className).toContain("custom-class");
	});
});
