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

const ModeIcon = styled(LightMode)`
color: ${(props) => props.theme.color.fontColor};
width: 3rem;
cursor: pointer;
`;

const GithubIcon = styled(Github)`
color: ${(props) => props.theme.color.fontColor};
width: 3rem;
cursor: pointer;
`;

function SideBarFooter(){

    return(
        <SideBarFooterContainer>
            <ModeIcon />
            <GithubIcon />
        </SideBarFooterContainer>
    );
}

export default SideBarFooter;