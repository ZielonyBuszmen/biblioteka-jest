describe("matchers", () => {
    it("toContaint & toHaveLength", () => {
        const arr = ['a', 'b', 'c'];
        expect(arr).toContain('b');
        expect(arr).toHaveLength(3);
    });
});