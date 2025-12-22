"use client";

import * as Icons from "@/svg/Icons";

export const LeftNavigationData = [
  {
    type: "account",
    options: [
      {
        icon: Icons.dashboard,
        path: "/dashboard/overview",
        parentPath: "/dashboard",
        value: "Dashboard",
      },
      {
        icon: Icons.competitors,
        path: "/competitors/competitors-overview",
        parentPath: "/competitors",
        value: "Competitors",
      },
      {
        icon: Icons.repricing,
        path: "/repricing/my-repricing-rules",
        parentPath: "/repricing",
        value: "Repricing",
      },
      {
        icon: Icons.report,
        path: "/reports",
        parentPath: "/reports",
        value: "Report",
      },
    ],
  },
  {
    type: "product",
    options: [
      {
        icon: Icons.addMore,
        path: "/add-new",
        parentPath: "/add-new",
        value: "Add New",
      },
      {
        icon: Icons.catalog,
        path: "/my-catalog/product-catalog",
        parentPath: "/my-catalog",
        value: "My Catalog",
      },
      {
        icon: Icons.alert,
        path: "/alert/alert-rule",
        parentPath: "/alert",
        value: "Alert",
      },
      {
        icon: Icons.autoImport,
        path: "#",
        value: "Auto Import",
      },
      {
        icon: Icons.autoUpdate,
        path: "#",
        value: "Auto Update",
      },
    ],
  },
  {
    type: "Profile",
    options: [
      {
        icon: Icons.apps,
        path: "/apps",
        value: "Apps",
      },
      {
        icon: Icons.setting,
        path: "/settings",
        value: "Settings",
        parentPath: "/settings",
      },
      {
        icon: Icons.manageProfile,
        path: "/manage-profile/update-profile",
        parentPath: "/manage-profile",
        value: "Manage Profile",
      },
      {
        icon: Icons.payement,
        path: "/payments/billing",
        parentPath: "/payments",
        value: "Payments",
      },
      {
        icon: Icons.helpCenter,
        path: "/help-center",
        value: "Help Center",
      },
      {
        icon: Icons.feature,
        path: "/suggest-a-feature/roadmap",
        parentPath: "/suggest-a-feature",
        value: "Suggest a Feature",
      },
    ],
  },
  {
    options: [
      {
        icon: Icons.logout,
        path: "/log-out",
        value: "Log Out",
      },
    ],
  },
];

export const AdminLeftNavigationData = [
  {
    type: "Profile",
    options: [
      {
        icon: Icons.manageProfile,
        path: "#",
        value: "Manage Profile",
      },
      {
        icon: Icons.setting,
        path: "#",
        value: "Settings",
      },
      {
        icon: Icons.feature,
        path: "#",
        value: "Suggest a Feature",
      },
      {
        icon: Icons.helpCenter,
        path: "#",
        value: "Help Center",
      },
    ],
  },
  {
    type: "Admin",
    options: [
      {
        icon: Icons.manageUser,
        path: "/admin/manage-user",
        parentPath: "/admin",
        value: "Manage Users",
      },
      {
        icon: Icons.apps,
        path: "#",
        value: "Apps",
      },
      // {
      //   icon: Icons.payement,
      //   path: "/admin/payments",
      //   value: "Payments",
      // },
    ],
  },
  {
    options: [
      {
        icon: Icons.logout,
        path: "/log-out",
        value: "Log Out",
      },
    ],
  },
];

export const OwnerLeftNavigationData = [
  {
    type: "Profile",
    options: [
      {
        icon: Icons.manageProfile,
        path: "#",
        value: "Manage Profile",
      },
      {
        icon: Icons.setting,
        path: "#",
        value: "Settings",
      },
      {
        icon: Icons.feature,
        path: "#",
        value: "Suggest a Feature",
      },
      {
        icon: Icons.helpCenter,
        path: "#",
        value: "Help Center",
      },
    ],
  },
  {
    type: "Admin",
    options: [
      {
        icon: Icons.manageUser,
        path: "/owner/manage-user",
        parentPath: "/owner",
        value: "Manage Users",
      },
      {
        icon: Icons.apps,
        path: "#",
        value: "Apps",
      },
      {
        icon: Icons.payement,
        path: "#",
        value: "Payments",
      },
    ],
  },
  {
    options: [
      {
        icon: Icons.logout,
        path: "/log-out",
        value: "Log Out",
      },
    ],
  },
];
