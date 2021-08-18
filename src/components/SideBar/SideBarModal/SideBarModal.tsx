import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./SideBarModal.style";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "store/modules/mode";
import { toggleMenu } from "store/modules/menu";
import { RootState } from "store/index";

const SideBarModal = () => {
    const isDark = useSelector((state: RootState) => state.mode.isDark);
    const isOpen = useSelector((state: RootState) => state.menu.isOpen);
    const dispatch = useDispatch();

    const onToggle = () => {
        dispatch(toggleMenu());
    };
    const onChangeMode = () => {
        dispatch(changeMode());
    };
    return (
        <>
            {isOpen ? (
                <S.Background onClick={onToggle}>
                    <S.ModalContainer onClick={(e) => e.stopPropagation()}>
                        <div>메뉴</div>
                        <S.CloseIcon onClick={onToggle}></S.CloseIcon>
                        <S.MenuContainer>
                            <NavLink exact to="/">
                                <S.DomesticStatus onClick={onToggle}>국내 현황</S.DomesticStatus>
                            </NavLink>
                            <NavLink exact to="/world">
                                <S.News onClick={onToggle}>세계 현황</S.News>
                            </NavLink>

                            <div onClick={onChangeMode}>
                                {isDark ? <S.Mode>라이트 모드</S.Mode> : <S.Mode>다크 모드</S.Mode>}
                            </div>

                            <S.GithubLink
                                target="_blank"
                                href="https://github.com/tlatjdgh3778/COVID19"
                            >
                                <S.GithubContainer>
                                    <S.GithubIcon></S.GithubIcon>
                                    <div>Github</div>
                                </S.GithubContainer>
                            </S.GithubLink>
                        </S.MenuContainer>
                    </S.ModalContainer>
                </S.Background>
            ) : null}
        </>
    );
};

export default SideBarModal;
