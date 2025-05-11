import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/theme";
import { Provider } from "react-redux";
import { store } from "@/store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
                <ToastContainer position="top-right" autoClose={7000} />
            </ThemeProvider>
        </Provider>
    );
}
