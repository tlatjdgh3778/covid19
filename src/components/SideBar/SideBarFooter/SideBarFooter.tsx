import React from "react";
import * as S from "./SideBarFooter.style";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "store/modules/mode";
import { RootState } from "store/index";

const SideBarFooter = () => {
    const isDark = useSelector((state: RootState) => state.mode.isDark);
    const dispatch = useDispatch();

    const onChangeMode = () => {
        dispatch(changeMode());
    };
    return (
        <S.SideBarFooterContainer>
            <div onClick={onChangeMode}>{isDark ? <S.LightModeIcon /> : <S.DarkModeIcon />}</div>
            <S.GithubLink target="_blank" href="https://github.com/tlatjdgh3778/COVID19">
                <S.GithubIcon />
            </S.GithubLink>
        </S.SideBarFooterContainer>
    );
};

export default SideBarFooter;
