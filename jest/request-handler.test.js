const { hasUncaughtExceptionCaptureCallback } = require("process");
const RequestHandler = require("./request-handler");

describe("requestHandler", () => {
    test("first test", () => {
        const requestHandler = new RequestHandler();

        var result = requestHandler.handle("dave");

        expect(result).toBe("hello dave");
    })
})