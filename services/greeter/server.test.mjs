import assert from "node:assert/strict";
import { test } from "node:test";
import { greeter } from "./server.mjs";
import { listen } from "../../test-helpers.mjs";

test("greets by name", async (t) => {
  const base = await listen(t, greeter());
  const res = await fetch(`${base}/greet?name=Ada`);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { message: "Hello, Ada!" });
});

test("answers health and 404", async (t) => {
  const base = await listen(t, greeter());
  assert.deepEqual(await (await fetch(`${base}/health`)).json(), { ok: true });
  assert.equal((await fetch(`${base}/nope`)).status, 404);
});
