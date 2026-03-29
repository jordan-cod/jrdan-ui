import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input,
	argTypes: {
		type: {
			control: "select",
			options: ["text", "email", "password", "number", "search"],
		},
		disabled: { control: "boolean" },
		placeholder: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		placeholder: "Enter your email",
		type: "email",
	},
};

export const Password: Story = {
	args: {
		placeholder: "Enter your password",
		type: "password",
	},
};

export const Disabled: Story = {
	args: {
		placeholder: "Disabled input",
		disabled: true,
	},
};

export const File: Story = {
	args: {
		type: "file",
	},
};
