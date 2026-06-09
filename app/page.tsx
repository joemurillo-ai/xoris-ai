import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Factory,
  GitBranch,
  Handshake,
  HardHat,
  Landmark,
  Orbit,
  ShieldCheck,
  Sparkles,
  Target,
  TriangleAlert,
  Truck,
  UsersRound,
  Waypoints
} from "lucide-react";

const industries = [
  { name: "Contractors", icon: HardHat, detail: "Bid cycles, retainage, payroll pressure, equipment needs, bonding, and commercial coverage decisions." },
  { name: "Building Material Suppliers", icon: Building2, detail: "Inventory turns, receivable timing, dealer relationships, customer concentration, and fleet exposure." },
  { name: "Manufacturers", icon: Factory, detail: "Equipment investment, labor capacity, production volatility, vendor terms, and working capital timing." },
  { name: "Distributors", icon: Truck, detail: "Route density, fleet risk, margin pressure, receivables, and referral-led expansion across markets." }
];

const operatorTrust = [
  { label: "Construction", icon: HardHat },
  { label: "Building Materials", icon: Building2 },
  { label: "Manufacturing", icon: Factory },
  { label: "Distribution", icon: Truck }
];

const capitalSolutions = [
  "Working capital",
  "Equipment financing",
  "Invoice financing"
];

const whyXoris = [
  {
    title: "Capital with operating context",
    copy: "XORIS evaluates receivables, contracts, equipment, seasonality, and margin pressure before matching the right capital path."
  },
  {
    title: "Risk and insurance as growth infrastructure",
    copy: "Commercial insurance review, fleet safety, loss control, and risk management become part of the growth plan, not a separate annual chore."
  },
  {
    title: "Relationship intelligence at the center",
    copy: "Referral partners, lenders, insurers, vendors, and customers are mapped into a living network that reveals timing, trust, and opportunity."
  },
  {
    title: "Intelligence-led, human-accountable",
    copy: "The system surfaces signals and next moves while experienced operators keep judgment, relationship quality, and execution in the loop."
  }
];

const intelligenceSignals = [
  "Receivable aging suggests a working capital need within 21 days",
  "Fleet expansion increases insurance review priority",
  "Equipment dealer relationship is producing repeat referral velocity",
  "Key contractor account is warming after dormant activity"
];

const howItWorks = [
  {
    title: "Diagnose capital and risk needs",
    copy: "XORIS reviews working capital pressure, receivables, equipment needs, coverage gaps, fleet exposure, and growth priorities.",
    icon: ClipboardCheck
  },
  {
    title: "Match the right capital and insurance options",
    copy: "We align funding paths, insurance review, risk controls, and advisory next steps to the company’s operating reality.",
    icon: Waypoints
  },
  {
    title: "Track opportunities through the intelligence layer",
    copy: "Relationship signals, referral activity, account health, and opportunity alerts stay visible as the business moves.",
    icon: Orbit
  }
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3" aria-label="XORIS home">
      <span className="relative flex h-9 w-9 items-center justify-center drop-shadow-[0_0_6px_rgba(21,215,223,0.16)]">
        <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
          <path d="M6 7H12.5L42 41H35.5L6 7Z" fill="#14D6DC" />
          <path d="M42 7H35.5L6 41H12.5L42 7Z" fill="#14D6DC" />
          <path d="M18 7H23.5L31 15.75H25.5L18 7Z" fill="#82F1F0" opacity="0.62" />
          <path d="M30 41H24.5L17 32.25H22.5L30 41Z" fill="#82F1F0" opacity="0.62" />
          <path d="M20.5 22.8H27.5L24 27.1L20.5 22.8Z" fill="#03080B" opacity="0.92" />
          <path d="M20.5 25.2H27.5L24 20.9L20.5 25.2Z" fill="#03080B" opacity="0.92" />
        </svg>
      </span>
      <span className="text-xl font-semibold tracking-[0.2em] text-white">XORIS</span>
    </a>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const styles = {
    primary: "bg-xoris-cyan text-ink-950 shadow-glow hover:bg-white",
    secondary: "border border-white/20 bg-white/[0.06] text-white hover:border-xoris-cyan/60 hover:bg-xoris-cyan/10",
    ghost: "text-slate-200 hover:text-white"
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "center"
}: {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase text-xoris-cyan">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{copy}</p>
    </div>
  );
}

