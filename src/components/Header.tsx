import { Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
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
                    <Image src="/Union.png" alt="MHS Logo" fill />
                </Box>
                <Typography fontWeight={700}>Safe Keeper</Typography>
            </Stack>

            <Stack direction="row" spacing={3} justifyContent="center">
                <Typography sx={{ color: "#282828A6" }}>Products</Typography>
                <Typography sx={{ color: "#282828A6" }}>Feature</Typography>
                <Typography sx={{ color: "#282828A6" }}>FAQ</Typography>
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
        </Stack>
    );
};

export default Header;
