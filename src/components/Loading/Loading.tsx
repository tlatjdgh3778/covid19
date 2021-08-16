import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <Loader
            type="Oval"
            color="#6c757d"
            height={50}
            width={50}
            timeout={3000}
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
            }}
        />
    );
};

export default Loading;
