import React from 'react';
import * as S from './SideBarFooter.style';

function SideBarFooter({changeTheme, isDark}){

    const onClick = () => {
        changeTheme(isDark);
    }

    return(
        <S.SideBarFooterContainer>
                <div onClick={onClick}>
                {isDark?<S.LightModeIcon />:<S.DarkModeIcon />}
                </div>
                <S.GithubLink target="_blank" href="https://github.com/tlatjdgh3778/COVID19"
                alt="githubLink">
                    <S.GithubIcon />
                </S.GithubLink>
        </S.SideBarFooterContainer>
    );
}

export default SideBarFooter;