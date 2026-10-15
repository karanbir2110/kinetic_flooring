import { Section, Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * "The Minds Behind KARM" — sits right after "What KARM Offers".
 * Edit the text below to change the content.
 */
const team = {
  eyebrow: "The Minds Behind KARM",
  // small one-line intro shown just above the big question
  intro: "We are final-year engineering students who asked one simple question:",
  statement: "What if the footsteps around us could power the future?",
  paragraphs: [
    "What began as curiosity became a mission to challenge conventional thinking and turn an overlooked possibility into reality.",
    "Driven by engineering, experimentation, and a willingness to rethink the ordinary, we are committed to building solutions that move beyond ideas and create real-world value.",
  ],
  closing:
    "KARM is our first step towards a bigger ambition: turning overlooked possibilities into meaningful impact.",
};

export default function Team() {
  return (
    <Section id="team" hairline={false}>
      <Reveal className="flex flex-col items-center text-center">
        <Eyebrow dashRight>{team.eyebrow}</Eyebrow>
        <p className="mt-6 text-base text-paper-dim md:whitespace-nowrap md:text-lg lg:text-xl">{team.intro}</p>
        <h2 className="font-display mt-3 max-w-4xl text-balance text-3xl/[1.35] font-semibold tracking-tightest sm:text-4xl/[1.35] lg:text-[2.6rem]/[1.35]">
          {team.statement}
        </h2>
      </Reveal>

      <div className="mx-auto mt-8 max-w-3xl text-center">
        {team.paragraphs.map((text, i) => (
          <Reveal key={i} delay={i * 90}>
            <p className="mt-6 text-lg leading-relaxed text-paper-dim sm:text-xl">{text}</p>
          </Reveal>
        ))}

        <Reveal delay={200}>
          <div className="mt-12 rounded-2xl border border-hairline bg-ink-900 px-8 py-9">
            <p className="font-display text-2xl/[1.4] font-semibold tracking-tight text-electric-bright sm:text-3xl/[1.4]">
              {team.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}