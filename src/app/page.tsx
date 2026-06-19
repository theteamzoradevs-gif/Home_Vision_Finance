import { getLandingPageData } from "@/lib/api/landingData";
import { LandingPage } from "@/features/landing/LandingPage";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function HomePage() {
  const data = await getLandingPageData();
  return <LandingPage data={data} />;
}
