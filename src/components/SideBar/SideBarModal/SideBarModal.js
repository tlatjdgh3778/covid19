import React from 'react';
import styled from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid';
import { Github } from '@styled-icons/boxicons-logos';
import { NavLink } from 'react-router-dom';

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.5);;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 20rem;
    height: 80%;
    padding: 16px;
    background: ${(props) => props.theme.color.bgColor};
    border-radius: 10px;
    text-align: center;

    @media ${(props) => props.theme.device.MobileLandscape}{
        width: 90%;
    }
`;

const MenuContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 80%;
padding-top: 3rem;
`;
const CloseIcon = styled(Close)`
position: absolute;
top: 0.5rem;
right: 0.5rem;
width: 2rem;
cursor: pointer;
`;

const DomesticStatus = styled.div`
padding: 1rem 0;
cursor: pointer;
border-radius: 10px;

    &:hover {
        background-color: ${(props) => props.theme.color.hoverColor};
    }
`;

const News = styled.div`
padding: 1rem 0;
cursor: pointer;
border-radius: 10px;

    &:hover {
        background-color: ${(props) => props.theme.color.hoverColor};
    }
`;

const Mode = styled.div`
padding: 1rem 0;
cursor: pointer;
border-radius: 10px;
`;

const GithubContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;
const GithubIcon = styled(Github)`
color: ${(props) => props.theme.color.fontColor};
width: 2rem;
margin-right: 0.5rem;
`;
const GithubLink = styled(GithubContainer.withComponent('a'))`
`;

function SideBarModal({showModal, closeModal, changeTheme, isDark}) {

    const onNewsClick = () => {
        console.log("news");
    }
    const onDomesticClick = () => {
        console.log("국내");
    }

    const onClick = () => {
        changeTheme(isDark);
    }
    return(
        <>
        {showModal ? 
        <Background onClick={closeModal}>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <div>메뉴</div>
                <CloseIcon onClick={closeModal}></CloseIcon>
                <MenuContainer>
                <NavLink exact to="/">
                    <DomesticStatus onClick={onDomesticClick}>국내 현황</DomesticStatus>
                </NavLink>
                <NavLink exact to="/world">
                    <News onClick={onNewsClick}>세계 현황</News>
                </NavLink>
                    
                    <div onClick={onClick}>
                    {isDark?<Mode>라이트 모드</Mode>:<Mode>다크 모드</Mode>}
                    </div>

                    <GithubLink target="_blank" href="https://github.com/tlatjdgh3778/COVID19" alt="githubLink">
                        <GithubContainer>
                            <GithubIcon></GithubIcon>
                            <div>Github</div>
                        </GithubContainer>
                    </GithubLink>
                </MenuContainer>
            </ModalContainer>
        </Background> : null}
        </>
    );
}

export default SideBarModal;