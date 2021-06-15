import styled, { css } from 'styled-components';
import numeral from 'numeral';

const ChartStyle = css`
border-radius: 10px;
margin: 1rem 0;
padding: 0.5rem 0;
`;
const ChartTitle = css`
margin: 0.5rem;
font-weight: 700;
text-align: center;
`;

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    },
    legend: {
        // labels: {
        //     fontSize: 16,
        //     fontWeight: 900,
        // }
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    // maintainAspectRatio: false,

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
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },       
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
}
const CasesChartContainer = styled.div`
${ChartStyle};
background-color: ${(props) => props.theme.color.chartRed};
`;
const RecoveredChartContainer = styled.div`
${ChartStyle};
background-color: ${(props) => props.theme.color.chartGreen};
`;
const DeathsChartContainer = styled.div`
${ChartStyle};
background-color: ${(props) => props.theme.color.chartColor};
`;
const CasesTitle = styled.div`
${ChartTitle}
color: ${(props) => props.theme.color.fontRed};
`;
const RecoveredTitle = styled.div`
${ChartTitle}
color: ${(props) => props.theme.color.fontGreen};
`;
const DeathsTitle = styled.div`
${ChartTitle}
color: ${(props) => props.theme.color.fontColor};
`;

const Title = styled.div`
margin: 1rem;
padding-bottom: 1rem;
font-weight: 700;
font-size: ${(props) => props.theme.fontSize.lg};
`;

export { ChartStyle, ChartTitle, options, CasesChartContainer, RecoveredChartContainer, DeathsChartContainer, CasesTitle, RecoveredTitle, DeathsTitle, Title };