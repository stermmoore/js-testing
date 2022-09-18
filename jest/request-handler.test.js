const { hasUncaughtExceptionCaptureCallback } = require("process");
const RequestHandler = require("./request-handler");

describe("requestHandler", () => {

    const mockRepository = { getData : jest.fn() }


    test("first test", () => {
        const requestHandler = new RequestHandler(mockRepository);

        var result = requestHandler.handle("dave");

        expect(result).toBe("hello dave");
    })

    test("Mock Repository Is Called", () => {
        const requestHandler = new RequestHandler(mockRepository);

        const result = requestHandler.getData();

        expect(mockRepository.getData).toHaveBeenCalled();

    })
})