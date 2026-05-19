import Link from "next/link";
import { Wrench } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { socials } from "@/constant";

const linkedin = socials.find((social) => social.name === "LinkedIn");

export default function Home() {
  const LinkedInIcon = linkedin?.Icon;

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent bg-secondary text-accent">
        <Wrench aria-hidden="true" size={30} />
      </div>

      <p className="mt-8 text-sm font-semibold uppercase text-accent">
        Portfolio refresh in progress
      </p>
      <h1 className="mt-4 bg-gradient-to-bl from-secondary-foreground to-accent bg-clip-text text-4xl font-semibold text-transparent md:text-6xl">
        Shidqi Amirul Haq
      </h1>
      <p className="mt-5 max-w-xl text-lg text-zinc-400 md:text-xl">
        Site under construction. I am rebuilding this portfolio and will be
        back online soon.
      </p>

      {linkedin && LinkedInIcon ? (
        <Link
          href={linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Shidqi Amirul Haq on LinkedIn"
          className={buttonVariants({
            className: "mt-8 gap-x-2",
            variant: "secondary",
          })}
        >
          <LinkedInIcon aria-hidden="true" size={20} />
          LinkedIn
        </Link>
      ) : null}
    </section>
  );
}
