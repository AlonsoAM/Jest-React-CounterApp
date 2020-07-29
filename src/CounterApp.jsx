import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
    const [contador, setContador] = useState(value);

    const handleAdd = () => setContador(contador + 1);
    const handleSubstract = () => setContador(contador - 1);
    const handleReset = () => setContador(value);

    return (
        <div>
            <h1> Counter App </h1>
            <h2> {contador} </h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleReset}> Reset </button>{" "}
            <button onClick={handleSubstract}> -1 </button>
        </div>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

export default CounterApp;

// rafcp(snippet para generar el functional component)
