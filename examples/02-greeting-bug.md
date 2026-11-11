# Greeting without a name says "Hello, null!"

Bug: `GET /greet` with no name, or an empty or whitespace-only name, answers `{"message": "Hello, null!"}` (or `"Hello, !"`). It should answer `{"message": "Hello, world!"}`. A name with surrounding spaces should be trimmed (`"  Ada "` gives `"Hello, Ada!"`).

Steps: start the greeter and request `/greet` without a `name` parameter.

Add tests that fail before the fix. Keep the app dependency-free.
