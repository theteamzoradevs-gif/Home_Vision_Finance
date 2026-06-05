import type { ReactNode } from "react";
import { Icons } from "@/components/ui/icons";

export type ServiceItem = {
  title: string;
  description: string;
  icon: ReactNode;
  slug: string;
};

export const LANDING_SERVICES: ServiceItem[] = [
  {
    title: "Home Purchase Loan",
    description:
      "Buy your dream home — flat, villa, or independent house with competitive rates from SBI and leading banks.",
    icon: Icons.home,
    slug: "home-loan",
  },
  {
    title: "Balance Transfer",
    description:
      "Transfer your existing home loan to a lower interest rate and save lakhs over the remaining tenure.",
    icon: Icons.transfer,
    slug: "balance-transfer",
  },
  {
    title: "Loan Against Property",
    description:
      "Unlock the value of your property for business, education, or personal needs at attractive rates.",
    icon: Icons.rupee,
    slug: "loan-against-property",
  },
  {
    title: "Construction Loan",
    description:
      "Build your own home with stage-wise disbursement linked to construction milestones.",
    icon: Icons.building,
    slug: "construction-loan",
  },
  {
    title: "Plot Loan",
    description:
      "Finance a residential plot with flexible repayment options up to 15 years.",
    icon: Icons.doc,
    slug: "plot-loan",
  },
  {
    title: "Top-Up Loan",
    description:
      "Get extra funds on your existing home loan at competitive rates with quick processing.",
    icon: Icons.zap,
    slug: "top-up-loan",
  },
];

export const PAGE_SERVICES: ServiceItem[] = [
  {
    title: "Home Loan",
    description:
      "End-to-end support for fresh home purchases with multi-bank comparison and zero processing fees.",
    icon: Icons.home,
    slug: "home-loan",
  },
  {
    title: "Balance Transfer",
    description:
      "Reduce your EMI burden by shifting to a lower-rate lender with seamless documentation support.",
    icon: Icons.transfer,
    slug: "balance-transfer",
  },
  {
    title: "Loan Against Property",
    description:
      "Leverage residential or commercial property equity for flexible funding at competitive rates.",
    icon: Icons.rupee,
    slug: "loan-against-property",
  },
  {
    title: "Construction Loan",
    description:
      "Structured disbursements aligned to construction stages with expert bank coordination.",
    icon: Icons.building,
    slug: "construction-loan",
  },
  {
    title: "Plot Loan",
    description:
      "Dedicated plot financing with guidance on eligibility, documentation, and lender selection.",
    icon: Icons.doc,
    slug: "plot-loan",
  },
  {
    title: "Business Loan",
    description:
      "Working capital and business expansion loans backed by property or income assessment.",
    icon: Icons.handshake,
    slug: "business-loan",
  },
];
