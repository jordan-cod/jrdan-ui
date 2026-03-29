import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./card";

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	render: () => (
		<Card style={{ maxWidth: "400px" }}>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here.</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card content with any elements you need.</p>
			</CardContent>
			<CardFooter>
				<Button size="sm">Action</Button>
			</CardFooter>
		</Card>
	),
};

export const WithAction: Story = {
	render: () => (
		<Card style={{ maxWidth: "400px" }}>
			<CardHeader>
				<CardTitle>Project Name</CardTitle>
				<CardDescription>A brief project description.</CardDescription>
				<CardAction>
					<Button variant="ghost" size="sm">
						Edit
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p>Built with Next.js, TypeScript and Tailwind CSS.</p>
			</CardContent>
		</Card>
	),
};

export const Simple: Story = {
	render: () => (
		<Card style={{ maxWidth: "400px" }}>
			<CardHeader>
				<CardTitle>Simple Card</CardTitle>
			</CardHeader>
			<CardContent>
				<p>Just a header and content, no footer.</p>
			</CardContent>
		</Card>
	),
};
