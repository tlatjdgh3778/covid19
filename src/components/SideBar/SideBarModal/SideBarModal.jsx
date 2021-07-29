import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./SideBarModal.style";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "store/modules/mode";
import { toggleMenu } from "store/modules/menu";

const SideBarModal = () => {
    const isDark = useSelector(({ mode }) => mode.isDark);
    const isOpen = useSelector(({ menu }) => menu.isOpen);
    const dispatch = useDispatch();

    return (
        <>
            {isOpen ? (
                <S.Background onClick={() => dispatch(toggleMenu())}>
                    <S.ModalContainer onClick={(e) => e.stopPropagation()}>
                        <div>메뉴</div>
                        <S.CloseIcon
                            onClick={() => dispatch(toggleMenu())}
                        ></S.CloseIcon>
                        <S.MenuContainer>
                            <NavLink exact to="/">
                                <S.DomesticStatus
                                    onClick={() => dispatch(toggleMenu())}
                                >
                                    국내 현황
                                </S.DomesticStatus>
                            </NavLink>
                            <NavLink exact to="/world">
                                <S.News onClick={() => dispatch(toggleMenu())}>
                                    세계 현황
                                </S.News>
                            </NavLink>

                            <div onClick={() => dispatch(changeMode())}>
                                {isDark ? (
                                    <S.Mode>라이트 모드</S.Mode>
                                ) : (
                                    <S.Mode>다크 모드</S.Mode>
                                )}
                            </div>

                            <S.GithubLink
                                target="_blank"
                                href="https://github.com/tlatjdgh3778/COVID19"
                                alt="githubLink"
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
