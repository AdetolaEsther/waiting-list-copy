// theme.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        mobile: true;
        tablet: true;
        miniLaptops: true;
        laptop: true;
        thirteenInch: true;
        sixteenInch: true;
        desktop: true;
    }
}
