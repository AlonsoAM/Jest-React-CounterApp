import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-templae-string.test.js', () => {

    test('getSaludo() debe retornar Hola Alonso', () => {

        const nombre = 'Alonso'

        const saludo = getSaludo(nombre)

        expect(saludo).toBe('Hola ' + nombre)

        console.log(saludo)

    })

    // getSaludo debe retornar Hola Alfredo si no hay argumento en el nombre

    test('getSaludo() debe regresar Hola Alfredo', () => {

        const saludo = getSaludo()
        expect(saludo).toBe('Hola Alfredo')
        console.log(saludo)

    })



})