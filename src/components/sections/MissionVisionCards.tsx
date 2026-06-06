import { cn } from "@/lib/utils";

const MISSION = {
  label: "Our Mission",
  title: "Empowering Homeownership",
  description:
    "To simplify home financing for every Indian family by offering transparent advice, multi-bank comparison, and dedicated support from application to disbursement — without hidden fees.",
};

const VISION = {
  label: "Our Vision",
  title: "India's Most Trusted Loan Partner",
  description:
    "To become the go-to mortgage advisory brand known for integrity, speed, and customer-first service — where every borrower feels confident and informed at every step.",
};

type MissionVisionCardProps = {
  label: string;
  title: string;
  description: string;
  tilt?: "left" | "right";
};

function MissionVisionCard({ label, title, description, tilt = "left" }: MissionVisionCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border border-brand/20 bg-white/70 p-8 shadow-card ring-1 ring-brand/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-brand-pale/40 hover:shadow-card-lg hover:rotate-0",
        tilt === "left" ? "-rotate-1" : "rotate-1"
      )}
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">{label}</p>
      <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
      <p className="mt-4 flex-1 leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

export function MissionVisionCards() {
  return (
    <section className="section-padding section-gradient-light">
      <div className="container-site card-grid-equal gap-8 lg:grid-cols-2 lg:gap-12">
        <MissionVisionCard {...MISSION} tilt="left" />
        <MissionVisionCard {...VISION} tilt="right" />
      </div>
    </section>
  );
}
