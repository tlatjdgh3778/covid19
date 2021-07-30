import styled, {css} from 'styled-components';

const WorldDataContainer = styled.div`
margin-bottom: 5rem;
`;
const DomesticStatusTitle = styled.div`
margin: 1rem;
padding-bottom: 1rem;
font-weight: 700;
font-size: ${(props) => props.theme.fontSize.lg};
border-bottom: 1px solid ${(props) => props.theme.color.fontColor};
`;
const DomesticStatusContainer = styled.div`
display: flex;
margin: 0 1rem;
justify-content: space-between;
`;

const container = css`
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
/* margin: 0 1rem; */
padding: 0.5rem 1rem;
width: 8rem;
height: 5rem;
justify-content: space-between;
cursor: default;

    @media ${(props) => props.theme.device.TabletPortrait}{
            margin: 0;
        }
    @media ${(props) => props.theme.device.MobileLandscape}{
        width: 5rem;
        height: 4rem;
        padding: 0.25rem;
    }
        
`;

const TotalContainer = styled.div`
${container};
    &:hover{
        background-color: ${(props) => props.theme.color.bgColor};
    }
`;

const Title = styled.div`

    @media ${(props) => props.theme.device.TabletPortrait}{
        font-size: ${(props) => props.theme.fontSize.sm};
    }
    @media ${(props) => props.theme.device.MobileLandscape}{
        font-size: ${(props) => props.theme.fontSize.ssm};
    }
`;

const Data = styled.div`
font-size: ${(props) => props.theme.fontSize.lg};
font-weight: 700;
color: ${(props) => props.color || props.theme.color.fontColor};

    @media ${(props) => props.theme.device.TabletPortrait}{
        font-size: ${(props) => props.theme.fontSize.md};
    }
    @media ${(props) => props.theme.device.MobileLandscape}{
        font-size: ${(props) => props.theme.fontSize.ssm};
    }
`;

export { WorldDataContainer, DomesticStatusTitle, DomesticStatusContainer, container, TotalContainer, Title, Data };