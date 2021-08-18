import React from "react";
import SideBarTitle from "./SideBarTitle/SideBarTitle";
import SideBarContent from "./SideBarContent/SideBarContent";
import SideBarFooter from "./SideBarFooter/SideBarFooter";
import SideBarModal from "./SideBarModal/SideBarModal";
import * as S from "./SideBar.style";
import { useDispatch } from "react-redux";
import { toggleMenu } from "store/modules/menu";

const SideBar = () => {
    const dispatch = useDispatch();

    const onToggle = () => {
        dispatch(toggleMenu());
    };

    return (
        <S.SideBarContainer>
            <SideBarTitle></SideBarTitle>
            <SideBarContent></SideBarContent>
            <SideBarFooter></SideBarFooter>
            <S.MenuIcon onClick={onToggle}></S.MenuIcon>
            <SideBarModal></SideBarModal>
        </S.SideBarContainer>
    );
};

export default SideBar;
