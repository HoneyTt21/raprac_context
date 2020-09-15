import React from "react";
import ColorBox from "./ColorBox";
import {ColorProvider} from "./Color";

function App() {
    return (
        <ColorProvider value={{color: "red"}}>
            <div>
                <ColorBox />
            </div>
        </ColorProvider>
    );
}

export default App;
