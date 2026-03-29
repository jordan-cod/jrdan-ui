import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { SpotlightCard } from "./spotlight-card";

const meta: Meta<typeof SpotlightCard> = {
	title: "Components/SpotlightCard",
	component: SpotlightCard,
};

export default meta;
type Story = StoryObj<typeof SpotlightCard>;

export const Default: Story = {
	render: () => (
		<SpotlightCard>
			<Card className="border-0 bg-transparent">
				<CardHeader>
					<CardTitle className="text-white">Hover me</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-neutral-400">
						Move your mouse over this card to see the spotlight effect.
					</p>
				</CardContent>
			</Card>
		</SpotlightCard>
	),
};

export const OrangeSpotlight: Story = {
	render: () => (
		<SpotlightCard spotlightColor="rgba(255, 128, 0, 0.1)">
			<Card className="border-0 bg-transparent">
				<CardHeader>
					<CardTitle className="text-white">Orange Spotlight</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-neutral-400">
						Custom spotlight color matching the primary orange theme.
					</p>
				</CardContent>
				<CardFooter>
					<p className="text-sm text-neutral-500">
						Used in recommendations section
					</p>
				</CardFooter>
			</Card>
		</SpotlightCard>
	),
};

export const Grid: Story = {
	name: "Card Grid",
	render: () => (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gap: "16px",
				maxWidth: "900px",
			}}
		>
			{["First", "Second", "Third"].map((title) => (
				<SpotlightCard key={title} spotlightColor="rgba(255, 128, 0, 0.1)">
					<Card className="border-0 bg-transparent">
						<CardHeader>
							<CardTitle className="text-white">{title} Card</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-neutral-400">
								Hover to see the spotlight follow your cursor.
							</p>
						</CardContent>
					</Card>
				</SpotlightCard>
			))}
		</div>
	),
};
