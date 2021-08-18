import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const CustomLoader = styled(Loader)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Loading = () => {
    return <CustomLoader type="Oval" color="#6c757d" height={50} width={50} timeout={3000} />;
};

export default Loading;
