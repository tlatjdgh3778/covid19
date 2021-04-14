import React from 'react';
import styled from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid';
import SideBarContent from '../SideBarContent/SideBarContent';

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 0;
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
    background: rgb(25, 31, 44);
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
height: 90%;
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
function SideBarModal({showModal, setShowModal, closeModal}) {

    const onNewsClick = () => {
        console.log("news");
    }
    const onDomesticClick = () => {
        console.log("국내");
    }
    return(
        <>
        {showModal ? 
        <Background onClick={closeModal}>
            <ModalContainer>
                <div>메뉴</div>
                <CloseIcon onClick={closeModal}></CloseIcon>
                {/* <MenuContainer>
                    <DomesticStatus onClick={onDomesticClick}>국내 현황</DomesticStatus>
                    <News onClick={onNewsClick}>뉴스</News>
                </MenuContainer> */}
            </ModalContainer>
        </Background> : null}
        </>
    );
}

export default SideBarModal;