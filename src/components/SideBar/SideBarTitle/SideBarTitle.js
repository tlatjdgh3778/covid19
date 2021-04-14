import React from 'react';
import styled from 'styled-components';

const SideBarTitleContainer = styled.div`
padding: 2rem 1rem;

    @media ${(props) => props.theme.device.TabletPortrait}{
        padding: 0;
    }
`;

function SideBarTitle() {
    return(
        <SideBarTitleContainer>
            COVID19 KOREA
        </SideBarTitleContainer>
    );
}
export default SideBarTitle;