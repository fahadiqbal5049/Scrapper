/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/overview",
        permanent: true,
      },
      {
        source: "/competitors",
        destination: "/competitors/competitors-overview",
        permanent: true,
      },
      {
        source: "/repricing",
        destination: "/repricing/my-repricing-rules",
        permanent: true,
      },
      {
        source: "/my-catalog",
        destination: "/my-catalog/product-catalog",
        permanent: true,
      },
      {
        source: "/settings",
        destination: "/settings/general",
        permanent: true,
      },
      {
        source: "/alert",
        destination: "/alert/alert-rule",
        permanent: true,
      },
      {
        source: "/payments",
        destination: "/payments/billing",
        permanent: true,
      },
      {
        source: "/manage-profile",
        destination: "/manage-profile/update-profile",
        permanent: true,
      },
      {
        source: "/admin",
        destination: "/admin/manage-user",
        permanent: true,
      },
      {
        source: "/owner",
        destination: "/owner/manage-user",
        permanent: true,
      },
      {
        source: "/suggest-a-feature",
        destination: "/suggest-a-feature/roadmap",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
