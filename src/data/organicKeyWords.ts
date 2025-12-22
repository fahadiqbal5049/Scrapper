import * as Icons from "@/svg/Icons";

export const SortOptions = [
  "Most Valuable keywords",
  "Newly Ranked keywords",
  "Biggest Rank Gains",
  "Biggest Rank Losses",
  "Biggest Click Gains",
  "Biggest Click Losses",
  "Keyword that just made the first page",
  "Keyword that just fell off the first page",
];

export const ColumnDefaultData = {
  checkBoxes: [
    "Volume",
    "Rank (Change)",
    "SEO Clicks ( Change)",
    "Keyword Difficulty",
    "Cost Per Click",
    "Monthly Cost",
    "Clicks",
    "Organic Clicks (Percent)",
    "Paid Clicks (Percent)",
    "Desktop Searches (Percent)",
    "Mobile Searches (Percent)",
    "Not Clicked (Percent)",
    "Ads",
    "Homepages",
  ],
  cost: ["Broad", "Phrase", "Exact"],
  cpc: ["Broadb", "Phraseb", "Exactc"],
};

export const exportOptions = [
  {
    icon: Icons.csv,

    type: "Export as CSV",
  },
  {
    icon: Icons.pdf,

    type: "Export to Google Sheets",
  },
  {
    icon: Icons.copy,

    type: "Copy Keywords to Clipboard",
  },
  {
    icon: Icons.copy,

    type: "Copy Table to Clipboard",
  },
  {
    icon: Icons.pdf,

    type: "Export as PDF",
  },
];

export const FilterModeOptions = [
  { value: "default", label: "Default" },
  { value: "custom", label: "Custom" },
];

