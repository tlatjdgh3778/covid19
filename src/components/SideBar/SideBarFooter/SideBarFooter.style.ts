import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos";
import { DarkMode, LightMode } from "@styled-icons/material-outlined";

const SideBarFooterContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;

    @media ${({ theme }) => theme.device.TabletPortrait} {
        display: none;
    }
`;

const LightModeIcon = styled(LightMode)`
    color: ${({ theme }) => theme.color.iconColor};
    width: 3rem;
    cursor: pointer;
`;

const DarkModeIcon = styled(DarkMode)`
    color: ${({ theme }) => theme.color.fontColor};
    width: 3rem;
    cursor: pointer;
`;

const GithubIcon = styled(Github)`
    color: ${({ theme }) => theme.color.fontColor};
    width: 3rem;
    cursor: pointer;
`;
const GithubLink = styled(GithubIcon.withComponent("a"))``;

export { SideBarFooterContainer, LightModeIcon, DarkModeIcon, GithubIcon, GithubLink };
