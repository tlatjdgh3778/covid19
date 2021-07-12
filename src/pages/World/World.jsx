import React from 'react';
import { WorldStatus, WorldStatusChart, Countries } from 'components/World/index';

import * as GS from 'style/Component.style';

const World = ({ world }) => {

    return(
        <>
            <GS.LeftContainer>
                <WorldStatus worldData={world.worldData} />
                <WorldStatusChart />
            </GS.LeftContainer>
            <GS.RightContainer>
                <Countries countriesData={world.countriesData}></Countries>
            </GS.RightContainer>
        </>
    );
}

export default World;