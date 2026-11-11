import { readFile } from "node:fs/promises";
import { createServer } from "node:http";

const page = new URL("./public/index.html", import.meta.url);

/** Serves the page and forwards `/api/<service>/...` to the services by their base URLs. */
export function ui({ greeterUrl, visitsUrl }) {
  const upstream = { greeter: greeterUrl, visits: visitsUrl };
  return createServer(async (req, res) => {
    const url = new URL(req.url ?? "/", "http://localhost");
    if (req.method === "GET" && url.pathname === "/") {
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      return res.end(await readFile(page));
    }
    const match = /^\/api\/(greeter|visits)(\/.*)$/.exec(url.pathname);
    if (match) {
      const target = `${upstream[match[1]]}${match[2]}${url.search}`;
      try {
        const answer = await fetch(target, { method: req.method });
        res.writeHead(answer.status, { "content-type": "application/json" });
        return res.end(await answer.text());
      } catch {
        res.writeHead(502, { "content-type": "application/json" });
        return res.end(JSON.stringify({ error: `${match[1]} is unreachable` }));
      }
    }
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "not found" }));
  });
}
