const app = require("./../app");

describe("App", function () {
  it("should start without error", (done) => {
    let server;
    try {
      server = app.listen(3000);
      done();
    } finally {
      server.close();
    }
  });
});
