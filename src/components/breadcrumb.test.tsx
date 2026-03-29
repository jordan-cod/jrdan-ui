import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./breadcrumb";

afterEach(cleanup);

describe("Breadcrumb", () => {
	it("renders a nav with breadcrumb label", () => {
		render(
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>,
		);
		expect(screen.getByRole("navigation")).toHaveAttribute(
			"aria-label",
			"breadcrumb",
		);
	});

	it("renders links correctly", () => {
		render(
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/test">Test</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>,
		);
		const link = screen.getByRole("link", { name: "Test" });
		expect(link).toHaveAttribute("href", "/test");
	});

	it("renders current page with aria attributes", () => {
		render(
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbPage>Current</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>,
		);
		const page = screen.getByText("Current");
		expect(page).toHaveAttribute("aria-current", "page");
		expect(page).toHaveAttribute("aria-disabled", "true");
	});

	it("renders separator with aria-hidden", () => {
		render(
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Page</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>,
		);
		const nav = screen.getByRole("navigation");
		const separator = nav.querySelector('[data-slot="breadcrumb-separator"]');
		expect(separator).toHaveAttribute("aria-hidden", "true");
	});

	it("renders custom separator content", () => {
		render(
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbSeparator>/</BreadcrumbSeparator>
				</BreadcrumbList>
			</Breadcrumb>,
		);
		expect(screen.getByText("/")).toBeInTheDocument();
	});

	it("renders ellipsis with sr-only text", () => {
		render(
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbEllipsis />
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>,
		);
		expect(screen.getByText("More")).toBeInTheDocument();
	});

	it("renders full breadcrumb trail", () => {
		render(
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Post Title</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>,
		);
		const nav = screen.getByRole("navigation");
		expect(within(nav).getByText("Home")).toBeInTheDocument();
		expect(within(nav).getByText("Blog")).toBeInTheDocument();
		expect(within(nav).getByText("Post Title")).toBeInTheDocument();
	});

	it("applies custom className to BreadcrumbList", () => {
		render(
			<Breadcrumb>
				<BreadcrumbList className="custom">
					<BreadcrumbItem>
						<BreadcrumbPage>Page</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>,
		);
		const list = screen.getByRole("navigation").querySelector("ol");
		expect(list?.className).toContain("custom");
	});
});
