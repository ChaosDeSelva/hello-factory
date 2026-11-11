import assert from "node:assert/strict";
import { test } from "node:test";
import { visits } from "./server.mjs";
import { listen } from "../../test-helpers.mjs";

test("counts visits", async (t) => {
  const base = await listen(t, visits());
  assert.deepEqual(await (await fetch(`${base}/visits`)).json(), { count: 0 });
  assert.deepEqual(await (await fetch(`${base}/visits`, { method: "POST" })).json(), { count: 1 });
  assert.deepEqual(await (await fetch(`${base}/visits`, { method: "POST" })).json(), { count: 2 });
  assert.deepEqual(await (await fetch(`${base}/visits`)).json(), { count: 2 });
});
