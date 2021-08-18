import styled, { css } from "styled-components";
import numeral from "numeral";

const ChartStyle = css`
    border-radius: 10px;
    margin: 1rem 0;
    padding: 0.5rem 0;
    background-color: ${({ theme }) => theme.color.chartColor};
`;
const ChartTitle = css`
    margin: 0.5rem;
    font-weight: 700;
    text-align: center;
`;

const options: any = {
    plugins: {
        title: {
            display: true,
            text: "Custom Chart Title",
        },
    },
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },

    tooltips: {
        mode: "index",
        intersect: false,
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: false,
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function (value: number) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
};
const ChartContainer = styled.div`
    ${ChartStyle};
`;
const CasesTitle = styled.div`
    ${ChartTitle}
    color: ${({ theme }) => theme.color.confirmedColor};
`;
const RecoveredTitle = styled.div`
    ${ChartTitle}
    color: ${({ theme }) => theme.color.recoveredColor};
`;
const DeathsTitle = styled.div`
    ${ChartTitle}
    color: ${({ theme }) => theme.color.fontColor};
`;

const Title = styled.div`
    margin: 1rem;
    padding-bottom: 1rem;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

export {
    ChartStyle,
    ChartTitle,
    options,
    ChartContainer,
    CasesTitle,
    RecoveredTitle,
    DeathsTitle,
    Title,
};
