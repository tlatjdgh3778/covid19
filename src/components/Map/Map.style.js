import styled from "styled-components";
import { MapContainer } from "react-leaflet";

const handleColor = (props) => {
    if (props.color === "확진환자") {
        return props.theme.color.confirmedColor;
    }
    if (props.color === "치료중") {
        return props.theme.color.activedColor;
    }
    if (props.color === "격리해제") {
        return props.theme.color.recoveredColor;
    }
    if (props.color === "사망자") {
        return props.theme.color.fontColor;
    }
};

const MapContainerCustom = styled(MapContainer)`
    width: 35rem;
    height: 70vh;

    @media ${(props) => props.theme.device.TabletPortrait} {
        width: 100%;
    }
`;

const CityName = styled.div`
    margin: 1rem;
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSize.lg};
`;
const CityCaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`;
const CityCase = styled.div`
    font-weight: 700;
    color: ${(props) => handleColor(props) || props.theme.color.confirmedColor};
    font-size: ${(props) => props.theme.fontSize.lg};
`;
const CityCaseStatus = styled.div``;
const UpdateTime = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-size: ${(props) => props.theme.fontSize.ssm};
`;

export {
    MapContainerCustom,
    CityName,
    CityCaseContainer,
    CityCase,
    CityCaseStatus,
    UpdateTime,
};
