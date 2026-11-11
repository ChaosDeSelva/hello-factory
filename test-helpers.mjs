/** Starts `server` on a free loopback port, closes it after the test, and returns its base URL. */
export function listen(t, server) {
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      t.after(() => new Promise((done) => server.close(done)));
      resolve(`http://127.0.0.1:${server.address().port}`);
    });
  });
}
