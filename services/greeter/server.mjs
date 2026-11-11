import { createServer } from "node:http";

/** The greeter: `GET /greet?name=Ada` answers `{ "message": "Hello, Ada!" }`. */
export function greeter() {
  return createServer((req, res) => {
    const url = new URL(req.url ?? "/", "http://localhost");
    if (req.method === "GET" && url.pathname === "/greet") {
      const name = url.searchParams.get("name");
      return json(res, 200, { message: `Hello, ${name}!` });
    }
    if (req.method === "GET" && url.pathname === "/health") return json(res, 200, { ok: true });
    json(res, 404, { error: "not found" });
  });
}

function json(res, status, body) {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(body));
}
