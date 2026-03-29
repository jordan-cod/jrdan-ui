# @jordan-cod/jrdan-ui

Component library by [jrdan.dev](https://jrdan.dev). Built with React, Tailwind CSS v4, Radix UI, and CVA.

## Components

| Component | Description |
|-----------|-------------|
| **Button** | 3D press-down effect button with 6 variants and 8 sizes |
| **Typography** | Text component with semantic variants (h1-h5, lead, p, small, stat, blockquote) |
| **Breadcrumb** | Accessible breadcrumb navigation with separator and ellipsis support |

## Installation

This package is hosted on GitHub Packages. Configure your `.npmrc`:

```
@jordan-cod:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

Then install:

```bash
pnpm add @jordan-cod/jrdan-ui
```

## Usage

```tsx
import { Button, Typography, Breadcrumb } from "@jordan-cod/jrdan-ui";
```

### Button

```tsx
<Button variant="default">Click me</Button>
<Button variant="destructive" size="sm">Delete</Button>
<Button variant="ghost" size="icon"><Icon /></Button>
```

**Variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`

**Sizes:** `default`, `xs`, `sm`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`

### Typography

```tsx
<Typography variant="h1">Hero Title</Typography>
<Typography variant="lead">Introduction text</Typography>
<Typography variant="stat">55k+</Typography>
<Typography variant="h3" as="h1">h3 style as h1 element</Typography>
```

**Variants:** `h1`, `h2`, `h3`, `h4`, `h5`, `lead`, `p`, `small`, `blockquote`, `stat`

### Breadcrumb

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Tailwind CSS Setup

Add the `@source` directive in your CSS so Tailwind scans the library classes:

```css
@import "tailwindcss";
@source "../../node_modules/@jordan-cod/jrdan-ui/dist";
```

The library uses CSS variables for theming (`--primary`, `--background`, etc.). Define them in your project or import the included theme:

```css
@import "@jordan-cod/jrdan-ui/styles.css";
```

## Development

```bash
pnpm install       # Install dependencies
pnpm dev           # Start Storybook
pnpm build         # Build the library
```

## Publishing

Bump the version in `package.json` and push to `main`. GitHub Actions will automatically build, publish to GitHub Packages, and create a release.

## Tech Stack

- [React](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com)
- [CVA](https://cva.style)
- [tsup](https://tsup.egoist.dev)
- [Storybook](https://storybook.js.org)

## License

MIT
