import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Button } from "./button";

afterEach(cleanup);

describe("Button", () => {
	it("renders with text", () => {
		render(<Button>Click me</Button>);
		expect(
			screen.getByRole("button", { name: "Click me" }),
		).toBeInTheDocument();
	});

	it("applies default variant", () => {
		render(<Button>Default</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveAttribute("data-variant", "default");
		expect(button).toHaveAttribute("data-size", "default");
		expect(button).toHaveAttribute("data-slot", "button");
	});

	it("applies variant attribute", () => {
		render(<Button variant="destructive">Delete</Button>);
		expect(screen.getByRole("button")).toHaveAttribute(
			"data-variant",
			"destructive",
		);
	});

	it("applies size attribute", () => {
		render(<Button size="sm">Small</Button>);
		expect(screen.getByRole("button")).toHaveAttribute("data-size", "sm");
	});

	it("handles click events", async () => {
		const onClick = vi.fn();
		render(<Button onClick={onClick}>Click</Button>);
		await userEvent.click(screen.getByRole("button"));
		expect(onClick).toHaveBeenCalledOnce();
	});

	it("is disabled when disabled prop is set", () => {
		render(<Button disabled>Disabled</Button>);
		expect(screen.getByRole("button")).toBeDisabled();
	});

	it("does not fire click when disabled", async () => {
		const onClick = vi.fn();
		render(
			<Button disabled onClick={onClick}>
				Disabled
			</Button>,
		);
		await userEvent.click(screen.getByRole("button"));
		expect(onClick).not.toHaveBeenCalled();
	});

	it("renders as child element with asChild", () => {
		render(
			<Button asChild>
				<a href="/test">Link Button</a>
			</Button>,
		);
		const link = screen.getByRole("link", { name: "Link Button" });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/test");
	});

	it("merges custom className", () => {
		render(<Button className="custom-class">Custom</Button>);
		const button = screen.getByRole("button");
		expect(button.className).toContain("custom-class");
	});

	it("forwards additional props", () => {
		render(
			<Button type="submit" aria-label="Submit form">
				Submit
			</Button>,
		);
		const button = screen.getByRole("button");
		expect(button).toHaveAttribute("type", "submit");
		expect(button).toHaveAttribute("aria-label", "Submit form");
	});
});
