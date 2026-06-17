import { getLandingPageData } from "@/lib/api/landingData";
import { LandingPage } from "@/features/landing/LandingPage";

export const revalidate = 300;

export default async function HomePage() {
  const data = await getLandingPageData();
  return <LandingPage data={data} />;
}
