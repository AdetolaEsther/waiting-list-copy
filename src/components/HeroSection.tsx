import { Stack, Typography, Button, Box } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
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
            <Stack spacing={3} sx={{ flex: 1, maxWidth: "600px" }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "32px", md: "48px" },
                        fontWeight: 300,
                        lineHeight: "1.2",
                    }}
                >
                    Shop{" "}
                    <Box component="span" sx={{ fontWeight: 700 }}>
                        Smarter, Safer, and Stress-Free
                    </Box>{" "}
                    with Safe Keeper
                </Typography>

                <Typography
                    sx={{
                        color: "#5B5B5B",
                        fontSize: "18px",
                        lineHeight: "1.6",
                        maxWidth: "500px",
                    }}
                >
                    Your ultimate e-commerce and financial security platform—
                    protecting your payments and simplifying your shopping
                    experience.
                </Typography>

                <Button
                    sx={{
                        backgroundColor: "#5F45FC",
                        color: "#FCFCFC",
                        fontSize: "18px",
                        padding: "12px 24px",
                        borderRadius: "8px",
                        textTransform: "none",
                        width: "fit-content",
                        "&:hover": {
                            backgroundColor: "#4C3EC0",
                        },
                    }}
                >
                    Join the Waiting List Now
                </Button>
            </Stack>

            <Box
                sx={{
                    flex: 1,
                    position: "relative",
                    height: { xs: 300, md: 400 },
                    width: "100%",
                }}
            >
                <Image
                    src="/hero.png"
                    alt="Hero Image"
                    layout="fill"
                    objectFit="contain"
                />
            </Box>
        </Stack>
    );
};

export default HeroSection;
