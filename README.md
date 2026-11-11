# Hello Factory

A tiny app used to exercise the software factory end to end: two Node microservices and a web UI, with no dependencies.

| Part | What it does | Default port |
| --- | --- | --- |
| `services/greeter` | `GET /greet?name=Ada` answers `{ "message": "Hello, Ada!" }` | 5101 |
| `services/visits` | `POST /visits` counts a visit, `GET /visits` reads the count | 5102 |
| `ui` | Serves the page and forwards `/api/greeter/...` and `/api/visits/...` | 5100 |

Run each part with `npm run start:greeter`, `npm run start:visits` and `npm run start:ui`, then open http://127.0.0.1:5100.

Test everything with `npm test` (Node 22 or newer).

## Try it with the Viking Software Factory

This repository is a starting point for a first run of the [Viking Software Factory](https://github.com/ChaosDeSelva/Viking-Software-Factory): a ticket becomes a spec, a plan, agent work in isolated worktrees, verification, and a delivery you review and apply yourself.

1. Clone this repository somewhere on your machine and start the factory.
2. In Sindri, add a project that points at your clone.
3. Paste one of the example tickets from [`examples/`](examples/) into Sindri's Inbox:
   - [`01-farewell.md`](examples/01-farewell.md): a small feature across a service and the UI.
   - [`02-greeting-bug.md`](examples/02-greeting-bug.md): a bug fix that starts with a failing test.
   - [`03-languages.md`](examples/03-languages.md): a feature with an error case and a UI control.
4. Let the Director draft the spec, answer its questions and approve it, then approve the plan.
5. Start the run and watch it in Heimdall. When it is verified, review the delivery and apply the patch to your clone.

Nothing is merged or pushed for you: the factory hands back a verified patch.

## License

Apache License 2.0. See [LICENSE](LICENSE).
