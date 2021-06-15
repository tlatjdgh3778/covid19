import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './SideBarModal.style';

function SideBarModal({showModal, closeModal, changeTheme, isDark}) {

    const onClick = () => {
        changeTheme(isDark);
    }
    return(
        <>
        {showModal ? 
        <S.Background onClick={closeModal}>
            <S.ModalContainer onClick={e => e.stopPropagation()}>
                <div>메뉴</div>
                <S.CloseIcon onClick={closeModal}></S.CloseIcon>
                <S.MenuContainer>
                <NavLink exact to="/">
                    <S.DomesticStatus onClick={closeModal}>국내 현황</S.DomesticStatus>
                </NavLink>
                <NavLink exact to="/world">
                    <S.News onClick={closeModal}>세계 현황</S.News>
                </NavLink>
                    
                    <div onClick={onClick}>
                    {isDark?<S.Mode>라이트 모드</S.Mode>:<S.Mode>다크 모드</S.Mode>}
                    </div>

                    <S.GithubLink target="_blank" href="https://github.com/tlatjdgh3778/COVID19" alt="githubLink">
                        <S.GithubContainer>
                            <S.GithubIcon></S.GithubIcon>
                            <div>Github</div>
                        </S.GithubContainer>
                    </S.GithubLink>
                </S.MenuContainer>
            </S.ModalContainer>
        </S.Background> : null}
        </>
    );
}

export default SideBarModal;