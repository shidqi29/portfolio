import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skills, socials } from "@/constant";

export default function Home() {
  return (
    <>
      <section className="mx-auto flex min-h-screen w-full max-w-lg snap-start flex-col items-center justify-center">
        <div className="flex w-full flex-col gap-y-1 text-4xl font-semibold md:text-5xl">
          <h1>Hello, I&apos;m Shidqi</h1>
          <span className="bg-gradient-to-bl from-secondary-foreground to-accent bg-clip-text text-transparent">
            Front-End Developer.
          </span>
        </div>
        <div className="mt-5">
          <p className="text-justify text-lg text-zinc-400">
            Specializing in crafting responsive and engaging user interfaces
            using ReactJS. Enthusiastic about learning new technologies and
            committed to delivering an outstanding user experience.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex w-full flex-wrap gap-x-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <Tooltip delayDuration={500}>
                <TooltipTrigger asChild>
                  <social.Icon
                    size={28}
                    className="transition-colors hover:text-accent"
                  />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <span>{social.name}</span>
                </TooltipContent>
              </Tooltip>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto flex min-h-screen max-w-screen-md snap-start flex-col items-center justify-center gap-y-10">
        <div className="flex flex-col">
          <h1 className="bg-gradient-to-bl from-secondary-foreground to-accent bg-clip-text text-2xl font-semibold text-transparent md:text-4xl">
            About Me
          </h1>
          <Separator className="my-2" />
        </div>
        <div className="grid gap-y-4 md:grid-cols-2">
          <Image
            alt="Profile Picture"
            src="/me.png"
            width={260}
            height={260}
            className="m-auto rounded-full bg-gradient-to-t from-secondary-foreground to-accent object-cover"
          />
          <p className="m-auto text-base font-medium md:text-lg">
            <span className="text-3xl">👋</span> I am{" "}
            <span className="bg-gradient-to-bl from-secondary-foreground to-accent bg-clip-text font-bold text-transparent">
              Shidqi Amirul Haq
            </span>
            , a 7th semester student pursuing a degree in informatics
            engineering at Institut Teknologi Garut with a strong foundation in
            HTML, CSS, and JavaScript. Specializing in crafting responsive and
            engaging user interfaces using{" "}
            <span className="bg-gradient-to-bl from-secondary-foreground to-accent bg-clip-text font-bold text-transparent">
              ReactJS
            </span>
            . Enthusiastic about learning new technologies and committed to
            delivering an outstanding user experience.
          </p>
        </div>
      </section>

      <section className="mx-auto flex min-h-screen max-w-screen-md snap-start flex-col items-center justify-center gap-y-10 py-10">
        <div className="flex flex-col">
          <h1 className="bg-gradient-to-bl from-secondary-foreground to-accent bg-clip-text text-2xl font-semibold text-transparent md:text-4xl">
            Skills
          </h1>
          <Separator className="my-2" />
        </div>
        <div>
          <ul className="flex flex-wrap justify-center gap-5">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex rounded-lg border border-secondary bg-primary p-6 transition hover:border-accent hover:text-accent"
                aria-label={skill.name}
              >
                <Tooltip delayDuration={500}>
                  <TooltipTrigger asChild>
                    <div className="flex w-16 flex-col items-center md:font-medium">
                      {skill.icon}
                      {skill.name}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <span>{skill.level}</span>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
