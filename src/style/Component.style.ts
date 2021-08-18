import styled, { css } from "styled-components";

const handleColor = (props: any) => {
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

const handleHoverColor = (props: any) => {
    if (props.color === "확진환자") {
        return props.theme.color.confirmedHover;
    }
    if (props.color === "치료중") {
        return props.theme.color.activedHover;
    }
    if (props.color === "격리해제") {
        return props.theme.color.recoveredHover;
    }
    if (props.color === "사망자") {
        return props.theme.color.deathHover;
    }
};

const handleActiveColor = (props: any) => {
    if (props.color === props.activeColor && props.activeColor === "확진환자") {
        return props.theme.color.confirmedHover;
    }
    if (props.color === props.activeColor && props.activeColor === "치료중") {
        return props.theme.color.activedHover;
    }
    if (props.color === props.activeColor && props.activeColor === "격리해제") {
        return props.theme.color.recoveredHover;
    }
    if (props.color === props.activeColor && props.activeColor === "사망자") {
        return props.theme.color.deathHover;
    }
};

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 11rem;
    margin-right: 3rem;
    padding-top: 5rem;
    color: ${({ theme }) => theme.color.fontColor};

    @media ${({ theme }) => theme.device.TabletLandscape} {
        margin-left: 9rem;
    }
    @media ${({ theme }) => theme.device.TabletPortrait} {
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
    color: ${({ theme }) => theme.color.fontColor};

    @media ${({ theme }) => theme.device.TabletLandscape} {
        margin: 1rem;
    }
    @media ${({ theme }) => theme.device.TabletPortrait} {
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
    color: ${({ theme }) => theme.color.fontColor};

    @media ${({ theme }) => theme.device.TabletLandscape} {
        margin: 1rem;
    }
    @media ${({ theme }) => theme.device.TabletPortrait} {
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
    font-size: ${({ theme }) => theme.fontSize.lg};
    border-bottom: 1px solid ${({ theme }) => theme.color.fontColor};
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

    @media ${({ theme }) => theme.device.TabletPortrait} {
        margin: 0;
    }
    @media ${({ theme }) => theme.device.MobileLandscape} {
        width: 3rem;
        height: 4rem;
        padding: 0.25rem;
    }
`;

const TotalContainer = styled.div<{ activeColor: string }>`
    ${container};
    background-color: ${(props) => handleActiveColor(props)};
    cursor: pointer;
    &:hover {
        background-color: ${(props) => handleHoverColor(props)};
    }
`;

const Title = styled.div`
    @media ${({ theme }) => theme.device.TabletPortrait} {
        font-size: ${({ theme }) => theme.fontSize.ssm};
    }
`;

const Data = styled.div`
    color: ${(props) => handleColor(props)};

    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 700;

    @media ${({ theme }) => theme.device.TabletPortrait} {
        font-size: ${({ theme }) => theme.fontSize.md};
    }
    @media ${({ theme }) => theme.device.MobileLandscape} {
        font-size: ${({ theme }) => theme.fontSize.sm};
    }
`;
const TodayData = styled.div`
    color: ${(props) => handleColor(props)};
    display: flex;

    @media ${({ theme }) => theme.device.TabletPortrait} {
        font-size: ${({ theme }) => theme.fontSize.ssm};
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
