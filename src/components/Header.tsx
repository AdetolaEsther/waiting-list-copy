import { theme } from "@/theme";
import {
    Button,
    Stack,
    Typography,
    useMediaQuery,
    IconButton,
    Modal,
    Box as MuiBox,
} from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import JoinButton from "./JoinButton";

const Header = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    padding: "10px 40px",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                }}
            >
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Box
                        sx={{
                            width: 25,
                            height: 25,
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "50%",
                            marginTop: 2,
                        }}
                    >
                        <Image src="/Union.png" alt="Logo" fill />
                    </Box>
                    <Typography fontSize={14} fontWeight={700}>
                        Safe Keeper
                    </Typography>
                </Stack>

                {isMobile ? (
                    <IconButton onClick={handleOpen}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <>
                        <Stack
                            direction="row"
                            spacing={3}
                            justifyContent="center"
                        >
                            <Typography
                                sx={{ color: "#282828A6", cursor: "pointer" }}
                                onClick={() => {
                                    document
                                        .getElementById("how-it-works-section")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                Products
                            </Typography>

                            <Typography
                                sx={{ color: "#282828A6", cursor: "pointer" }}
                                onClick={() => {
                                    document
                                        .getElementById("features-section")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                Feature
                            </Typography>

                            <Typography
                                sx={{ color: "#282828A6", cursor: "pointer" }}
                                onClick={() => {
                                    document
                                        .getElementById("faq-section")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                FAQ
                            </Typography>
                        </Stack>

                        <JoinButton />
                    </>
                )}
            </Stack>

            <Modal open={open} onClose={handleClose}>
                <MuiBox
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "40px 20px",
                        gap: 3,
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{ alignSelf: "flex-end" }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Box
                            sx={{
                                width: 32,
                                height: 32,
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: "50%",
                            }}
                        >
                            <Image src="/Union.png" alt="Logo" fill />
                        </Box>
                        <Typography fontWeight={700}>Safe Keeper</Typography>
                    </Stack>

                    <Typography
                        sx={{
                            color: "#282828A6",
                            fontSize: "1.2rem",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            handleClose();
                            document
                                .getElementById("how-it-works-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Products
                    </Typography>
                    <Typography
                        sx={{
                            color: "#282828A6",
                            fontSize: "1.2rem",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            handleClose();
                            document
                                .getElementById("features-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Feature
                    </Typography>

                    <Typography
                        sx={{
                            color: "#282828A6",
                            fontSize: "1.2rem",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            handleClose();
                            document
                                .getElementById("faq-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        FAQ
                    </Typography>

                    <Button
                        sx={{
                            backgroundColor: "#5F45FC",
                            color: "#FCFCFC",
                            fontSize: "0.9rem",
                            marginTop: "20px",
                        }}
                    >
                        Get Started
                    </Button>
                </MuiBox>
            </Modal>
        </>
    );
};

export default Header;
