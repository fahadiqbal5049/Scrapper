import * as Icons from "@/svg/Icons";

export const MassiveActionOptions = [
  { value: "enable", label: "Enable" },
  { value: "disable", label: "Disable" },
  { value: "delete", label: "Delete" },
];

export const SavedFilterSetOptions = [
  {
    value: "resellers in map infringement",
    label: "Resellers in MAP Infringement",
  },
];

export const ResellerOptions = [
  {
    value: "kicks.com",
    label: "kicks.com",
  },
  {
    value: "restocks.com",
    label: "restocks.com",
  },
  {
    value: "stockx.com",
    label: "stockx.com",
  },
];

export const MapOptions = [
  {
    value: "respected",
    label: "Respected",
  },
  {
    value: "infringed",
    label: "Infringed",
  },
];

export const StatusOptions = [
  {
    value: "enabled",
    label: "Enabled",
  },
  {
    value: "disabled",
    label: "Disabled",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "scraping failed",
    label: "Scraping Failed",
  },
  {
    value: "not found",
    label: "Not Found",
  },
  {
    value: "missing price",
    label: "Missing Price",
  },
];

export const RepricingMassiveAction = [
  {
    value: "reprice now",
    label: "Reprice Now",
  },
];
export const RepricingProducts = [
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "Enabled",
  },
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "In Progress",
  },
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "Disabled",
  },
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "Executed",
  },
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "In Progress",
  },
];
export const RepricingHistoyProducts = [
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "Enabled",
  },
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "Running",
  },
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "Disabled",
  },
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "Executed",
  },
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "Running",
  },
];

export const UnitOptions = [
  {
    value: "$",
    label: "$",
  },
  {
    value: "%",
    label: "%",
  },
];

export const ComparsionOptions = [
  {
    value: "below",
    label: "Below",
  },
  {
    value: "above",
    label: "Above",
  },
  {
    value: "equal",
    label: "Equal",
  },
];

export const CompetitorOptions = [
  {
    value: "cheapest competitor",
    label: "Cheapest Competitor",
  },
  {
    value: "highest competitor",
    label: "Highest Competitor",
  },
];

export const OperatorOptions = [
  {
    value: "plus",
    label: "Plus",
  },
  {
    value: "minus",
    label: "Minus",
  },
  {
    value: "multiplied",
    label: "Multiplied",
  },
  {
    value: "divided",
    label: "Divided",
  },
];

export const Step4ConditionOptions = [
  {
    value: "no condition",
    label: "No Condition",
  },
  {
    value: "new price",
    label: "New Price",
  },
];

export const Step4ComparisonOptions = [
  {
    label: "Lower",
    value: "lower",
  },
  {
    label: "Higher",
    value: "higher",
  },
  {
    label: "Lower/Higher",
    value: "lower/higher",
  },
];

export const Step4PriceOptions = [
  {
    label: "My Price",
    value: "my price",
  },
  {
    label: "Min Price",
    value: "min price",
  },
  {
    label: "Max Price",
    value: "max price",
  },
  {
    label: "Min/Max Price",
    value: "min/max price",
  },
  {
    label: "My Cost",
    value: "my cost",
  },
];

export const ValuesSettingCardData = [
  {
    icon: Icons.manuallyAssign,
    title: "Manually Assign",
    des: "Manually specify your Min/Max prices for all items assigned this repricing rule via products page or using the bulk upload option in the import page",
  },
  {
    icon: Icons.growth,
    title: "Markup",
    des: "Automatically specify your Min/Max prices for all items assigned this repricing rule using a Markup fixed or percentage value based on your product Cost",
  },
  {
    icon: Icons.circleDollar,
    title: "Item Cost",
    des: "Automatically specify your Min/Max prices for all items assigned this repricing rule based on percentage of the individual cost of the item",
  },
  {
    icon: Icons.circleDollar,
    title: "Item Price",
    des: "Automatically specify your Min/Max prices for all items assigned this repricing rule based on percentage of the individual price of the item",
  },
  {
    icon: Icons.handCoin,
    title: "MAP",
    des: "Automatically specify your Min/Max prices for all items assigned this repricing rule based on the MAP you assigned to your product",
  },
];

export const RepricingMethodOptions = [
  {
    label:
      "Semi-Automatic - 123 Scraper will suggest you the new price which you could apply with just a click.",
    value: "Semi-Automatic",
  },
  {
    label:
      "Autopilot (Soon Available for ) - Price will be automatically changed by 123 Scraper",
    value: "Autopilot",
  },
];

export const TimeOptions = [
  {
    value: "5:00 AM",
    label: "5:00 AM",
  },
  {
    value: "7:00 AM",
    label: "7:00 AM",
  },
  {
    value: "12:00 pm",
    label: "12:00 pm",
  },
];

export const ExportTypeOptions = ["CSV", "Excel", "XML", "JSON"];
export const fieldOptions = [
  {
    value: "Choose an field",
    label: "Choose an field",
  },
  {
    value: "Price",
    label: "Price",
  },
  {
    value: "Cost",
    label: "Cost",
  },
  {
    value: "MAP",
    label: "MAP",
  },
  {
    value: "Brand",
    label: "Brand",
  },
  {
    value: "Min price",
    label: "Min price",
  },
  {
    value: "Max price",
    label: "Max price",
  },
  {
    value: "SKU",
    label: "SKU",
  },
  {
    value: "GTIN/EAN/ASIN",
    label: "GTIN/EAN/ASIN",
  },
  {
    value: "Name",
    label: "Name",
  },
];
export const operatorOptions = [
  {
    value: "Choose an operator",
    label: "Choose an operator",
  },
  {
    value: "Equal",
    label: "Equal",
  },
  {
    value: "Not EqualNot Equal",
    label: "Not Equal",
  },
  {
    value: "In",
    label: "In",
  },
  {
    value: "Not In",
    label: "Not In",
  },
  {
    value: "Less",
    label: "Less",
  },
  {
    value: "Less or Equal",
    label: "Less or Equal",
  },
  {
    value: "Greater",
    label: "Greater",
  },
  {
    value: "Greater or Equal",
    label: "Greater or Equal",
  },
  {
    value: "Contains",
    label: "Contains",
  },
  {
    value: "Not Contains",
    label: "Not Contains",
  },
];
