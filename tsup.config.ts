import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm", "cjs"],
	dts: true,
	sourcemap: true,
	clean: true,
	external: ["react", "react-dom", "@radix-ui/react-select"],
	banner: {
		js: '"use client";',
	},
});
