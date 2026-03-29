import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	addons: ["@storybook/addon-themes", "@storybook/addon-docs"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	viteFinal: async (config) => {
		const tailwindcss = await import("@tailwindcss/vite");
		config.plugins = [...(config.plugins || []), tailwindcss.default()];
		return config;
	},
};

export default config;
