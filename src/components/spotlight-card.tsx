"use client";

import { useRef, useState } from "react";
import { cn } from "../lib/utils";

interface SpotlightCardProps extends React.ComponentProps<"div"> {
	spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

function SpotlightCard({
	children,
	className,
	spotlightColor = "rgba(255, 255, 255, 0.25)",
	...props
}: SpotlightCardProps) {
	const divRef = useRef<HTMLDivElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);

	const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
		if (!divRef.current || isFocused) return;
		const rect = divRef.current.getBoundingClientRect();
		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	return (
		<div
			ref={divRef}
			data-slot="spotlight-card"
			onMouseMove={handleMouseMove}
			onFocus={() => {
				setIsFocused(true);
				setOpacity(0.6);
			}}
			onBlur={() => {
				setIsFocused(false);
				setOpacity(0);
			}}
			onMouseEnter={() => setOpacity(0.6)}
			onMouseLeave={() => setOpacity(0)}
			className={cn(
				"relative rounded-3xl dark:border dark:border-neutral-800 bg-neutral-900 overflow-hidden",
				className,
			)}
			{...props}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
				style={{
					opacity,
					background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
				}}
			/>
			{children}
		</div>
	);
}

export { SpotlightCard };
export type { SpotlightCardProps };
