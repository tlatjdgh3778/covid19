import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 11rem;
    margin-right: 3rem;
    padding-top: 5rem;
    color: ${(props) => props.theme.color.fontColor};
  
    @media ${(props) => props.theme.device.TabletLandscape}{
        margin-left: 9rem;
    }
    @media ${(props) => props.theme.device.TabletPortrait}{
        display: flex;
        flex-direction: column;
        margin-left: 0;
        margin-right: 0;
        padding-top: 6rem;
        width: 100%;
        align-items: center;
    }
`;

const RightContainer = styled.div`
    color: ${(props) => props.theme.color.fontColor};
    margin: 1rem;
    min-height: 60rem;

    @media ${(props) => props.theme.device.TabletPortrait}{
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        width: 85%;
    }
`;

const LeftContainer = styled.div`
    margin: 0 3rem;
    color: ${(props) => props.theme.color.fontColor};

    @media ${(props) => props.theme.device.TabletLandscape}{
        margin: 1rem;
    }
    @media ${(props) => props.theme.device.TabletPortrait}{
        display: flex;
        flex-direction: column;
        margin: 0;
        width: 85%;
        /* min-width: 100%; */
    }
`;

export { MainContainer, RightContainer, LeftContainer };