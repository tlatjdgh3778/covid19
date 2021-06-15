import styled from 'styled-components';

const MainRightContainer = styled.div`
color: ${(props) => props.theme.color.fontColor};
margin: 1rem;
min-height: 60rem;

    @media ${(props) => props.theme.device.TabletPortrait}{
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        width: 85%;
        /* min-width: 100%; */
    }
`;

export { MainRightContainer };