import { absoluteUrl } from "@/lib/utils";

export const siteConfig = {
  name: "Acme",
  company: "Zhyporium",
  email: "hello@zhyporium.com",
  description: "Acme app with authentication and a member dashboard.",
  links: {
    support: "https://zhyporium.com",
  },
  url: absoluteUrl(""),
};

export type SiteConfig = typeof siteConfig;
