const request = require("supertest");
const app = require("./index");

test("deve converter 10 para binário 1010", async () => {
    const response = await request(app).get("/to-binary/10");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
        decimal: 10,
        binary: "1010"
    });
});