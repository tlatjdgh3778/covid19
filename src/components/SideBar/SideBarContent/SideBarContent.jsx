import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./SideBarContent.style";

const SideBarContent = () => {
    return (
        <S.SideBarContentContainer>
            <NavLink exact to="/">
                <S.MenuContainer>
                    <S.HomeIcon />
                    <div>국내 현황</div>
                </S.MenuContainer>
            </NavLink>
            <NavLink to="/world">
                <S.MenuContainer>
                    <S.WorldIcon />
                    <div>세계 현황</div>
                </S.MenuContainer>
            </NavLink>
        </S.SideBarContentContainer>
    );
};

export default SideBarContent;
