# Greet in Spanish, French or English

The greeter only speaks English. Let people pick a language.

- Greeter service: `GET /greet?name=Ada&lang=es` answers `{"message": "Hola, Ada!"}`; `lang=fr` answers `"Bonjour, Ada!"`; `lang=en` or no `lang` keeps `"Hello, Ada!"`. An unknown `lang` answers 400 with `{"error": "unsupported language"}`.
- UI: add a language picker (English, Español, Français) next to the name field; Greet sends the chosen language through the UI's existing `/api/greeter/` forwarding.
- Tests: cover each language, the default, the unknown-language error and the forwarding, in the same style as the existing tests (`node --test`).
- Keep the app dependency-free.
