import assert from "node:assert/strict";
import { test } from "node:test";
import { greeter } from "../services/greeter/server.mjs";
import { visits } from "../services/visits/server.mjs";
import { listen } from "../test-helpers.mjs";
import { ui } from "./server.mjs";

test("serves the page and forwards to both services", async (t) => {
  const greeterUrl = await listen(t, greeter());
  const visitsUrl = await listen(t, visits());
  const base = await listen(t, ui({ greeterUrl, visitsUrl }));
  const page = await fetch(`${base}/`);
  assert.match(await page.text(), /Hello Factory/);
  assert.deepEqual(await (await fetch(`${base}/api/greeter/greet?name=Ada`)).json(), {
    message: "Hello, Ada!",
  });
  assert.deepEqual(await (await fetch(`${base}/api/visits/visits`, { method: "POST" })).json(), {
    count: 1,
  });
});

test("reports an unreachable service as 502", async (t) => {
  const base = await listen(t, ui({ greeterUrl: "http://127.0.0.1:9", visitsUrl: "http://127.0.0.1:9" }));
  assert.equal((await fetch(`${base}/api/greeter/greet?name=x`)).status, 502);
});
