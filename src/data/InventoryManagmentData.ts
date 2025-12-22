import * as Icons from "@/svg/Icons";
export const purchasedOrderList = [
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
    status: "Draft",
  },
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "On Hold",
  },
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "Closed",
  },
  {
    date: "12/12/2021",
    id: "PO- 00123456789",
    deliveryDate: "12/12/2021",
    amount: "$100",
    status: "Draft",
  },
];

export const filterOptions = [
  { value: "Select an option", label: "Select an option" },
  {
    value: "In progress",
    label: "In progress",
  },
  {
    value: "Closed",
    label: "Closed",
  },
  {
    value: "Draft",
    label: "Draft",
  },
  { value: "On Hold", label: "On Hold" },
];

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
    icon: Icons.excel,

    type: "Copy Table to Excel",
  },
  {
    icon: Icons.pdf,

    type: "Export as PDF",
  },
];
