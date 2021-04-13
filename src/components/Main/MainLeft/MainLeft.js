import React from 'react';
import styled from 'styled-components';

const MainLeftContainer = styled.div`
border: 1px solid white;
margin-right: 2.5rem;
min-height: 60rem;
color: white;
`;
function MainLeft() {

    return(
        <MainLeftContainer>Left</MainLeftContainer>
    );
}

export default MainLeft;