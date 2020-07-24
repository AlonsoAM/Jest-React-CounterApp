import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con Promesas", () => {
    // test("Debe retornar un héroe async - getHeroeByIdAsync", (done) => {
    //     const id = 1;
    //     getHeroeByIdAsync(id).then((heroe) => {
    //         expect(heroe).toBe(heroes[0]);
    //         done();
    //     });
    // });
    test("Debe obtener un error si el héroe no existe", (done) => {
        const id = 1;
        getHeroeByIdAsync(id).catch((error) => {
            expect(error).toBe("No se pudo encontrar el héroe");
            done();
        });
    });
});