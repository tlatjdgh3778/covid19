import React from 'react';
import styled from 'styled-components';
import { Home, News } from '@styled-icons/boxicons-regular'
import { NavLink } from 'react-router-dom';

const SideBarContentContainer = styled.div`
text-align: center;
width: 100%;

    @media ${(props) => props.theme.device.TabletPortrait}{
        display: none;
    }
`;

const DomesticContainer = styled.div`
display: flex;
cursor: pointer;
align-items: center;
margin: 1rem 0;
padding: 0.5rem 1rem;
    &:hover {
        background-color: ${(props) => props.theme.color.hoverColor};
    }

`;
const DomesticStatus = styled.div`
`;
const HomeIcon = styled(Home)`
margin-right: 0.5rem;
width: 2rem;
padding-left: 0.5rem;
`;

const NewsContainer = styled.div`
display: flex;
cursor: pointer;
align-items: center;
margin: 1rem 0;
padding: 0.5rem 1rem;
    &:hover {
        background-color: ${(props) => props.theme.color.hoverColor};
    }
`;
const NewsContent = styled.div`
`;
const NewsIcon = styled(News)`
margin-right: 0.5rem;
width: 2rem;
padding-left: 0.5rem;
`;

function SideBarContent() {
    const onClick = e => {
        if(e.currentTarget.className.includes('domestic'))
        {
            console.log('domestic');
        }else if(e.currentTarget.className.includes('news')){
            console.log('news');
        }
    }
    
    return(
        <SideBarContentContainer>
            <NavLink exact to="/">
                <DomesticContainer>
                    <HomeIcon/>
                    <DomesticStatus>
                    국내 현황
                    </DomesticStatus>
                </DomesticContainer>   
            </NavLink>
            <NavLink to="/world">
                <NewsContainer> 
                    <NewsIcon/>
                    <NewsContent>세계 현황</NewsContent>
                </NewsContainer>    
            </NavLink>
        </SideBarContentContainer>
    );
}

export default SideBarContent;