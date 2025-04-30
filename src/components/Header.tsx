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
                    padding: "20px 50px",
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
                            <Typography sx={{ color: "#282828A6" }}>
                                Products
                            </Typography>
                            <Typography sx={{ color: "#282828A6" }}>
                                Feature
                            </Typography>
                            <Typography sx={{ color: "#282828A6" }}>
                                FAQ
                            </Typography>
                        </Stack>

                        <Button
                            sx={{
                                backgroundColor: "#5F45FC",
                                color: "#FCFCFC",
                                fontSize: "0.70rem",
                            }}
                        >
                            Get Started
                        </Button>
                    </>
                )}
            </Stack>

            {/* Modal Menu */}
            <Modal open={open} onClose={handleClose}>
                <MuiBox
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
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

                    <Typography sx={{ color: "#282828A6", fontSize: "1.2rem" }}>
                        Products
                    </Typography>
                    <Typography sx={{ color: "#282828A6", fontSize: "1.2rem" }}>
                        Feature
                    </Typography>
                    <Typography sx={{ color: "#282828A6", fontSize: "1.2rem" }}>
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
