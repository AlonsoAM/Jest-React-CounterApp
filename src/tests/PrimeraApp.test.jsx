import React from "react";
const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");

describe("Prueba en Primera App", () => {
    test("Debe mostrar el mensaje: Hola soy Goku", () => {
        const saludo = "Hola soy Goku";
        const { getByText } = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();
    });
});
