import type { ReactNode } from "react";
import { Icons } from "@/components/ui/icons";

export type ServiceItem = {
  title: string;
  description: string;
  icon: ReactNode;
  slug: string;
  imageUrl: string;
  highlights?: string[];
};

export const LANDING_SERVICES: ServiceItem[] = [
  {
    title: "Home Purchase Loan",
    description:
      "Buy your dream home — flat, villa, or independent house with competitive rates from SBI and leading banks.",
    icon: Icons.home,
    slug: "home-loan",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    highlights: ["Multi-bank rate comparison", "₹0 processing fees", "End-to-end documentation support"],
  },
  {
    title: "Balance Transfer",
    description:
      "Transfer your existing home loan to a lower interest rate and save lakhs over the remaining tenure.",
    icon: Icons.transfer,
    slug: "balance-transfer",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    highlights: ["Lower EMI savings", "Seamless lender switch", "Expert negotiation support"],
  },
  {
    title: "Loan Against Property",
    description:
      "Unlock the value of your property for business, education, or personal needs at attractive rates.",
    icon: Icons.rupee,
    slug: "loan-against-property",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    highlights: ["Residential & commercial", "Flexible tenure", "Quick eligibility check"],
  },
  {
    title: "Construction Loan",
    description:
      "Build your own home with stage-wise disbursement linked to construction milestones.",
    icon: Icons.building,
    slug: "construction-loan",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    highlights: ["Milestone-based disbursement", "Builder coordination", "Stage-wise approvals"],
  },
  {
    title: "Plot Loan",
    description:
      "Finance a residential plot with flexible repayment options up to 15 years.",
    icon: Icons.doc,
    slug: "plot-loan",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    highlights: ["Residential plot financing", "Up to 15-year tenure", "Lender selection guidance"],
  },
  {
    title: "Top-Up Loan",
    description:
      "Get extra funds on your existing home loan at competitive rates with quick processing.",
    icon: Icons.zap,
    slug: "top-up-loan",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    highlights: ["Quick processing", "Competitive rates", "Minimal documentation"],
  },
];

export const PAGE_SERVICES: ServiceItem[] = [
  {
    title: "Home Loan",
    description:
      "End-to-end support for fresh home purchases with multi-bank comparison and zero processing fees.",
    icon: Icons.home,
    slug: "home-loan",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    highlights: ["Multi-bank rate comparison", "₹0 processing fees", "Priority SBI channel support"],
  },
  {
    title: "Balance Transfer",
    description:
      "Reduce your EMI burden by shifting to a lower-rate lender with seamless documentation support.",
    icon: Icons.transfer,
    slug: "balance-transfer",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    highlights: ["Save lakhs on interest", "Hassle-free transfer", "Expert lender negotiation"],
  },
  {
    title: "Loan Against Property",
    description:
      "Leverage residential or commercial property equity for flexible funding at competitive rates.",
    icon: Icons.rupee,
    slug: "loan-against-property",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    highlights: ["Flexible fund usage", "Attractive interest rates", "Quick eligibility assessment"],
  },
  {
    title: "Construction Loan",
    description:
      "Structured disbursements aligned to construction stages with expert bank coordination.",
    icon: Icons.building,
    slug: "construction-loan",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    highlights: ["Stage-wise disbursement", "Builder liaison support", "Milestone tracking"],
  },
  {
    title: "Plot Loan",
    description:
      "Dedicated plot financing with guidance on eligibility, documentation, and lender selection.",
    icon: Icons.doc,
    slug: "plot-loan",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    highlights: ["Residential plot focus", "Flexible repayment", "Documentation guidance"],
  },
  {
    title: "Business Loan",
    description:
      "Working capital and business expansion loans backed by property or income assessment.",
    icon: Icons.handshake,
    slug: "business-loan",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    highlights: ["Working capital support", "Property-backed options", "Fast file processing"],
  },
];
