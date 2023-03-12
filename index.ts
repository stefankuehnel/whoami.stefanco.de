import { bold, cyan, green, underline } from "https://deno.land/std@0.178.0/fmt/colors.ts";
import { serve } from "https://deno.land/std@0.178.0/http/server.ts";

import whoami from "https://esm.sh/boxen@7.0.2?deno-std=0.177.0";

const text = `
Stefan Kühnel  /  ${green("stefankuehnel")}

Multi-Disciplinary Developer
Interested in Mathematics
with 7+ Years of Experience

${bold("E-Mail:")} ${underline(cyan("whoami@stefanco.de"))}

${bold("GitHub:")} ${underline(cyan("https://stefanco.de/r/github"))}
${bold("Mastodon:")} ${underline(cyan("https://stefanco.de/r/mastodon"))}
${bold("Keybase:")} ${underline(cyan("https://stefanco.de/r/keybase"))}
${bold("HackerNews:")} ${underline(cyan("https://stefanco.de/r/hackernews"))}

${bold("Nextcloud:")} ${underline(cyan("https://stefanco.de/r/cloud"))}
`;

const requestHandler = (request: Request): Response => {
  if (request.headers.get("Accept")?.includes("text/html")) {
    return Response.redirect("https://stefanco.de");
  }

  return new Response(whoami(text, {
    title: "whoami",
    textAlignment: "center",
    padding: 1,
    margin: 1,
  }));
};

await serve(requestHandler, { port: 8080 });
