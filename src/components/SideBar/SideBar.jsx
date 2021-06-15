import React, { useState } from 'react';
import SideBarTitle from './SideBarTitle/SideBarTitle';
import SideBarContent from './SideBarContent/SideBarContent';
import SideBarFooter from './SideBarFooter/SideBarFooter';
import SideBarModal from './SideBarModal/SideBarModal';
import * as S from './SideBar.style';

function SideBar({changeTheme, isDark}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    return(
        <S.SideBarContainer>
            <SideBarTitle></SideBarTitle>
            <SideBarContent></SideBarContent>
            <SideBarFooter changeTheme={changeTheme} isDark={isDark}></SideBarFooter>
            <S.MenuIcon onClick={openModal}></S.MenuIcon>
            <SideBarModal showModal={showModal} closeModal={closeModal} changeTheme={changeTheme} isDark={isDark}></SideBarModal>
        </S.SideBarContainer>
    );

}

export default SideBar;