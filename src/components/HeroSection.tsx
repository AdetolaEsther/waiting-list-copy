import { Stack, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import JoinButton from "./JoinButton";

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={isMobile ? 6 : 10}
            alignItems="center"
            justifyContent="space-between"
            sx={{
                px: { xs: 3, md: "204px" },
                py: { xs: 6, md: "100px" },
                textAlign: { xs: "center", md: "left" },
            }}
        >
            {/* Text Section */}
            <Stack
                spacing={3}
                sx={{
                    flex: 1,
                    maxWidth: "600px",
                    alignItems: { xs: "center", md: "flex-start" },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "28px", md: "48px" },
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
                        fontSize: { xs: "16px", md: "18px" },
                        lineHeight: "1.6",
                        maxWidth: { xs: "100%", md: "500px" },
                    }}
                >
                    Your ultimate e-commerce and financial security platform—
                    protecting your payments and simplifying your shopping
                    experience.
                </Typography>

                <Box
                    sx={{
                        width: { xs: "100%", md: "auto" },
                        mt: { xs: 2, md: 0 },
                    }}
                >
                    <JoinButton />
                </Box>
            </Stack>

            {/* Image Section */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    mt: { xs: 6, md: 0 },
                    width: "100%",
                }}
            >
                {/* Gradient Circle */}
                <Box
                    sx={{
                        width: { xs: 250, md: 350 },
                        height: { xs: 250, md: 350 },
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, #FF69B4 0%, #87CEFA 100%)",
                        position: "absolute",
                        zIndex: 0,
                    }}
                />

                {/* Hero Image */}
                <Box
                    sx={{
                        position: "relative",
                        width: { xs: 300, md: 450 },
                        height: { xs: 300, md: 450 },
                        zIndex: 1,
                    }}
                >
                    <Image
                        src="/hero.png"
                        alt="Hero Image"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </Box>
            </Box>
        </Stack>
    );
};

export default HeroSection;
