const { getImagen } = require("../../base/11-async-await");

describe("Realizando pruebas en Async - Await y Fetch", () => {
    test("Deebe retornar el url de la imagen", async() => {
        const url = await getImagen();
        console.log(url);
        expect(url.includes("https://")).toBe(true);
    });
});