import { Typography, Box, Stack, Button } from "@mui/material";
import React from "react";
import Image from "next/image";

const Features = () => {
    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="center"
            justifyContent="space-between"
            sx={{
                px: "204px",
                py: "100px",
                gap: "1px",
            }}
        >
            {/* ⬅️ Image on the left */}
            <Box
                sx={{
                    flex: 1,
                    position: "relative",
                    height: { xs: 300, md: 400 },
                    width: "100%",
                }}
            >
                <Image
                    src="/shoopingcart.png"
                    alt="Hero Image"
                    layout="fill"
                    objectFit="contain"
                />
            </Box>

            <Stack spacing={3} sx={{ flex: 1, maxWidth: "600px" }}>
                <Typography variant="h4" fontWeight={700}>
                    Key Features{" "}
                </Typography>

                <Button
                    sx={{
                        backgroundColor: "#5F45FC",
                        color: "#fff",
                        padding: "10px 24px",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        textTransform: "none",
                        width: "fit-content",
                        "&:hover": {
                            backgroundColor: "#4C3EC0",
                        },
                    }}
                >
                    Join the Waiting List Now{" "}
                </Button>
            </Stack>
        </Stack>
    );
};

export default Features;
