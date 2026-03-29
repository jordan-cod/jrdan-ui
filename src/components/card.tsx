"use client";

import { useRef, useState } from "react";
import type * as React from "react";
import { cn } from "../lib/utils";

function Card({
	className,
	spotlight = false,
	spotlightColor = "rgba(255, 255, 255, 0.25)",
	children,
	...props
}: React.ComponentProps<"div"> & {
	spotlight?: boolean;
	spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}) {
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
			data-slot="card"
			onMouseMove={spotlight ? handleMouseMove : undefined}
			onFocus={
				spotlight
					? () => {
							setIsFocused(true);
							setOpacity(0.6);
						}
					: undefined
			}
			onBlur={
				spotlight
					? () => {
							setIsFocused(false);
							setOpacity(0);
						}
					: undefined
			}
			onMouseEnter={spotlight ? () => setOpacity(0.6) : undefined}
			onMouseLeave={spotlight ? () => setOpacity(0) : undefined}
			className={cn(
				"bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-b-[3px] border-black/30 dark:border-white/30 py-6 shadow-sm",
				spotlight && "relative overflow-hidden",
				className,
			)}
			{...props}
		>
			{spotlight && (
				<div
					className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
					style={{
						opacity,
						background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
					}}
				/>
			)}
			{children}
		</div>
	);
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				"@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
				className,
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-title"
			className={cn("leading-none font-semibold", className)}
			{...props}
		/>
	);
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-action"
			className={cn(
				"col-start-2 row-span-2 row-start-1 self-start justify-self-end",
				className,
			)}
			{...props}
		/>
	);
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-content"
			className={cn("px-6", className)}
			{...props}
		/>
	);
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-footer"
			className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
			{...props}
		/>
	);
}

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
};
