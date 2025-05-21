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
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useJoinWaitlistMutation } from "@/apis/api";
import { toast } from "react-toastify";


export default function FAQAndFooter() {
const [expanded, setExpanded] = useState<number | null>(null);
  const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      email: "",
  });

  const [joinWaitlist, { isLoading }] = useJoinWaitlistMutation();

 const handleSubscribe = async (e: React.FormEvent) => {
     try {
         await joinWaitlist(formData).unwrap();
         toast.success("Successfully joined!");
         setFormData({ first_name: "", last_name: "", email: "" });
     } catch (error: any) {
         const errorMsg =
             error?.data?.message ||
             error?.message ||
             "Something went wrong. Please try again.";
         toast.error(errorMsg);
     }
 };


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
                                        a: "Safe Keeper is an innovative platform that combines e-commerce and financial services to ensure secure shopping and selling experiences.",
                                    },
                                    {
                                        q: "How does Safe Keeper ensure secure payments?",
                                        a: "We hold your payment in a secure account until you confirm you’ve received your order as expected.",
                                    },
                                    {
                                        q: "Can merchants also benefit from Safe Keeper?",
                                        a: "Absolutely! Merchants can manage their products, access competitor insights, and integrate with reliable delivery services.",
                                    },
                                ].map((item, idx) => (
                                    <Accordion
                                        key={idx}
                                        expanded={expanded === idx}
                                        onChange={() =>
                                            setExpanded(
                                                expanded === idx ? null : idx
                                            )
                                        }
                                        disableGutters
                                        elevation={0}
                                        square
                                        sx={{
                                            bgcolor: "transparent",
                                            color: "#fff",
                                            px: 2,
                                            position: "relative",
                                            borderTop: "2px solid transparent",
                                            "&::before": {
                                                content: '""',
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: "2px",
                                                background:
                                                    idx === 0
                                                        ? "linear-gradient(to right, rgba(95, 69, 252, 1), rgba(51, 220, 228, 1))"
                                                        : "linear-gradient(to right, rgba(95, 69, 252, 1), rgba(51, 220, 228, 1))",
                                            },
                                            "&::after": {
                                                content: '""',
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: "2px",
                                                background:
                                                    "linear-gradient(to right, rgba(95, 69, 252, 1), rgba(51, 220, 228, 1))",
                                            },
                                            "&.Mui-expanded::before, &.Mui-expanded::after":
                                                {
                                                    background:
                                                        "linear-gradient(to right, rgba(69, 119, 152, 1), rgba(134, 171, 131, 1), rgba(157, 191, 119, 1))",
                                                },
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={
                                                expanded === idx ? (
                                                    <CloseIcon
                                                        sx={{
                                                            color: "#99CC66",
                                                        }}
                                                    />
                                                ) : (
                                                    <AddIcon
                                                        sx={{
                                                            color: "#33DCE4",
                                                        }}
                                                    />
                                                )
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
                    <Stack alignItems="center" spacing={1}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Box
                                sx={{
                                    width: 32,
                                    height: 32,
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "50%",
                                    marginTop: 2,
                                }}
                            >
                                <Image src="/Union.png" alt="Logo" fill />
                            </Box>
                            <Typography
                                fontWeight={700}
                                variant="h6"
                                color="#fff"
                            >
                                Safe Keeper
                            </Typography>
                        </Stack>
                        <Typography
                            fontWeight={700}
                            sx={{ fontSize: "24px", lineHeight: "40px" }}
                            color="#fff"
                        >
                            Shop smarter, safer and stress free.
                        </Typography>
                    </Stack>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        justifyContent="space-between"
                        alignItems={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "left" }}
                        spacing={4}
                        mb={6}
                        marginTop={2}
                    >
                        <Stack direction="row" spacing={4} alignItems="center">
                            <TextField
                                name="first_name"
                                placeholder="First Name"
                                variant="outlined"
                                value={formData.first_name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        color: "#FCFCFC",
                                        borderColor: "#fff",
                                        "& fieldset": {
                                            borderColor: "#fff",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#fff",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#fff",
                                        },
                                    },
                                    "& input": {
                                        color: "#fff",
                                    },
                                    borderRadius: 2,
                                }}
                            />
                            <TextField
                                name="last_name"
                                placeholder="Last Name"
                                variant="outlined"
                                size="small"
                                value={formData.last_name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        color: "#FCFCFC",
                                        borderColor: "#fff",
                                        "& fieldset": {
                                            borderColor: "#fff",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#fff",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#fff",
                                        },
                                    },
                                    "& input": {
                                        color: "#fff",
                                    },
                                }}
                            />
                            <TextField
                                name="email"
                                placeholder="example@email.com"
                                variant="outlined"
                                size="small"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        color: "#FCFCFC",
                                        borderColor: "#fff",
                                        "& fieldset": {
                                            borderColor: "#fff",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#fff",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#fff",
                                        },
                                    },
                                    "& input": {
                                        color: "#fff",
                                    },
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
                                onClick={handleSubscribe}
                            >
                                Subscribe to News Letter{" "}
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
                        <Stack spacing={2}>
                            <Typography
                                fontWeight={700}
                                sx={{ fontSize: "16px", color: "#FCFCFC" }}
                            >
                                Company
                            </Typography>
                            <Typography>About</Typography>
                            <Typography>Features</Typography>
                            <Typography>Works</Typography>
                            <Typography>Career</Typography>
                        </Stack>

                        <Stack spacing={2}>
                            <Typography
                                fontWeight={700}
                                sx={{ fontSize: "16px", color: "#FCFCFC" }}
                            >
                                Help
                            </Typography>
                            <Typography>Customer Support</Typography>
                            <Typography>Delivery Details</Typography>
                            <Typography>Terms & Conditions</Typography>
                            <Typography>Privacy Policy</Typography>
                        </Stack>

                        <Stack spacing={2}>
                            <Typography
                                fontWeight={700}
                                sx={{ fontSize: "16px", color: "#FCFCFC" }}
                            >
                                Resources
                            </Typography>
                            <Typography>Free ebooks</Typography>
                            <Typography>Development Tutorial</Typography>
                            <Typography>How-to Blog</Typography>
                            <Typography>Youtube Playlist</Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        mt={8}
                        spacing={8}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        flexWrap="wrap"
                        gap={8}
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
