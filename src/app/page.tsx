import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socials } from "@/constant/socials";

export default function Home() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-lg flex-col items-center justify-center">
      <div className="flex w-full flex-col gap-y-1 text-4xl font-semibold md:text-5xl">
        <h1>Hello, I&apos;m Shidqi</h1>
        <span className="from-secondary-foreground to-accent bg-gradient-to-bl bg-clip-text text-transparent">
          Front-End Developer.
        </span>
      </div>
      <div className="mt-5">
        <p className="text-justify text-lg text-zinc-400">
          Specializing in crafting responsive and engaging user interfaces using
          ReactJS. Enthusiastic about learning new technologies and committed to
          delivering an outstanding user experience.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex w-full flex-wrap gap-x-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tooltip>
              <TooltipTrigger>
                <social.Icon
                  size={28}
                  className="hover:text-accent transition-colors"
                />
              </TooltipTrigger>
              <TooltipContent>
                <span>{social.name}</span>
              </TooltipContent>
            </Tooltip>
          </a>
        ))}
      </div>
    </div>
  );
}
