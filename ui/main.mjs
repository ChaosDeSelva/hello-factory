import { ui } from "./server.mjs";

const port = Number(process.env.UI_PORT ?? 5100);
ui({
  greeterUrl: process.env.GREETER_URL ?? "http://127.0.0.1:5101",
  visitsUrl: process.env.VISITS_URL ?? "http://127.0.0.1:5102",
}).listen(port, "127.0.0.1", () => console.log(`ui on http://127.0.0.1:${port}`));
