import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "secondary", "destructive", "outline"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	args: {
		children: "Badge",
		variant: "default",
	},
};

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<Badge variant="default">Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
		</div>
	),
};

export const WithIcon: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<Badge
				variant="default"
				icon={
					<svg
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path d="m18 16 4-4-4-4" />
						<path d="m6 8-4 4 4 4" />
						<path d="m14.5 4-5 16" />
					</svg>
				}
			>
				TypeScript
			</Badge>
			<Badge
				variant="default"
				icon={
					<svg
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path d="M12 13V2l8 4-8 4" />
						<path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
						<path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
					</svg>
				}
			>
				React
			</Badge>
		</div>
	),
};

export const TechStack: Story = {
	name: "Tech Stack",
	render: () => (
		<div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
			<Badge variant="default">NextJS</Badge>
			<Badge variant="default">TypeScript</Badge>
			<Badge variant="default">Express</Badge>
			<Badge variant="secondary">+6</Badge>
		</div>
	),
};

export const ProjectTags: Story = {
	name: "Project Tags",
	render: () => (
		<div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
			<Badge variant="secondary" className="capitalize">
				web
			</Badge>
			<Badge variant="outline" className="text-xs">
				Docker
			</Badge>
			<Badge variant="outline" className="text-xs">
				PostgreSQL
			</Badge>
		</div>
	),
};
