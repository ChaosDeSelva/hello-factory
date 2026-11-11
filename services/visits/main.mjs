import { visits } from "./server.mjs";

const port = Number(process.env.VISITS_PORT ?? 5102);
visits().listen(port, "127.0.0.1", () => console.log(`visits on http://127.0.0.1:${port}`));
