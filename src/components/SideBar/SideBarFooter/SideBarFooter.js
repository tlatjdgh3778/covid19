import React from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos';
import { DarkMode, LightMode } from '@styled-icons/material-outlined';

const SideBarFooterContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;

    @media ${(props) => props.theme.device.TabletPortrait}{
        display: none;
    }
`;

const LightModeIcon = styled(LightMode)`
color: ${(props) => props.theme.color.iconColor};
width: 3rem;
cursor: pointer;
`;

const DarkModeIcon = styled(DarkMode)`
color: ${(props) => props.theme.color.fontColor};
width: 3rem;
cursor: pointer;
`;

const GithubIcon = styled(Github)`
color: ${(props) => props.theme.color.fontColor};
width: 3rem;
cursor: pointer;
`;
const GithubLink = styled(GithubIcon.withComponent('a'))`
`
function SideBarFooter({changeTheme, isDark}){

    const onClick = () => {
        changeTheme(isDark);
    }

    return(
        <SideBarFooterContainer>
                <div onClick={onClick}>
                {isDark?<LightModeIcon />:<DarkModeIcon />}
                </div>
                <GithubLink target="_blank" href="https://github.com/tlatjdgh3778/COVID19">
                    <GithubIcon />
                </GithubLink>
        </SideBarFooterContainer>
    );
}

export default SideBarFooter;