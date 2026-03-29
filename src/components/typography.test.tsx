import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Typography } from "./typography";

describe("Typography", () => {
  it("renders as p by default", () => {
    render(<Typography>Text</Typography>);
    const el = screen.getByText("Text");
    expect(el.tagName).toBe("P");
  });

  it("renders correct element for each variant", () => {
    const cases: [string, string][] = [
      ["h1", "H1"],
      ["h2", "H2"],
      ["h3", "H3"],
      ["h4", "H4"],
      ["h5", "H5"],
      ["lead", "P"],
      ["p", "P"],
      ["small", "SMALL"],
      ["blockquote", "BLOCKQUOTE"],
      ["stat", "SPAN"],
    ];

    for (const [variant, tag] of cases) {
      const { unmount } = render(
        <Typography variant={variant as any}>{variant}</Typography>,
      );
      expect(screen.getByText(variant).tagName).toBe(tag);
      unmount();
    }
  });

  it("overrides element with as prop", () => {
    render(
      <Typography variant="h3" as="span">
        Custom
      </Typography>,
    );
    expect(screen.getByText("Custom").tagName).toBe("SPAN");
  });

  it("applies variant classes", () => {
    render(<Typography variant="h1">Title</Typography>);
    const el = screen.getByText("Title");
    expect(el).toHaveClass("text-6xl", "font-bold", "tracking-tight");
  });

  it("applies stat variant classes", () => {
    render(<Typography variant="stat">99+</Typography>);
    const el = screen.getByText("99+");
    expect(el).toHaveClass("text-5xl", "font-semibold", "tracking-tight");
  });

  it("applies lead variant classes", () => {
    render(<Typography variant="lead">Intro</Typography>);
    const el = screen.getByText("Intro");
    expect(el).toHaveClass("text-lg", "leading-relaxed", "text-muted-foreground");
  });

  it("merges custom className", () => {
    render(<Typography className="mt-4">Spaced</Typography>);
    expect(screen.getByText("Spaced")).toHaveClass("mt-4");
  });

  it("has data-slot attribute", () => {
    render(<Typography>Slot</Typography>);
    expect(screen.getByText("Slot")).toHaveAttribute("data-slot", "typography");
  });

  it("passes through additional props", () => {
    render(<Typography id="intro">Props</Typography>);
    expect(screen.getByText("Props")).toHaveAttribute("id", "intro");
  });
});
