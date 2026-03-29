import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
	title: "Components/Textarea",
	component: Textarea,
	argTypes: {
		disabled: { control: "boolean" },
		placeholder: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	args: {
		placeholder: "Write your message...",
	},
};

export const Disabled: Story = {
	args: {
		placeholder: "Disabled textarea",
		disabled: true,
	},
};
