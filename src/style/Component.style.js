import styled, { css } from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 11rem;
    margin-right: 3rem;
    padding-top: 5rem;
    color: ${(props) => props.theme.color.fontColor};

    @media ${(props) => props.theme.device.TabletLandscape} {
        margin-left: 9rem;
    }
    @media ${(props) => props.theme.device.TabletPortrait} {
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
    width: 37rem;
    margin: 0 3rem;
    color: ${(props) => props.theme.color.fontColor};

    @media ${(props) => props.theme.device.TabletLandscape} {
        margin: 1rem;
    }
    @media ${(props) => props.theme.device.TabletPortrait} {
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        width: 85%;
    }
`;

const LeftContainer = styled.div`
    width: 37rem;
    margin: 0 3rem;
    color: ${(props) => props.theme.color.fontColor};

    @media ${(props) => props.theme.device.TabletLandscape} {
        margin: 1rem;
    }
    @media ${(props) => props.theme.device.TabletPortrait} {
        display: flex;
        flex-direction: column;
        margin: 0;
        width: 85%;
        /* min-width: 100%; */
    }
`;

const StatusContainer = styled.div`
    display: flex;
    margin: 0 1rem;
    justify-content: space-around;
`;

const StatusTitle = styled.div`
    margin: 1rem;
    padding-bottom: 1rem;
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSize.lg};
    border-bottom: 1px solid ${(props) => props.theme.color.fontColor};
`;
const container = css`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
    height: 5rem;
    justify-content: space-between;
    cursor: default;

    @media ${(props) => props.theme.device.TabletPortrait} {
        margin: 0;
    }
    @media ${(props) => props.theme.device.MobileLandscape} {
        width: 3rem;
        height: 4rem;
        padding: 0.25rem;
    }
`;

const TotalContainer = styled.div`
    ${container};
    &:hover {
        background-color: ${(props) => props.theme.color.hoverColor};
    }
`;

const Title = styled.div`
    @media ${(props) => props.theme.device.TabletPortrait} {
        font-size: ${(props) => props.theme.fontSize.ssm};
    }
`;

const Data = styled.div`
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 700;
    color: ${(props) => props.color || props.theme.color.fontColor};

    @media ${(props) => props.theme.device.TabletPortrait} {
        font-size: ${(props) => props.theme.fontSize.md};
    }
    @media ${(props) => props.theme.device.MobileLandscape} {
        font-size: ${(props) => props.theme.fontSize.sm};
    }
`;
const TodayData = styled.div`
    color: ${(props) => props.color || props.theme.color.fontColor};
    display: flex;

    @media ${(props) => props.theme.device.TabletPortrait} {
        font-size: ${(props) => props.theme.fontSize.ssm};
    }
`;

export {
    MainContainer,
    RightContainer,
    LeftContainer,
    StatusContainer,
    StatusTitle,
    TotalContainer,
    Title,
    Data,
    TodayData,
};
