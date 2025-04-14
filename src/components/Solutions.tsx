import { Box, Stack, Typography, Button, Card } from "@mui/material";
import Image from "next/image";

const features = [
    {
        title: "Peace of Mind for Shoppers",
        description:
            "Never worry about lost payments or incorrect orders. Safe Keeper holds your payment securely until you confirm successful delivery.",
    },
    {
        icon: "/delivery.png",
        title: "Empowered Merchants",
        description:
            "Showcase your products with confidence, gain insights on competitors, and provide seamless delivery options for your customers.",
    },
    {
        icon: "/sales-man.png",
        title: "Seamless Delivery Integration",
        description:
            "Choose your preferred delivery partner and track your order every step of the way.",
    },
];

const Solution = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#FCFCFC",
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
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "32px",
                    mb: 4,
                }}
            >
                {features.slice(0, 2).map((item, index) => (
                    <Card
                        key={index}
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
                            {item.icon && (
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={48}
                                    height={48}
                                />
                            )}
                            <Typography
                                sx={{ fontWeight: 600, fontSize: "18px" }}
                            >
                                {item.title}
                            </Typography>
                            <Typography color="#5B5B5B" fontSize="15px">
                                {item.description}
                            </Typography>
                        </Stack>
                    </Card>
                ))}
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
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
                        {features[2].icon && (
                            <Image
                                src={features[2].icon}
                                alt={features[2].title}
                                width={48}
                                height={48}
                            />
                        )}
                        <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                            {features[2].title}
                        </Typography>
                        <Typography color="#5B5B5B" fontSize="15px">
                            {features[2].description}
                        </Typography>
                    </Stack>
                </Card>
            </Box>

            <Box textAlign="center" mt={8}>
                <Button
                    sx={{
                        backgroundColor: "#5F45FC",
                        color: "#FCFCFC",
                        fontSize: "16px",
                        padding: "12px 24px",
                        borderRadius: "8px",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: "#4C3EC0",
                        },
                    }}
                >
                    Join the Waiting List Now
                </Button>
            </Box>
        </Box>
    );
};

export default Solution;
