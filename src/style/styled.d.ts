// global style type 작성
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            wallpaperColor: string;
            bgColor: string;
            fontColor: string;

            highlightColor: string;
            hoverColor: string;

            chartConfirmed: string;
            chartRecovered: string;
            chartActived: string;
            chartColor: string;
            chartRed: string;

            iconColor: string;

            confirmedColor: string;
            recoveredColor: string;
            activedColor: string;

            confirmedHover: string;
            recoveredHover: string;
            activedHover: string;
            deathHover: string;
        };
        fontSize: {
            ssm: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        device: {
            MobileLandscape: string;
            TabletPortrait: string;
            TabletLandscape: string;
            Laptops: string;
        };
    }
}
