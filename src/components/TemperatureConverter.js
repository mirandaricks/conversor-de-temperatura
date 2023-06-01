import React, { useState } from "react";

const TemperatureConverter = () => {
  let [temperatura, setTemperatura] = useState("");
  const userSelect = document.querySelector("#user-choice");
  const teclas = document.querySelectorAll(".tecla");
  const resultados = document.querySelectorAll(".result");

  const handleTemperatura = (valorTecla) => {
    if (valorTecla === "." && temperatura.includes(".")) {
      return false;
    }
    if (valorTecla === "-" && temperatura === "") {
      setTemperatura(valorTecla);
      return true;
    }
    if (valorTecla === "." && (temperatura === "" || temperatura === "-")) {
      setTemperatura(temperatura + "0.");
      return true;
    }
    if (valorTecla !== "-") {
      setTemperatura(temperatura + valorTecla);
      return true;
    }
  };

  const handleBackSpace = () => {
    temperatura = temperatura.slice(0, -1);
    setTemperatura(temperatura);
  };

  const handleConverter = () => {
    temperatura = Number(temperatura);
    const sCelsius = document.querySelector("#celsius-temp");
    const sFahrenheit = document.querySelector("#fahrenheit-temp");
    const sKelvin = document.querySelector("#kelvin-temp");

    if(temperatura === "-0"){
      setTemperatura("0")
    }
    const fromTemp =
      document.querySelector("#user-choice").options[
        document.querySelector("#user-choice").selectedIndex
      ].value;
    console.log(fromTemp);
    if (fromTemp === "C") {
      const celsius = temperatura.toFixed(2);
      const fahrenheit = ((temperatura * 9) / 5 + 32).toFixed(2);
      const kelvin = (temperatura + 273.15).toFixed(2);
      sCelsius.insertAdjacentHTML("afterbegin", celsius);
      sFahrenheit.insertAdjacentHTML("afterbegin", fahrenheit);
      sKelvin.insertAdjacentHTML("afterbegin", kelvin);
    }
    if (fromTemp === "F") {
      const fahrenheit = temperatura.toFixed(2);
      const celsius = ((temperatura - 32) * 5 / 9).toFixed(2);
      const kelvin = (((temperatura - 32) * 5) / 9 + 273.15).toFixed(2);
      sCelsius.insertAdjacentHTML("afterbegin", celsius);
      sFahrenheit.insertAdjacentHTML("afterbegin", fahrenheit);
      sKelvin.insertAdjacentHTML("afterbegin", kelvin);
    }
    if (fromTemp === "K") {
      const kelvin = temperatura.toFixed(2);
      const celsius = (temperatura - 273.15).toFixed(2);
      const fahrenheit = (((temperatura - 273.15) * 9) / 5 + 32).toFixed(2);
      sCelsius.insertAdjacentHTML("afterbegin", celsius);
      sFahrenheit.insertAdjacentHTML("afterbegin", fahrenheit);
      sKelvin.insertAdjacentHTML("afterbegin", kelvin);
    }
    userSelect.setAttribute("disabled", true);
    [].map.call(teclas, (el) => {
      return el.setAttribute("disabled", true);
    });
  };
  //verificar onde ele fica
  const handleReset = () => {
    [].map.call(teclas, (el) => {
      return el.removeAttribute("disabled");
    });

    [].map.call(resultados, (el) => {
      if (el.hasChildNodes()) {
        return el.removeChild(el.firstChild);
      }
    });
    userSelect.removeAttribute("disabled");
    setTemperatura("");
  };


  return (
    <>
      <aside className="areaResultado">
        <input id="user-temp" defaultValue={temperatura} />
        <select id="user-choice">
          <option value="C" selected>Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        <div className="result" id="celsius-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>C
        </span>
        <div className="result" id="fahrenheit-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>F
        </span>
        <div className="result" id="kelvin-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>K
        </span>
        <button
          className="tecla"
          id="converter"
          onClick={() => handleConverter()}
        >
          Converter
        </button>
      </aside>
      <aside className="areaTeclas">
        <button className="n1 tecla" onClick={() => handleTemperatura("1")}>
          1
        </button>
        <button className="n2 tecla" onClick={() => handleTemperatura("2")}>
          2
        </button>
        <button className="n3 tecla" onClick={() => handleTemperatura("3")}>
          3
        </button>
        <button className="n4 tecla" onClick={() => handleTemperatura("4")}>
          4
        </button>
        <button className="n5 tecla" onClick={() => handleTemperatura("5")}>
          5
        </button>
        <button className="n6 tecla" onClick={() => handleTemperatura("6")}>
          6
        </button>
        <button className="n7 tecla" onClick={() => handleTemperatura("7")}>
          7
        </button>
        <button className="n8 tecla" onClick={() => handleTemperatura("8")}>
          8
        </button>
        <button className="n9 tecla" onClick={() => handleTemperatura("9")}>
          9
        </button>
        <button className="n0 tecla" onClick={() => handleTemperatura("0")}>
          0
        </button>
        <button
          className="virgula tecla"
          onClick={() => handleTemperatura(".")}
        >
          ,
        </button>
        <button
          className="limpa tecla"
          onClick={() => handleBackSpace()}
        ></button>
        <button
          className="negativo tecla"
          onClick={() => handleTemperatura("-")}
        >
          -
        </button>
        <div className="reset tecla" onClick={() => handleReset()}>
          Nova conversão
        </div>
      </aside>
    </>
  );
};

export default TemperatureConverter;
