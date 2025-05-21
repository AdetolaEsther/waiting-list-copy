"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import JoinButton from "./JoinButton";

const steps = [
    {
        icon: "/1.png",
        title: "Shop",
        description: "Browse and select products from verified merchants.",
    },
    {
        icon: "/2.png",
        title: "Pay Securely",
        description: "Your funds are held in escrow for added safety.",
    },
    {
        icon: "/3.png",
        title: "Track Your Order",
        description:
            "Get real-time updates from your selected delivery partner.",
    },
    {
        icon: "/4.png",
        title: "Confirm Delivery",
        description:
            "Release payment only after confirming the product matches your expectations.",
    },
];

const StepCard = ({
    icon,
    title,
    description,
    offset = false,
}: {
    icon: string;
    title: string;
    description: string;
    offset?: boolean;
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "flex-start",
                px: 2,
                pt: offset ? 6 : 0, 
            }}
        >
            <Box
                sx={{
                    width: 48,
                    height: 48,
                    mb: 2,
                }}
            >
                <Image src={icon} alt={title} width={48} height={48} />
            </Box>
            <Typography variant="subtitle1" fontWeight={600} mb={1}>
                {title}:
            </Typography>
            <Typography
                color="text.secondary"
                fontSize="0.95rem"
                lineHeight={1.6}
                maxWidth={260}
            >
                {description}
            </Typography>
        </Box>
    );
};

const HowItWorksSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <Box bgcolor="#fff" py={16} px={3} ref={sectionRef}>
            <Stack
                maxWidth="1100px"
                mx="auto"
                spacing={10}
                alignItems="center"
                sx={{
                    textAlign: "center",
                    px: { xs: 2, md: 4 },
                }}
            >
                <Typography variant="h4" fontWeight={700}>
                    How It Works
                </Typography>

                <Stack
                    direction="row"
                    spacing={4}
                    justifyContent="center"
                    alignItems="stretch"
                    width="100%"
                    position="relative"
                >
                    <Stack spacing={8} flex={1}>
                        <StepCard {...steps[0]} offset={false} />
                        <StepCard {...steps[2]} offset={true} />
                    </Stack>
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                            width: "4px",
                            mx: 2,
                            bgcolor: inView ? "#5D5FEF" : "#ccc",
                            transition: "background-color 0.5s ease",
                            borderRadius: 2,
                        }}
                    />
                    <Stack spacing={8} flex={1}>
                        <StepCard {...steps[1]} offset={true} />
                        <StepCard {...steps[3]} offset={false} />
                    </Stack>
                </Stack>

                <Box mt={6}>
                    <JoinButton />
                </Box>
            </Stack>
        </Box>
    );
};

export default HowItWorksSection;
