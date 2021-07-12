import React from 'react';
// import React, { useEffect, useState, useContext } from 'react';
import WorldStatus from 'components/World/WorldStatus/WorldStatus';
import WorldStatusChart from 'components/World/WorldStatusChart/WorldStatusChart';
import Countries from 'components/World/Countries/Countries';
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