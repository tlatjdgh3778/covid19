import React from 'react';
import styled from 'styled-components';

const SideBarTitleContainer = styled.div`
padding: 2rem 1rem;
font-weight: 700;
font-size: ${(props) => props.theme.fontSize.md};

    @media ${(props) => props.theme.device.TabletPortrait}{
        padding: 0;
    }
`;

function SideBarTitle() {
    return(
        <SideBarTitleContainer>
            COVID19 TRACKER
        </SideBarTitleContainer>
    );
}
export default SideBarTitle;