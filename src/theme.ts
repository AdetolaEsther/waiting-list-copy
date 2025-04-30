// theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    breakpoints: {
        keys: [
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
           
        ],
        values: {
            xs: 0,
            sm: 390,
            md: 810,
            lg: 1200,
            xl: 1536,
            
        },
    },
});
