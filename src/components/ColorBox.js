import React from "react";
import ColorConsumer from "./Color";

const ColorBox = () => {
    return (
        <ColorConsumer>
            {({state}) => (
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
            )}
        </ColorConsumer>
    );
};

export default ColorBox;
