import { Box, Stack, Typography, Divider } from "@mui/material";
import JoinButton from "./JoinButton";

const steps = [
    {
        title: "Shop",
        description: "Browse and select products from verified merchants.",
    },
    {
        title: "Pay Securely",
        description: "Your funds are held in escrow for added safety.",
    },
    {
        title: "Track Your Order",
        description:
            "Get real-time updates from your selected delivery partner.",
    },
    {
        title: "Confirm Delivery",
        description:
            "Release payment only after confirming the product matches your expectations.",
    },
];

const StepCard = ({
    number,
    title,
    description,
}: {
    number: number;
    title: string;
    description: string;
}) => {
    return (
        <Stack
            direction="row"
            spacing={4}
            alignItems="flex-start"
            p={3}
            sx={{
                // backgroundColor: "#F9F9FF",
                borderRadius: 2,
                minHeight: 160,
            }}
        >
            <Box
                sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#33DCE4",
                    color: "#5F45FC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    fontWeight: 700,
                    fontSize: 18,
                    flexShrink: 0,
                    mt: 1,
                }}
            >
                {number}
            </Box>
            <Box>
                <Typography variant="h5" fontWeight={600} mb={1}>
                    {title}
                </Typography>
                <Typography color="text.secondary" fontSize="1.1rem">
                    {description}
                </Typography>
            </Box>
        </Stack>
    );
};

const HowItWorksSection = () => {
    return (
        <Box bgcolor="#fff" py={16} px={3}>
            <Stack maxWidth={1200} mx="auto" direction="column" spacing={8}>
                <Typography
                    variant="h4"
                    fontWeight={700}
                    textAlign="center"
                    mb={4}
                >
                    How It Works
                </Typography>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={8}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    <Stack spacing={10} flex={1}>
                        {[0, 2].map((i) => (
                            <StepCard
                                key={i}
                                number={i + 1}
                                title={steps[i].title}
                                description={steps[i].description}
                            />
                        ))}
                    </Stack>

                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ bgcolor: "#5D5FEF", width: "3px" }}
                    />

                    <Stack spacing={10} flex={1}>
                        {[1, 3].map((i) => (
                            <StepCard
                                key={i}
                                number={i + 1}
                                title={steps[i].title}
                                description={steps[i].description}
                            />
                        ))}
                    </Stack>
                </Stack>
                <JoinButton />
            </Stack>
        </Box>
    );
};

export default HowItWorksSection;
