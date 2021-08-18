import styled from "styled-components";
import { Close } from "@styled-icons/evaicons-solid";
import { Github } from "@styled-icons/boxicons-logos";

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.5);
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
    background: ${({ theme }) => theme.color.bgColor};
    border-radius: 10px;
    text-align: center;

    @media ${({ theme }) => theme.device.MobileLandscape} {
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
        background-color: ${({ theme }) => theme.color.hoverColor};
    }
`;

const News = styled.div`
    padding: 1rem 0;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.color.hoverColor};
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
    color: ${({ theme }) => theme.color.fontColor};
    width: 2rem;
    margin-right: 0.5rem;
`;
const GithubLink = styled(GithubContainer.withComponent("a"))``;

export {
    Background,
    ModalContainer,
    MenuContainer,
    CloseIcon,
    DomesticStatus,
    News,
    Mode,
    GithubContainer,
    GithubIcon,
    GithubLink,
};
