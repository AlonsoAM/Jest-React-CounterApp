import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en el <CounterApp />", () => {
    let wrapper = shallow(<CounterApp />);
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test("Debe mostar <CounterApp /> correctmante", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe mostrar el valor por defecto de 100 ", () => {
        const wrapper = shallow(<CounterApp value={100} />);
        const conuterText = wrapper.find("h2").text().trim();
        console.log(`xxxx${conuterText}xxxx`);
        expect(conuterText).toBe("100");
    });

    test("Debe incrementar con el botón +1", () => {
        wrapper.find("button").at(0).simulate("click");
        // console.log(btn1.html());
        const conuterText = wrapper.find("h2").text().trim();
        expect(conuterText).toBe("11");
    });

    test("Debe decrementar con el botón -1", () => {
        wrapper.find("button").at(2).simulate("click");
        const conuterText = wrapper.find("h2").text().trim();
        expect(conuterText).toBe("9");
    });
});
