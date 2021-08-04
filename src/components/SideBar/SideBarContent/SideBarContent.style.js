import styled from "styled-components";
import { Home, World } from "@styled-icons/boxicons-regular";

const SideBarContentContainer = styled.div`
    text-align: center;
    width: 100%;

    @media ${(props) => props.theme.device.TabletPortrait} {
        display: none;
    }
`;

const MenuContainer = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    &:hover {
        background-color: ${(props) => props.theme.color.hoverColor};
    }
`;
const HomeIcon = styled(Home)`
    margin-right: 0.5rem;
    width: 2rem;
`;

const WorldIcon = styled(World)`
    margin-right: 0.5rem;
    width: 2rem;
`;

export { SideBarContentContainer, MenuContainer, HomeIcon, WorldIcon };
