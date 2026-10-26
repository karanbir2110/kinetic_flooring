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
    <Section id="roadmap" width="wide">
      <SectionHeading
        eyebrow={partner.eyebrow}
        title={partner.title}
        align="center"
        // line spacing for the heading – raise/lower the number to taste
        titleClassName="!leading-[1.25] sm:!leading-[1.5]"
      />

      <div className="relative mt-12 sm:mt-20">
        {/* connecting line: runs from the centre of the 1st marker to the centre of the 3rd
            (top-[24px] = vertical centre of the h-12 markers; gap-12 = 3rem, so a column centre is 16.666% - 1rem) */}
        <span
          className="absolute left-[calc(16.666%-1rem)] right-[calc(16.666%-1rem)] top-[1.5rem] hidden h-px bg-gradient-to-r from-electric via-electric/40 to-energy lg:block"
          aria-hidden
        />
        <ol className="grid gap-10 sm:gap-12 md:grid-cols-3">
          {partner.steps.map((step, i) => (
            <Reveal as="li" key={step.id} delay={i * 100} className="relative">
              {/* marker sits centred above the title; everything in the column is centred */}
              <div className="flex flex-col items-center text-center">
                <span className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border border-electric/50 bg-ink text-electric-bright">
                  <span className="mono text-sm">{step.id}</span>
                </span>
                <h3 className="font-display mt-5 text-[1.375rem] font-semibold tracking-tight sm:mt-6 sm:text-3xl lg:mt-8">
                  {step.title}
                </h3>
              </div>
              <p className="mx-auto mt-3 max-w-md text-center text-base leading-relaxed text-paper-dim sm:mt-4 sm:text-xl">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}