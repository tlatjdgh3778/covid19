import React from 'react';
import styled from 'styled-components';

const SideBarTitleContainer = styled.div`
padding: 2rem 1rem;
font-weight: 700; 
font-size: ${(props) => props.theme.fontSize.md};

    @media ${(props) => props.theme.device.TabletPortrait}{
        padding: 0;
        display: flex;
    }
`;
const Title = styled.div`
    @media ${(props) => props.theme.device.TabletPortrait}{
        padding: 0 0.25rem;
    }
`;

function SideBarTitle() {
    return(
        <>
        <SideBarTitleContainer>
            <Title>COVID 19 </Title>
            <Title>TRACKER</Title>
        </SideBarTitleContainer>
        </>
    );
}
export default SideBarTitle;