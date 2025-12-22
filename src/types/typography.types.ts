export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3" // Subsection headings
  | "h4" // Small headings or component titles
  | "p" // Standard paragraph text
  | "label" // Form input labels
  | "text"
  | "small" // Smaller, supplementary text
  | "blockquote" // Quote or citation text
  | "caption"; // Image or figure captions

/**
 * Represents available color variants for typography
 * @description Defines color semantics and usage contexts
 */
export type ColorVariant =
  | "default" // Standard text color
  | "muted" // Subdued, secondary text
  | "primary" // Primary brand color
  | "secondary" // Secondary brand color
  | "success"
  | "pink"
  | "orange"
  | "destructive" // Error or warning color
  | "accent"; // Highlight or emphasis color

/**
 * Represents available font weight variants
 * @description Defines text weight/boldness levels
 */

/**
 * Typography component properties
 * @description Comprehensive props for flexible typography rendering
 */
export interface TypographyProps {
  /**
   * Defines the HTML tag and semantic meaning of the typography element
   * @example
   * <Typography variant="h1">Main Heading</Typography>
   * <Typography variant="p">Paragraph text</Typography>
   */
  variant?: TypographyVariant;

  /**
   * Defines the color semantic and visual style
   * @example
   * <Typography color="primary">Highlighted Text</Typography>
   * <Typography color="muted">Secondary Information</Typography>
   */
  color?: ColorVariant;

  /**
   * Controls the font weight/boldness
   * @example
   * <Typography weight="bold">Important Text</Typography>
   * <Typography weight="light">Subtle Text</Typography>
   */

  /**
   * Additional Tailwind CSS classes for custom styling
   * @example
   * <Typography className="underline">Underlined Text</Typography>
   */
  className?: string;

  /**
   * The text content or child elements
   */
  children: React.ReactNode;
}
