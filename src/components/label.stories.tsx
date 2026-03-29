import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
	title: "Components/Label",
	component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
	args: {
		children: "Email address",
	},
};

export const WithInput: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
			<Label htmlFor="email">Email address</Label>
			<Input id="email" type="email" placeholder="you@example.com" />
		</div>
	),
};
