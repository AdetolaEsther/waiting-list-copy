import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography,
    Stack,
    TextField,
    Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";

export default function FAQAndFooter() {
    return (
        <Box bgcolor="#18181B" color="#fff" py={10} width="100%">
            <Box px={{ xs: 2, md: 6 }}>
                <Box px={2}>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={4}
                        mb={8}
                        maxWidth="1000px"
                        mx="auto"
                    >
                        <Box flex={1}>
                            <Typography
                                variant="subtitle2"
                                color="primary"
                                mb={1}
                            >
                                FAQ
                            </Typography>
                            <Typography variant="h3" fontWeight={700} mb={3}>
                                Answers to our <br />
                                frequently asked <br /> questions
                            </Typography>
                            <Typography variant="body2">
                                You can also email{" "}
                                <a
                                    href="mailto:info@safeKeeper.com"
                                    style={{
                                        color: "#33DCE4",
                                        textDecoration: "none",
                                    }}
                                >
                                    info@safeKeeper.com
                                </a>
                            </Typography>
                        </Box>

                        <Box flex={1}>
                            <Stack spacing={2}>
                                {[
                                    {
                                        q: "What is Safe Keeper?",
                                        a: "Safe Keeper is a platform that helps customers shop safely through escrow-protected transactions.",
                                    },
                                    {
                                        q: "How does Safe Keeper ensure secure payments?",
                                        a: "Funds are held in escrow and released only after order confirmation.",
                                    },
                                    {
                                        q: "Can merchants also benefit from Safe Keeper?",
                                        a: "Yes, it builds trust and helps reduce return rates.",
                                    },
                                ].map((item, idx) => (
                                    <Accordion
                                        key={idx}
                                        disableGutters
                                        elevation={0}
                                        square
                                        sx={{
                                            bgcolor: "#27272A",
                                            color: "#fff",
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={
                                                <AddIcon
                                                    sx={{ color: "#33DCE4" }}
                                                />
                                            }
                                        >
                                            <Typography>{item.q}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>{item.a}</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                </Box>

                <Box maxWidth="1000px" mx="auto">
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        justifyContent="space-between"
                        alignItems={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "left" }}
                        spacing={2}
                        mb={6}
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
                            <Typography fontWeight={700} variant="h6">
                                Safe Keeper
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <TextField
                                placeholder="example@email.com"
                                variant="outlined"
                                size="small"
                                sx={{
                                    bgcolor: "#fff",
                                    borderRadius: "4px",
                                    input: { color: "#000" },
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#5D5FEF",
                                    color: "#fff",
                                    px: 4,
                                    textTransform: "none",
                                }}
                            >
                                Subscribe
                            </Button>
                        </Stack>
                    </Stack>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={4}
                        mt={6}
                        justifyContent="space-between"
                        alignItems={{ xs: "center", md: "flex-start" }}
                        textAlign={{ xs: "center", md: "left" }}
                    >
                        <Stack spacing={1}>
                            <Typography fontWeight={600}>Company</Typography>
                            <Typography>About</Typography>
                            <Typography>Features</Typography>
                            <Typography>Works</Typography>
                            <Typography>Career</Typography>
                        </Stack>

                        <Stack spacing={1}>
                            <Typography fontWeight={600}>Help</Typography>
                            <Typography>Customer Support</Typography>
                            <Typography>Delivery Details</Typography>
                            <Typography>Terms & Conditions</Typography>
                            <Typography>Privacy Policy</Typography>
                        </Stack>

                        <Stack spacing={1}>
                            <Typography fontWeight={600}>Resources</Typography>
                            <Typography>Free ebooks</Typography>
                            <Typography>Development Tutorial</Typography>
                            <Typography>How-to Blog</Typography>
                            <Typography>Youtube Playlist</Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        mt={8}
                        spacing={2}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        flexWrap="wrap"
                        gap={2}
                    >
                        <Stack direction="row" spacing={4}>
                            <FacebookIcon
                                sx={{ cursor: "pointer", fontSize: 24 }}
                            />
                            <TwitterIcon
                                sx={{ cursor: "pointer", fontSize: 24 }}
                            />
                            <InstagramIcon
                                sx={{ cursor: "pointer", fontSize: 24 }}
                            />
                            <GitHubIcon
                                sx={{ cursor: "pointer", fontSize: 24 }}
                            />
                        </Stack>
                        <Typography
                            color="grey.500"
                            sx={{ whiteSpace: "nowrap" }}
                        >
                            Safe Keeper © {new Date().getFullYear()}
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}
