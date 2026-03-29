import type { Meta, StoryObj } from "@storybook/react-vite";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./select";

const meta: Meta<typeof SelectTrigger> = {
	title: "Components/Select",
	component: SelectTrigger,
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "outline", "secondary", "ghost"],
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg"],
		},
		disabled: { control: "boolean" },
	},
	decorators: [
		(Story) => (
			<div style={{ minHeight: "200px" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof SelectTrigger>;

export const Default: Story = {
	render: (args) => (
		<Select>
			<SelectTrigger {...args}>
				<SelectValue placeholder="Select a country" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="us">United States</SelectItem>
				<SelectItem value="br">Brazil</SelectItem>
				<SelectItem value="eu">European Union</SelectItem>
			</SelectContent>
		</Select>
	),
	args: {
		variant: "default",
	},
};

export const Outline: Story = {
	render: (args) => (
		<Select>
			<SelectTrigger {...args}>
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
			</SelectContent>
		</Select>
	),
	args: {
		variant: "outline",
	},
};

export const Secondary: Story = {
	render: (args) => (
		<Select>
			<SelectTrigger {...args}>
				<SelectValue placeholder="Select a size" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="sm">Small</SelectItem>
				<SelectItem value="md">Medium</SelectItem>
				<SelectItem value="lg">Large</SelectItem>
			</SelectContent>
		</Select>
	),
	args: {
		variant: "secondary",
	},
};

export const Ghost: Story = {
	render: (args) => (
		<Select>
			<SelectTrigger {...args}>
				<SelectValue placeholder="Select an option" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="a">Option A</SelectItem>
				<SelectItem value="b">Option B</SelectItem>
				<SelectItem value="c">Option C</SelectItem>
			</SelectContent>
		</Select>
	),
	args: {
		variant: "ghost",
	},
};

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<Select>
				<SelectTrigger variant="default">
					<SelectValue placeholder="Default" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="a">Option A</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger variant="outline">
					<SelectValue placeholder="Outline" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="a">Option A</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger variant="secondary">
					<SelectValue placeholder="Secondary" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="a">Option A</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger variant="ghost">
					<SelectValue placeholder="Ghost" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="a">Option A</SelectItem>
				</SelectContent>
			</Select>
		</div>
	),
};

export const AllSizes: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				gap: "8px",
				alignItems: "center",
				flexWrap: "wrap",
			}}
		>
			<Select>
				<SelectTrigger size="sm">
					<SelectValue placeholder="Small" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="a">Option A</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger size="default">
					<SelectValue placeholder="Default" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="a">Option A</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger size="lg">
					<SelectValue placeholder="Large" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="a">Option A</SelectItem>
				</SelectContent>
			</Select>
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<Select disabled>
			<SelectTrigger>
				<SelectValue placeholder="Disabled" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="a">Option A</SelectItem>
			</SelectContent>
		</Select>
	),
};
