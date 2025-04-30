import { Typography, Box, Stack, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import JoinButton from "./JoinButton";

const features = [
    {
        title: "For Shoppers:",
        items: [
            "Secure Payments: Funds are held safely until you confirm receipt of your order.",
            "Real-Time Order Tracking: Stay updated on where your package is, from checkout to doorstep.",
            "Financial Control: A dedicated wallet to manage your transactions easily and safely.",
        ],
    },
    {
        title: "For Store Owners:",
        items: [
            "Secure Payments: Funds are held safely until you confirm receipt of your order.",
            "Real-Time Order Tracking: Stay updated on where your package is, from checkout to doorstep.",
            "Financial Control: A dedicated wallet to manage your transactions easily and safely.",
        ],
    },
];

const Features = () => {
    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: { xs: 4, md: "204px" }, py: { xs: 6, md: "100px" } }}
        >
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
                    alt="Shopping Cart"
                    layout="fill"
                    objectFit="contain"
                />
            </Box>

            <Stack spacing={3} sx={{ flex: 1, maxWidth: "600px" }}>
                <Typography variant="h4" fontWeight={700}>
                    Key Features
                </Typography>

                {features.map((section, idx) => (
                    <Box key={idx}>
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            color="#5F45FC"
                            mb={1}
                        >
                            {section.title}
                        </Typography>
                        <Stack spacing={1}>
                            {section.items.map((item, i) => (
                                <Stack
                                    direction="row"
                                    alignItems="flex-start"
                                    spacing={1}
                                    key={i}
                                >
                                    {/* <CheckIcon
                                        sx={{ color: "#282828", mt: "3px" }}
                                    /> */}
                                    <Image
                                        src="/check.png"
                                        alt="Check"
                                        width={20}
                                        height={20}
                                    />

                                    <Typography
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {item}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                ))}

                <JoinButton />
            </Stack>
        </Stack>
    );
};

export default Features;
