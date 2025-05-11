import {
    Box,
    Button,
    Modal,
    Typography,
    TextField,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useJoinWaitlistMutation } from "@/apis/api";
import { LoadingButton } from "@mui/lab";


const JoinButton = () => {
    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
    });
    const [joinWaitlist, { isLoading, isSuccess, isError }] =
        useJoinWaitlistMutation();

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await joinWaitlist(formData);
};

    return (
        <>
            <Box textAlign="center" mt={8}>
                <Button
                    onClick={() => setOpen(true)}
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

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "#FFFFFF",
                        borderRadius: "12px",
                        boxShadow: 24,
                        p: { xs: 3, sm: 5 },
                        width: { xs: "90%", sm: 500 },
                        maxHeight: "90vh",
                        overflowY: "auto", // Enables scrolling if modal is too tall
                    }}
                >
                    <IconButton
                        onClick={() => setOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            color: "#5F45FC",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        fontWeight={600}
                        mb={1}
                        sx={{ fontSize: { xs: "18px", sm: "24px" } }}
                    >
                        Sign Up to our Waiting List
                    </Typography>
                    <Typography
                        sx={{
                            color: "#666",
                            mb: 3,
                            fontSize: { xs: "14px", sm: "16px" },
                        }}
                    >
                        Be the first to know when we launch.
                    </Typography>

                    <Box
                        component="form"
                        display="flex"
                        flexDirection="column"
                        gap={2}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            label="First Name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            fullWidth
                            variant="outlined"
                            size="small"
                        />

                        <TextField
                            label="Last Name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            fullWidth
                            variant="outlined"
                            size="small"
                        />

                        <TextField
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            fullWidth
                            variant="outlined"
                            size="small"
                        />

                        <LoadingButton
                            type="submit"
                            loading={isLoading}
                            disabled={isLoading}
                            sx={{
                                backgroundColor: "#5F45FC",
                                color: "#fff",
                                textTransform: "none",
                                fontSize: "16px",
                                mt: 2,
                                borderRadius: "8px",
                                py: 1.5,
                                "&:hover": {
                                    backgroundColor: "#4C3EC0",
                                },
                                "&.Mui-disabled": {
                                    backgroundColor: "#C2BFF7",
                                },
                            }}
                        >
                            Complete Sign Up
                        </LoadingButton>
                    </Box>
                </Box>
            </Modal>

            {isSuccess && (
                <Typography color="green">Successfully joined!</Typography>
            )}

            {isError && (
                <Typography color="red">
                    Something went wrong. Try again.
                </Typography>
            )}
        </>
    );
};

export default JoinButton;
