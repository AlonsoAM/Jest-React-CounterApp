import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import toJson from "enzyme-to-json";
// const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");

describe("Prueba en Primera App", () => {
    // test("Debe mostrar el mensaje: Hola soy Goku", () => {
    //     const saludo = "Hola soy Goku";
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // });
    test("Debe de mostrar PrimerApp correctamente", () => {
        const saludo = "Hola soy Goku"; 
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    });
});


