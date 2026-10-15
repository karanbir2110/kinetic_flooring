import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * Partnership options — uses the roadmap visual language (connecting line + circular step markers)
 * but with the content from the "Flexible ways to partner" section.
 */
const partner = {
  eyebrow: "Your space. Your campaign. Your way.",
  title:
    "Flexible ways to partner with us—from short-term campaigns to permanent installations.",
  steps: [
    {
      id: "01",
      title: "Rent & Deploy",
      body: "We install, manage, and remove the system for your campaign or event. Pay only for the duration you need, with no long-term commitment.",
    },
    {
      id: "02",
      title: "Subscription",
      body: "Maintain a continuous branded presence with a recurring subscription. We handle maintenance, campaign updates, and refreshes to keep your installation relevant. Ideal for brands and advertisers.",
    },
    {
      id: "03",
      title: "Buy Outright",
      body: "Make a one-time purchase and own the system permanently. Ideal for businesses looking for long-term installations in their own spaces.",
    },
  ],
};

export default function Roadmap() {
  return (
    <Section id="roadmap">
      <SectionHeading eyebrow={partner.eyebrow} title={partner.title} />

      <div className="relative mt-16">
        {/* connecting line */}
        <span
          className="absolute left-0 right-0 top-[18px] hidden h-px bg-gradient-to-r from-electric via-electric/40 to-energy lg:block"
          aria-hidden
        />
        <ol className="grid gap-10 md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
          {partner.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.id}
              delay={i * 100}
              className="relative"
            >
              <div className="flex items-center gap-4 lg:block">
                <span className="relative z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full border border-electric/50 bg-ink text-electric-bright">
                  <span className="mono text-xs">{step.id}</span>
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight lg:mt-6">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-paper-dim lg:pr-6">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}