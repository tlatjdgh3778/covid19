import React from "react";
import {
    WorldStatus,
    WorldStatusChart,
    WorldCountriesStatus,
} from "components/World/index";

import * as GS from "style/Component.style";

const World = () => {
    return (
        <>
            <GS.LeftContainer>
                <WorldStatus />
                <WorldCountriesStatus></WorldCountriesStatus>
            </GS.LeftContainer>
            <GS.RightContainer>
                <WorldStatusChart />
            </GS.RightContainer>
        </>
    );
};

export default World;
