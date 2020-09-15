import React, {useContext} from "react";
import ColorContext from "./Color";

const ColorBox = () => {
    const {state} = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                    width: "64px",
                    height: "64px",
                    background: state.color,
                    border: "3px aqua solid",
                }}
            />
            <div
                style={{
                    width: "32px",
                    height: "32px",
                    border: "3px solid aqua",
                    background: state.subcolor,
                }}
            />
        </>
    );
};

export default ColorBox;
