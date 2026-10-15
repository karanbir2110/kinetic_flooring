import { Section, Eyebrow } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const team = {
  eyebrow: "The Minds Behind KARM",
  intro: "We are final-year engineering students who asked one simple question:",
  statement: "What if the footsteps around us could power the future?",
  paragraphs: [
    "What began as curiosity became a mission to challenge conventional thinking and turn an overlooked possibility into reality. Driven by engineering, experimentation, and a willingness to rethink the ordinary, we are committed to building solutions that move beyond ideas and create real-world value.",
  ],
  closing:
    "KARM is our first step towards a bigger ambition: turning overlooked possibilities into meaningful impact.",
};

export default function Team() {
  return (
    <Section id="team" hairline={false} width="wide">
      <Reveal className="flex flex-col items-center text-center">
        <Eyebrow>{team.eyebrow}</Eyebrow>
        <p className="mt-8 max-w-4xl text-pretty text-xl text-paper-dim sm:text-2xl">
          {team.intro}
        </p>
        <h2 className="font-display mt-6 max-w-5xl text-balance text-4xl font-bold leading-[1.1] tracking-tightest sm:text-5xl lg:text-[3.5rem]">
          {team.statement}
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 max-w-4xl text-center">
        {team.paragraphs.map((text, i) => (
          <Reveal key={i} delay={i * 90}>
            <p className="text-xl leading-relaxed text-paper-dim sm:text-2xl">{text}</p>
          </Reveal>
        ))}

        <Reveal delay={200}>
          <div className="mt-14 rounded-2xl border border-hairline bg-ink-900 px-8 py-10 sm:px-12 sm:py-12">
            <p className="font-display text-2xl/[1.4] font-semibold tracking-tight text-electric-bright sm:text-3xl/[1.4] lg:text-4xl/[1.35]">
              {team.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}