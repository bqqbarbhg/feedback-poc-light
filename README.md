# Feedback redirect based proof-of-concept

Serve the directory from a simple static server, eg Python 3

```bash
python -m http.server
```

Open http://localhost:8000/client.html to see the site in non-feedback mode.

Open http://localhost:8000/redirect.html?dir=client.html to enable feedback mode,
in this mode data is written to/from an `<iframe>` to get persistent data storage.

