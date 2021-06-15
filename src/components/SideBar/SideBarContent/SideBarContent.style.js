import styled from 'styled-components';
import { Home, World } from '@styled-icons/boxicons-regular';

const SideBarContentContainer = styled.div`
text-align: center;
width: 100%;

    @media ${(props) => props.theme.device.TabletPortrait}{
        display: none;
    }
`;

const DomesticContainer = styled.div`
display: flex;
cursor: pointer;
align-items: center;
margin: 1rem 0;
padding: 0.5rem 1rem;
    &:hover {
        background-color: ${(props) => props.theme.color.hoverColor};
    }

`;
const DomesticStatus = styled.div`
`;
const HomeIcon = styled(Home)`
margin-right: 0.5rem;
width: 2rem;
padding-left: 0.5rem;
`;

const WorldContainer = styled.div`
display: flex;
cursor: pointer;
align-items: center;
margin: 1rem 0;
padding: 0.5rem 1rem;
    &:hover {
        background-color: ${(props) => props.theme.color.hoverColor};
    }
`;
const WorldStatus = styled.div`
`;
const WorldIcon = styled(World)`
margin-right: 0.5rem;
width: 2rem;
padding-left: 0.5rem;
`;

export { SideBarContentContainer, DomesticContainer, DomesticStatus, HomeIcon, WorldContainer, WorldStatus,WorldIcon };