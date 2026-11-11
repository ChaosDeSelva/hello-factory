import { createServer } from "node:http";

/** The visit counter: `POST /visits` adds one and `GET /visits` reads `{ "count": n }`. */
export function visits() {
  let count = 0;
  return createServer((req, res) => {
    const url = new URL(req.url ?? "/", "http://localhost");
    if (url.pathname === "/visits" && req.method === "POST") {
      count += 1;
      return json(res, 200, { count });
    }
    if (url.pathname === "/visits" && req.method === "GET") return json(res, 200, { count });
    if (req.method === "GET" && url.pathname === "/health") return json(res, 200, { ok: true });
    json(res, 404, { error: "not found" });
  });
}

function json(res, status, body) {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(body));
}
