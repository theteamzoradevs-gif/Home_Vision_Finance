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
      "Acquire your ideal property with bespoke financing structures and competitive rates from India’s premier financial institutions.",
    icon: Icons.home,
    slug: "home-loan",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    highlights: ["Institutional rate comparison", "Zero institutional processing fees", "End-to-end documentation advisory"],
  },
  {
    title: "Balance Transfer",
    description:
      "Optimize your financial liabilities by seamlessly transitioning your existing portfolio to preferential interest rates.",
    icon: Icons.transfer,
    slug: "balance-transfer",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    highlights: ["Substantial long-term interest savings", "Seamless institutional transition", "Bespoke rate restructuring"],
  },
  {
    title: "Loan Against Property",
    description:
      "Unlock liquidity from your real estate assets to fund enterprise growth, higher education, or strategic investments.",
    icon: Icons.briefcase,
    slug: "loan-against-property",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    highlights: ["Residential & commercial portfolios", "Tailored capital repayment structures", "Expedited eligibility assessment"],
  },
  {
    title: "Construction Loan",
    description:
      "Finance bespoke residential builds with structured disbursements precisely aligned to structural milestones.",
    icon: Icons.building,
    slug: "construction-loan",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    highlights: ["Milestone-linked disbursement tranches", "Dedicated architect & builder liaison", "Phased compliance oversight"],
  },
  {
    title: "Plot Loan",
    description:
      "Secure premier residential land with flexible capital structures and long-term repayment architecture.",
    icon: Icons.doc,
    slug: "plot-loan",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    highlights: ["Premium land acquisition financing", "Extended tenure architectural options", "Comprehensive title-deed advisory"],
  },
  {
    title: "Top-Up Loan",
    description:
      "Access supplemental capital utilizing your existing mortgage equity with expedited institutional processing.",
    icon: Icons.circlePlus,
    slug: "top-up-loan",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    highlights: ["Priority liquidity access", "Preferential interest structures", "Streamlined, minimal documentation"],
  },
];

export const PAGE_SERVICES: ServiceItem[] = [
  {
    title: "Home Loan",
    description:
      "Comprehensive advisory for new property acquisitions, featuring multi-bank optimization and zero processing fees.",
    icon: Icons.home,
    slug: "home-loan",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    highlights: ["Multi-lender rate optimization", "Zero processing charges", "Priority institutional channel access"],
  },
  {
    title: "Balance Transfer",
    description:
      "Mitigate your recurring debt liabilities by transitioning your asset portfolio to premium, lower-yield lenders.",
    icon: Icons.transfer,
    slug: "balance-transfer",
    imageUrl: "/ services_images/BT.jpeg",
    highlights: ["Significant interest yield reduction", "White-glove portfolio transfer", "Bespoke bank negotiation"],
  },
  {
    title: "Loan Against Property",
    description:
      "Leverage the equity of your residential or commercial real estate for highly flexible, low-cost capital distribution.",
    icon: Icons.rupee,
    slug: "loan-against-property",
    imageUrl: "/services_images/LAP.jpeg",
    highlights: ["Unrestricted capital deployment", "Highly competitive asset-backed rates", "Streamlined valuation processing"],
  },
  {
    title: "Construction Loan",
    description:
      "Capital provisioning engineered to flow in tandem with physical project milestones and construction phases.",
    icon: Icons.building,
    slug: "construction-loan",
    imageUrl: "/services_images/CL.jpeg",
    highlights: ["Tranche-based milestone capital", "Developer & contractor coordination", "Rigorous stage-gate compliance"],
  },
  {
    title: "Plot Loan",
    description:
      "Bespoke financing models designed specifically for land acquisition, complete with thorough legal vetting guidance.",
    icon: Icons.doc,
    slug: "plot-loan",
    imageUrl: "/services_images/PL.jpeg",
    highlights: ["Exclusive land procurement capital", "Tailored amortization structures", "Regulatory & paperwork advisory"],
  },
  {
    title: "Business Loan",
    description:
      "High-value working capital and strategic corporate expansion funding backed by robust financial profiling.",
    icon: Icons.handshake,
    slug: "business-loan",
    imageUrl: "/services_images/BL.jpeg",
    highlights: ["Strategic working capital reserves", "Asset-backed corporate structures", "Connoisseur-level financial underwriting"],
  },
];