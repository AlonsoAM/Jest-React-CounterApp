import {
    getHeroeById,
    getHeroesByOwner
} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de héroes", () => {
    test("Debe de retornar un héroe por ID", () => {
        const id = 1
        const heroe = getHeroeById(id)

        const heroeData = heroes.find(h => h.id === id)

        expect(heroe).toEqual(heroeData);
    })
    test("Debe de retornar undefined si héroe no existe", () => {
        const id = 10
        const heroe = getHeroeById(id)

        expect(heroe).toBe(undefined)
    })

    // Evaluar los heroes de DC
    test("Debe de retornar un arreflo con los héroes de DC", () => {
        const owner = "DC"

        const heroeData = heroes.filter(h => h.propietario === owner)

        expect(heroeData).toEqual([{
                ID: 1,
                nombre: "Batman",
                propietario: "DC"
            },
            {
                ID: 3,
                nombre: "Superman",
                propietario: "DC"
            },
            {
                ID: 4,
                nombre: "Flash",
                propietario: "DC"
            },
        ])
    })

    // Evalua retornar un arreglo con loe hérores de Marvel
    test("Debe de retornar un arreglo con los hérores de Marvel", () => {
        const propietario = 'Marvel'

        const heroeData = heroes.filter(h => h.propietario === propietario)

        expect(heroeData.length).toBe(2);
    })


})