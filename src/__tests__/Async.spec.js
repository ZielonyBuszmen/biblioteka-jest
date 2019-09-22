function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe("Async examples", () => {
    it("is async test 1", (done) => {
        setTimeout(done, 1);
    });

    it("is async test 2", () => {
        return new Promise(
            (resolve) => setTimeout(resolve, 1)
        );
    });

    it("is async test 3", async () => {
        await delay(1);
    });
});