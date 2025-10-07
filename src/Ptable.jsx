import { useState, useEffect } from "react";
import Element from "./components/Element";
import elementsJSON from "./elements.json";
import "./Ptable.css"

function Ptable() {
    const elements = elementsJSON.elements;
    
    elements.forEach(element => console.log(element.symbol));

    return (
        <div className="ptable">
            {elements.map(element => (
                <div key={element.symbol} className="element-container" style={{
                    gridColumn: element.xpos,
                    gridRow: element.ypos
                }} >
                    <Element symbol={element.symbol} />
                </div>
            ))}
        </div>
    );
}

export default Ptable;