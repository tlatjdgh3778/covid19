import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

const MapContainerCustom = styled(MapContainer)`
    width: 35rem;
    height: 70vh;

    @media ${(props) => props.theme.device.TabletPortrait}{
        width: 100%;
    }
`;

const cityStyle = {
    fillColor: '#656f7d',
    color: '#233044',
    weight: 3,
}
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
    color: ${(props) => props.theme.color.fontRed};
    font-size: ${(props) => props.theme.fontSize.lg};
`;
const CityCaseStatus = styled.div`
`;
const UpdateTime = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-size: ${(props) => props.theme.fontSize.ssm};
`;

export { MapContainerCustom, cityStyle, CityName, CityCaseContainer, CityCase, CityCaseStatus, UpdateTime };