function GrowthAssessmentCard() {
  const assessmentItems = [
    { title: "Capital Readiness", status: "Strong", note: "Access to capital and ability to deploy." },
    { title: "Risk Position", status: "Review Recommended", note: "Insurance, compliance, and exposure." },
    { title: "Growth Potential", status: "Expansion Identified", note: "Market, revenue, and operating capacity." },
    { title: "Network Strength", status: "Strong", note: "Partner depth and strategic connectivity." }
  ];

  const findings = [
    "Working capital timing should be reviewed",
    "Equipment financing path is worth evaluating",
    "Strategic referral channel identified"
  ];

  const reviews = [
    "Insurance program review recommended",
    "Fleet review recommended"
  ];

  return (
    <div className="glass-panel relative overflow-hidden rounded-lg p-6 shadow-panel xl:p-7">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-xoris-cyan/70 to-transparent" />
      <div className="relative">
        <div className="border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">XORIS Growth Assessment</p>
            <p className="mt-4 text-sm font-semibold text-xoris-cyan">Strategic review for commercial operators</p>
            <p className="mt-2 max-w-md text-xs leading-5 text-slate-400">
              A capital, risk, and relationship review designed to identify growth opportunities before financing decisions are made.
            </p>
          </div>
        </div>

        <div className="mt-5 divide-y divide-white/10 rounded-md border border-white/10 bg-black/25">
          {assessmentItems.map(({ title, status, note }) => (
            <div key={title} className="grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center xl:p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">{title}™</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{note}</p>
              </div>
              <div className="sm:min-w-40 sm:text-right">
                <p className="text-sm font-semibold text-xoris-cyan">{status}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-md border border-white/10 bg-black/25 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-xoris-cyan">Strategic Findings</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="space-y-2">
              {findings.map((finding) => (
                <div key={finding} className="flex gap-3 text-xs leading-5 text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-xoris-cyan" aria-hidden="true" />
                  <span>{finding}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 md:border-l md:border-white/10 md:pl-4">
              {reviews.map((review) => (
                <div key={review} className="flex gap-3 text-xs leading-5 text-slate-200">
                  <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-xoris-cyan" aria-hidden="true" />
                  <span>{review}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-md border border-xoris-cyan/20 bg-xoris-cyan/[0.08] p-4">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Recommended Next Step</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">Review Capital + Risk Strategy</p>
            </div>
            <ButtonLink href="#assessment">Schedule Strategy Call</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssessmentLeadCapture() {
  return (
    <section id="assessment" className="relative border-y border-white/10 bg-ink-900 px-5 py-8 lg:px-8">
      <div className="absolute inset-0 bg-radial-signal opacity-60" />
      <form action="mailto:hello@xoris.ai" method="post" encType="text/plain" className="glass-panel relative mx-auto grid max-w-[1480px] gap-6 rounded-lg p-5 lg:grid-cols-[0.9fr_2.1fr_auto] lg:items-end">
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-white">Get Your XORIS <span className="text-xoris-cyan">Growth Assessment</span></h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Start a strategic review across capital access, risk position, growth potential, and relationship advantage.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Company Name</span>
            <input name="company" placeholder="Your Company" className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-ink-950/80 px-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-xoris-cyan" />
          </label>
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Website</span>
            <input name="website" placeholder="yourcompany.com" className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-ink-950/80 px-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-xoris-cyan" />
          </label>
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Industry</span>
            <select name="industry" className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-ink-950/80 px-4 text-sm text-white outline-none focus:border-xoris-cyan">
              <option>Select Industry</option>
              <option>Construction</option>
              <option>Building Materials</option>
              <option>Manufacturing</option>
              <option>Distribution</option>
            </select>
          </label>
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Revenue Range</span>
            <select name="revenue" className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-ink-950/80 px-4 text-sm text-white outline-none focus:border-xoris-cyan">
              <option>Select Range</option>
              <option>Under $5M</option>
              <option>$5M - $25M</option>
              <option>$25M - $75M</option>
              <option>$75M+</option>
            </select>
          </label>
        </div>
        <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-xoris-cyan px-6 text-sm font-semibold text-ink-950 shadow-glow transition hover:bg-white">
          Request Assessment
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-center text-xs text-slate-500 lg:col-start-2">
          Takes 60 seconds. No credit impact. Confidential review.
        </p>
      </form>
    </section>
  );
}

function SolutionCard({
  icon: Icon,
  title,
  copy,
  items,
  visual
}: {
  icon: typeof Banknote;
  title: string;
  copy: string;
  items: string[];
  visual: "capital" | "risk" | "intelligence";
}) {
  const visualPosition = {
    capital: "object-[68%_50%]",
    risk: "object-[38%_48%]",
    intelligence: "object-[78%_44%]"
  };

  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-xoris-cyan/35 hover:bg-white/[0.055]">
      <div className="relative h-44 overflow-hidden border-b border-white/10">
        <Image
          src="/xoris-hero-cityscape.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className={`object-cover opacity-75 transition duration-500 group-hover:scale-105 ${visualPosition[visual]}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-md border border-xoris-cyan/25 bg-ink-950/75 backdrop-blur">
          <Icon className="h-6 w-6 text-xoris-cyan" aria-hidden="true" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 leading-7 text-slate-300">{copy}</p>
        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-xoris-cyan" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-ink-950 text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink-950/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-4 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-slate-300 xl:flex" aria-label="Primary navigation">
            <a href="#platform" className="hover:text-white">Capital</a>
            <a href="#platform" className="hover:text-white">Risk</a>
            <a href="#relationship" className="hover:text-white">Intelligence</a>
            <a href="#operators" className="hover:text-white">Industries</a>
            <a href="#why" className="hover:text-white">Company</a>
          </nav>
          <ButtonLink href="#call" variant="secondary">Book a Strategy Call</ButtonLink>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/xoris-bridge-hero.png"
            alt="Cinematic bridge and commercial city skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.72] contrast-[1.08] saturate-[0.92]"
          />
          <div className="absolute inset-0 flex items-center justify-end pr-[8vw]">
            <span className="select-none text-[42vw] font-semibold leading-none text-xoris-cyan/[0.05]">X</span>
          </div>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-ink-950/78 to-ink-950/34" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/22 to-ink-950/78" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_39%,rgba(21,215,223,0.1),transparent_24%)]" />
          <div className="absolute inset-0 hero-grid opacity-25" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-[1600px] items-center gap-10 px-5 pb-40 pt-8 lg:grid-cols-[0.52fr_0.48fr] lg:px-8 xl:gap-12 2xl:gap-16">
          <div className="max-w-[780px]">
            <p className="mb-5 inline-flex w-fit rounded-md border border-xoris-cyan/25 bg-xoris-cyan/10 px-3 py-2 text-xs font-semibold uppercase text-xoris-cyan">
              Capital. Risk. Intelligence.
            </p>
            <h1 className="max-w-[850px] text-[3.55rem] font-semibold leading-[1.01] text-white md:text-[4.35rem] xl:text-[4.85rem] 2xl:text-[5.45rem]">
              We fuel growth. You <span className="text-xoris-cyan">build</span> the future.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              XORIS combines capital access, risk intelligence, and relationship advantage to help commercial operators grow with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#assessment">Book a Strategy Call</ButtonLink>
              <ButtonLink href="#process" variant="secondary">See How It Works</ButtonLink>
            </div>
            <div className="mt-9 max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-xoris-cyan">
                Commercial Capital + Risk Expertise
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                Focused on commercial operators seeking growth capital, risk clarity, and strategic advantage.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {operatorTrust.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 rounded-md border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
                    <Icon className="h-5 w-5 text-xoris-cyan" aria-hidden="true" />
                    <span className="text-sm text-slate-200">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative lg:flex lg:justify-end">
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-xoris-cyan/[0.08] blur-3xl" />
            <div className="w-full max-w-[700px]">
              <GrowthAssessmentCard />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-y border-white/10 bg-ink-950/76 backdrop-blur-md">
          <div className="mx-auto max-w-[1540px] px-5 py-6 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase text-xoris-cyan">
              Built for the industries that move the economy
            </p>
            <div className="mt-5 grid gap-5 text-sm text-slate-200 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Construction", HardHat],
                ["Building Materials", Building2],
                ["Manufacturing", Factory],
                ["Distribution", Truck]
              ].map(([label, Icon]) => {
                const IndustryIcon = Icon as typeof HardHat;
                return (
                  <div key={label as string} className="flex items-center justify-center gap-3">
                    <IndustryIcon className="h-6 w-6 text-slate-300" aria-hidden="true" />
                    <span>{label as string}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <AssessmentLeadCapture />

      <section id="platform" className="relative border-y border-white/10 bg-ink-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-radial-signal opacity-80" />
        <div className="relative mx-auto max-w-[1480px] px-5 lg:px-8">
          <SectionHeader
            eyebrow="Operating system"
            title="Capital, insurance, and intelligence in one command layer."
            copy="XORIS connects growth capital, commercial risk, and relationship data so business owners can move with the discipline of an enterprise finance team."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <SolutionCard
              icon={CircleDollarSign}
              title="Capital Solutions"
              copy="Find practical capital paths without losing sight of cash flow, receivables, equipment, and seasonality."
              items={capitalSolutions}
              visual="capital"
            />
            <SolutionCard
              icon={ShieldCheck}
              title="Risk & Insurance"
              copy="Reduce exposure before it becomes a constraint on jobs, fleets, contracts, or growth."
              items={["Commercial insurance review", "Fleet safety", "Loss control"]}
              visual="risk"
            />
            <SolutionCard
              icon={Sparkles}
              title="Intelligence Layer"
              copy="Turn relationship, referral, and account signals into visible growth opportunities."
              items={["Relationship intelligence", "Referral tracking", "Opportunity monitoring"]}
              visual="intelligence"
            />
          </div>
        </div>
      </section>

      <section id="operators" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-8">
          <SectionHeader
            eyebrow="Built for operators"
            title="Designed for the people carrying payroll, risk, inventory, and growth."
            copy="XORIS speaks the language of commercial operators: bid cycles, receivables, fleet exposure, equipment needs, supplier terms, and referral-driven expansion."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industries.map(({ name, icon: Icon, detail }) => (
              <article key={name} className="rounded-lg border border-white/10 bg-white/[0.032] p-7 transition hover:border-xoris-cyan/30 hover:bg-white/[0.045]">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-xoris-cyan/20 bg-black/25">
                  <Icon className="h-6 w-6 text-xoris-cyan" aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">{name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{detail}</p>
                <div className="mt-8 h-px w-16 bg-xoris-cyan/60" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative border-y border-white/10 bg-ink-900 py-24 md:py-32">
        <div className="absolute inset-0 command-map opacity-25" />
        <div className="relative mx-auto max-w-[1480px] px-5 lg:px-8">
          <SectionHeader
            eyebrow="How XORIS works"
            title="From business pressure to systemized growth."
            copy="XORIS turns capital, risk, and relationship activity into a clear operating sequence so owners know what to review, who to engage, and what to do next."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {howItWorks.map(({ title, copy, icon: Icon }, index) => (
              <article key={title} className="glass-panel rounded-lg p-7">
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-xoris-cyan/12">
                    <Icon className="h-6 w-6 text-xoris-cyan" aria-hidden="true" />
                  </div>
                  <span className="text-sm text-xoris-cyan">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-4 leading-8 text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="relationship" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <SectionHeader
            eyebrow="Relationship intelligence"
            title="Beyond introductions. A relationship intelligence layer."
            copy="XORIS identifies opportunities, referral partners, account movement, and risk signals across the network surrounding your business."
            align="left"
          />
          <div className="glass-panel rounded-lg p-5 md:p-7">
            <div className="grid gap-4 md:grid-cols-2">
              {intelligenceSignals.map((signal, index) => (
                <div key={signal} className="rounded-md border border-white/10 bg-black/25 p-5">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-xoris-cyan/12 text-sm font-semibold text-xoris-cyan">
                    0{index + 1}
                  </div>
                  <p className="leading-7 text-slate-200">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="referrals" className="relative border-y border-white/10 bg-ink-900 py-24 md:py-32">
        <div className="absolute inset-0 command-map opacity-40" />
        <div className="relative mx-auto grid max-w-[1480px] gap-12 px-5 lg:grid-cols-[1.06fr_0.94fr] lg:px-8">
          <div className="glass-panel relative min-h-[440px] overflow-hidden rounded-lg p-6">
            <div className="absolute inset-0 command-map opacity-80" />
            {[
              ["left-[12%] top-[16%]", "CPAs"],
              ["left-[54%] top-[12%]", "Equipment dealers"],
              ["left-[76%] top-[42%]", "Insurance partners"],
              ["left-[24%] top-[62%]", "Builders"],
              ["left-[58%] top-[72%]", "Lenders"]
            ].map(([position, label]) => (
              <div key={label} className={`absolute ${position}`}>
                <div className="rounded-md border border-xoris-cyan/25 bg-ink-950/80 px-4 py-3 text-sm text-white shadow-glow backdrop-blur">
                  {label}
                </div>
              </div>
            ))}
            <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-xoris-cyan to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-md border border-white/10 bg-black/45 p-4 backdrop-blur">
              <p className="text-sm leading-6 text-slate-200">
                Referral network health is scored by trust, responsiveness, conversion velocity, and account fit.
              </p>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Referral network"
              title="Every partner channel becomes a growth asset."
              copy="Track referral sources, follow-up timing, partner performance, and opportunity movement without letting the relationship quality disappear into notes and inboxes."
              align="left"
            />
            <div className="mt-8 grid gap-4">
              {[
                [GitBranch, "Referral source tracking"],
                [Target, "Opportunity routing"],
                [UsersRound, "Partner performance visibility"],
                [Waypoints, "Relationship next-best action"]
              ].map(([Icon, label]) => {
                const ItemIcon = Icon as typeof GitBranch;
                return (
                  <div key={label as string} className="flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.035] p-4">
                    <ItemIcon className="h-5 w-5 text-xoris-cyan" aria-hidden="true" />
                    <span className="text-slate-200">{label as string}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-8">
          <SectionHeader
            eyebrow="Why XORIS"
            title="Built like infrastructure for serious commercial operators."
            copy="A $100B company does not win with scattered forms, generic pitch decks, and disconnected spreadsheets. XORIS is designed as the institutional layer for growth decisions."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {whyXoris.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-7">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm text-xoris-cyan">0{index + 1}</span>
                  <BadgeCheck className="h-6 w-6 text-xoris-cyan" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="call" className="px-5 pb-24 lg:px-8">
        <div className="glass-panel relative mx-auto grid max-w-[1480px] gap-10 overflow-hidden rounded-lg p-6 md:p-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="pointer-events-none absolute inset-0 command-map opacity-20" />
          <div className="relative">
            <p className="mb-4 text-xs font-semibold uppercase text-xoris-cyan">Request Strategic Review</p>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              Discuss capital, risk, and growth strategy.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Share where the business is headed. XORIS will review capital paths, risk priorities, relationship opportunities, and the next decisions worth evaluating.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [Landmark, "Capital readiness"],
                [ShieldCheck, "Risk position"],
                [Handshake, "Network strength"],
                [Orbit, "Growth potential"]
              ].map(([Icon, label]) => {
                const CallIcon = Icon as typeof Landmark;
                return (
                  <div key={label as string} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] p-4">
                    <CallIcon className="h-5 w-5 text-xoris-cyan" aria-hidden="true" />
                    <span className="text-sm text-slate-200">{label as string}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <form action="mailto:hello@xoris.ai" method="post" encType="text/plain" className="relative rounded-lg border border-white/10 bg-black/20 p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm text-slate-300">Name</span>
                <input name="name" className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-ink-950 px-4 text-white outline-none focus:border-xoris-cyan" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">Work email</span>
                <input name="email" type="email" className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-ink-950 px-4 text-white outline-none focus:border-xoris-cyan" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">Company</span>
                <input name="company" className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-ink-950 px-4 text-white outline-none focus:border-xoris-cyan" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">Industry</span>
                <select name="industry" className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-ink-950 px-4 text-white outline-none focus:border-xoris-cyan">
                  {industries.map((industry) => (
                    <option key={industry.name}>{industry.name}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm text-slate-300">Primary review priority</span>
              <textarea name="priority" rows={4} className="mt-2 w-full rounded-md border border-white/10 bg-ink-950 px-4 py-3 text-white outline-none focus:border-xoris-cyan" />
            </label>
            <button type="submit" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-ink-950 transition hover:bg-xoris-cyan">
              Request Strategic Review
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/25 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo />
          <p className="text-sm font-semibold text-slate-300">
            Commercial Growth Infrastructure.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <a href="#platform" className="hover:text-white">Capital</a>
            <a href="#platform" className="hover:text-white">Risk</a>
            <a href="#relationship" className="hover:text-white">Intelligence</a>
            <a href="#operators" className="hover:text-white">Industries</a>
            <a href="#why" className="hover:text-white">Company</a>
            <a href="#call" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
