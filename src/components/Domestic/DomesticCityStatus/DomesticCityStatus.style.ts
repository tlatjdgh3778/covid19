import styled, { css } from "styled-components";

const CityContainer = styled.div`
    margin: 1rem;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

const TableContainer = styled.div`
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
`;
const TitleContainer = styled.div`
    display: flex;
`;

const Content = css`
    text-align: center;
    min-width: 6rem;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 0.25rem;
    margin-right: 0.25rem;
    cursor: default;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const TableTitle = styled.div`
    ${Content};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.sm};
    border: none;
    background-color: ${({ theme }) => theme.color.bgColor};
    justify-content: center;
`;

const TableTitleCity = styled(TableTitle)`
    position: sticky;
    left: 0;
    min-width: 4rem;
    margin-bottom: 0.25rem;
    margin-right: 0.25rem;
`;

const CityName = styled.div`
    ${Content}
    background-color: ${({ theme }) => theme.color.bgColor};
    position: sticky;
    left: 0;
    min-width: 4rem;
    justify-content: center;
`;

const TotalCase = styled.div<{ bgColor?: boolean }>`
    ${Content}
    background-color: ${(props) =>
        props.bgColor ? props.theme.color.bgColor : props.theme.color.wallpaperColor};
`;

const Recovered = styled.div<{ bgColor?: boolean }>`
    ${Content}
    background-color: ${(props) =>
        props.bgColor ? props.theme.color.bgColor : props.theme.color.wallpaperColor};
`;

const Death = styled.div<{ bgColor?: boolean }>`
    ${Content}
    background-color: ${(props) =>
        props.bgColor ? props.theme.color.bgColor : props.theme.color.wallpaperColor};
`;

const Percentage = styled.div<{ bgColor?: boolean }>`
    ${Content}
    background-color: ${(props) =>
        props.bgColor ? props.theme.color.bgColor : props.theme.color.wallpaperColor};
`;

export {
    CityContainer,
    TableContainer,
    TitleContainer,
    Content,
    TableTitle,
    TableTitleCity,
    CityName,
    TotalCase,
    Recovered,
    Death,
    Percentage,
};
