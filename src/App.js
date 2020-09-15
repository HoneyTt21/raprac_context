import React from "react";
import ColorBox from "./components/ColorBox";
import {ColorProvider} from "./components/Color";
import SelectColors from "./components/SelectColors";

function App() {
    return (
        <ColorProvider value={{color: "red"}}>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    );
}

export default App;
