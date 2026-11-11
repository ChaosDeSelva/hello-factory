import { greeter } from "./server.mjs";

const port = Number(process.env.GREETER_PORT ?? 5101);
greeter().listen(port, "127.0.0.1", () => console.log(`greeter on http://127.0.0.1:${port}`));
