import React from 'react';
import styled from 'styled-components';
import SideBarTitle from './SideBarTitle/SideBarTitle';
import SideBarContent from './SideBarContent/SideBarContent';
import SideBarFooter from './SideBarFooter/SideBarFooter';

const SideBarContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${(props) => props.theme.color.bgColor};
color: ${(props) => props.theme.color.fontColor};
height: 100%;
position: fixed;
min-width: 10rem;
align-items: center;
`;


function SideBar() {

    return(
        <SideBarContainer>
            <SideBarTitle></SideBarTitle>
            <SideBarContent></SideBarContent>
            <SideBarFooter></SideBarFooter>
        </SideBarContainer>
    );

}

export default SideBar;