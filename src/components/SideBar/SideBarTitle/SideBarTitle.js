import React from 'react';
import styled from 'styled-components';

const SideBarTitleContainer = styled.div`
border: 1px solid blue;
padding: 2rem 0;
`;

function SideBarTitle() {
    return(
        <SideBarTitleContainer>
            COVID19 KOREA
        </SideBarTitleContainer>
    );
}
export default SideBarTitle;