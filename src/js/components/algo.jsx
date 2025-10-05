import React, { useState } from "react";

//create your first component

const Semaforo = () => {
    const [selet, Setselet] = useState("rojo")
    const cambiarColor = (color) => {
        Setselet(color)

    }
    return (
        <div className="container">
            <div className="superior">
            </div >
            <div className="semaforo">
                <div
                    className={`rojo ${selet == "rojo" ? "luz" : " "}`}
                    onClick={() => cambiarColor("rojo")}></div>
                <div
                    className={`amarillo ${selet == "amarillo" ? "luz" : " "}`}
                    onClick={() => cambiarColor("amarillo")}></div>
                <div
                    className={`verde ${selet == "verde" ? "luz" : " "}`}
                    onClick={() => cambiarColor("verde")}></div >
            </div >
        </div >
    );
};
//gfg
export default Semaforo;