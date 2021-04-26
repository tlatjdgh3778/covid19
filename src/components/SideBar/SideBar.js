import React, { useState } from 'react';
import styled from 'styled-components';
import SideBarTitle from './SideBarTitle/SideBarTitle';
import SideBarContent from './SideBarContent/SideBarContent';
import SideBarFooter from './SideBarFooter/SideBarFooter';
import SideBarModal from './SideBarModal/SideBarModal';
import { Menu } from '@styled-icons/evaicons-solid';

const SideBarContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${(props) => props.theme.color.bgColor};
color: ${(props) => props.theme.color.fontColor};
height: 100%;
position: fixed;
min-width: 10rem;
align-items: center;

    @media ${(props) => props.theme.device.TabletLandscape}{
        min-width: 8.5rem;
    }
    @media ${(props) => props.theme.device.TabletPortrait}{
        align-items: center;
        width: 100%;
        position: absolute;
        height: 4rem;
        justify-content: center;
    }
`;

const MenuIcon = styled(Menu)`
display: none;

    @media ${(props) => props.theme.device.TabletPortrait}{
        position: absolute;
        display: block;
        width: 2rem;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
    }
`;
function SideBar({changeTheme, isDark}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    return(
        <SideBarContainer>
            <SideBarTitle></SideBarTitle>
            <SideBarContent></SideBarContent>
            <SideBarFooter changeTheme={changeTheme} isDark={isDark}></SideBarFooter>
            <MenuIcon onClick={openModal}></MenuIcon>
            <SideBarModal showModal={showModal} closeModal={closeModal} changeTheme={changeTheme} isDark={isDark}></SideBarModal>
        </SideBarContainer>
    );

}

export default SideBar;