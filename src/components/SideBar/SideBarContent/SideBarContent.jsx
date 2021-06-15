import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './SideBarContent.style';

function SideBarContent() {

    return(
        <S.SideBarContentContainer>
            <NavLink exact to="/">
                <S.DomesticContainer>
                    <S.HomeIcon/>
                    <S.DomesticStatus>
                    국내 현황
                    </S.DomesticStatus>
                </S.DomesticContainer>   
            </NavLink>
            <NavLink to="/world">
                <S.WorldContainer> 
                    <S.WorldIcon/>
                    <S.WorldStatus>세계 현황</S.WorldStatus>
                </S.WorldContainer>    
            </NavLink>
        </S.SideBarContentContainer>
    );
}

export default SideBarContent;