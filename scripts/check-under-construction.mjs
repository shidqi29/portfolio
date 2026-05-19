import { readFileSync } from "node:fs";

const page = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const socials = readFileSync(
  new URL("../src/constant/socials.ts", import.meta.url),
  "utf8",
);

const checks = [
  {
    passed: page.includes("Site under construction"),
    message: "homepage should show the under construction status",
  },
  {
    passed: page.includes("Portfolio refresh in progress"),
    message: "homepage should explain that the portfolio is being refreshed",
  },
  {
    passed: page.includes('social.name === "LinkedIn"'),
    message: "homepage should source the LinkedIn link from the socials constant",
  },
  {
    passed: page.includes("href={linkedin.url}"),
    message: "homepage should use the configured LinkedIn URL",
  },
  {
    passed: socials.includes("https://www.linkedin.com/in/shidqiamirulhaq/"),
    message: "socials should include Shidqi's LinkedIn URL",
  },
];

const failed = checks.filter((check) => !check.passed);

if (failed.length > 0) {
  for (const check of failed) {
    console.error(`FAIL: ${check.message}`);
  }

  process.exit(1);
}

console.log("Under construction page smoke test passed.");
