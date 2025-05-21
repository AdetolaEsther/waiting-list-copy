import { Box, Stack, Typography, Card } from "@mui/material";
import Image from "next/image";
import JoinButton from "./JoinButton";

const features = [
    {
        icon: "/peace-of-mind.gif",
        title: "Peace of Mind for Shoppers",
        description:
            "Never worry about lost payments or incorrect orders. Safe Keeper holds your payment securely until you confirm successful delivery.",
    },
    {
        icon: "/empower-merchants.gif",
        title: "Empowered Merchants",
        description:
            "Showcase your products with confidence, gain insights on competitors, and provide seamless delivery options for your customers.",
    },
    {
        icon: "/seemless-delivery.gif",
        title: "Seamless Delivery Integration",
        description:
            "Choose your preferred delivery partner and track your order every step of the way.",
    },
];

const FeatureCard = ({
    icon,
    title,
    description,
}: (typeof features)[number]) => (
    <Card
        sx={{
            p: 4,
            maxWidth: 300,
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "none",
        }}
    >
        <Stack spacing={2}>
            <Image src={icon} alt={title} width={70} height={70} />
            <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                {title}
            </Typography>
            <Typography color="#5B5B5B" fontSize="15px">
                {description}
            </Typography>
        </Stack>
    </Card>
);

const Solution = () => {
    return (
        <Box
            sx={{
                px: { xs: 4, md: "204px" },
                py: { xs: 8, md: "100px" },
            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 700, mb: 6 }}
            >
                Why Safe Keeper?
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "32px",
                    mb: 4,
                }}
            >
                {features.slice(0, 2).map((item, index) => (
                    <FeatureCard key={index} {...item} />
                ))}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                <FeatureCard {...features[2]} />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <JoinButton />
            </Box>
        </Box>
    );
};

export default Solution;
