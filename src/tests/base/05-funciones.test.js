import { getUser, getUsuarioActivo } from '../../base/05-funciones'
import '@testing-library/jest-dom'

describe('Pruebas en Funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: '123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        console.log(getUser())

        expect(user).toEqual(userTest)

    })

    // getUsuarioActivo debe retornar un objeto

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Alonso'
        const usuarioTest = {
            uid: 'ABC567',
            username: nombre
        }

        const usuario = getUsuarioActivo(nombre)

        console.log(getUsuarioActivo(nombre))

        expect(usuario).toEqual(usuarioTest);

    })


})




