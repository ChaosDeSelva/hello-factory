# Hello Factory

A tiny app used to exercise the software factory end to end: two Node microservices and a web UI, with no dependencies.

| Part | What it does | Default port |
| --- | --- | --- |
| `services/greeter` | `GET /greet?name=Ada` answers `{ "message": "Hello, Ada!" }` | 5101 |
| `services/visits` | `POST /visits` counts a visit, `GET /visits` reads the count | 5102 |
| `ui` | Serves the page and forwards `/api/greeter/...` and `/api/visits/...` | 5100 |

Run each part with `npm run start:greeter`, `npm run start:visits` and `npm run start:ui`, then open http://127.0.0.1:5100.

Test everything with `npm test` (Node 22 or newer).
