import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
	title: "Components/Typography",
	component: Typography,
	argTypes: {
		variant: {
			control: "select",
			options: [
				"h1",
				"h2",
				"h3",
				"h4",
				"h5",
				"lead",
				"body",
				"p",
				"small",
				"blockquote",
				"stat",
			],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
	args: {
		variant: "p",
		children: "This is a paragraph text.",
	},
};

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
			<Typography variant="h1">Hero Title</Typography>
			<Typography variant="h2">Page Title</Typography>
			<Typography variant="h3">Section Title</Typography>
			<Typography variant="h4">Subsection Title</Typography>
			<Typography variant="h5">Card Title</Typography>
			<Typography variant="lead">
				Lead text for introductions — used below page titles to give context.
			</Typography>
			<Typography variant="body">
				Body text for important content that deserves more visual weight than
				regular paragraphs.
			</Typography>
			<Typography variant="p">
				Paragraph text for descriptions, metadata, and secondary content.
			</Typography>
			<Typography variant="small">
				Small text for dates, captions, and fine print.
			</Typography>
			<Typography variant="blockquote">
				"From day one, Jordan proved to be proactive and eager to face
				challenges, contributing significantly to the success of our team."
			</Typography>
			<Typography variant="stat">55k+</Typography>
		</div>
	),
};

export const PageExample: Story = {
	name: "Page Layout Example",
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				maxWidth: "640px",
			}}
		>
			<Typography variant="h2">Featured Projects</Typography>
			<Typography variant="lead">
				A collection of projects I've built using modern web technologies.
			</Typography>
			<div style={{ marginTop: "24px" }}>
				<Typography variant="h5">Campaign Manager</Typography>
				<Typography variant="body">
					Fullstack campaign management application built with Next.js and
					Express, featuring PostgreSQL storage and Docker Compose
					orchestration.
				</Typography>
				<Typography variant="small">Feb 2026</Typography>
			</div>
		</div>
	),
};
