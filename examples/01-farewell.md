# Add a farewell to the greeter and the page

The greeter only says hello. Add a farewell.

- Greeter service: `GET /farewell?name=Ada` answers `{"message": "Goodbye, Ada!"}`.
- UI: add a Farewell button next to Greet that shows the farewell for the typed name, through the UI's existing `/api/greeter/` forwarding.
- Tests: cover the new endpoint and the forwarding, in the same style as the existing tests (`node --test`).
- Keep the app dependency-free.
