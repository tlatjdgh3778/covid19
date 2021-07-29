import React from "react";
import * as S from "./SideBarFooter.style";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "store/modules/mode";

const SideBarFooter = () => {
    const isDark = useSelector(({ mode }) => mode.isDark);
    const dispatch = useDispatch();

    return (
        <S.SideBarFooterContainer>
            <div onClick={() => dispatch(changeMode())}>
                {isDark ? <S.LightModeIcon /> : <S.DarkModeIcon />}
            </div>
            <S.GithubLink
                target="_blank"
                href="https://github.com/tlatjdgh3778/COVID19"
                alt="githubLink"
            >
                <S.GithubIcon />
            </S.GithubLink>
        </S.SideBarFooterContainer>
    );
};

export default SideBarFooter;
