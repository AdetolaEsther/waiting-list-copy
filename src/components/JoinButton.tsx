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
import { toast } from "react-toastify";

const JoinButton = () => {
    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
    });

    const [joinWaitlist, { isLoading }] = useJoinWaitlistMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await joinWaitlist(formData).unwrap();
            toast.success("Successfully joined!");
            setFormData({ first_name: "", last_name: "", email: "" });
            setOpen(false);
        } catch {
            toast.error("Something went wrong. Please try again.");
        }

    };

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                sx={{
                    backgroundColor: "#5F45FC",
                    color: "#FCFCFC",
                    fontSize: "16px",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    height: 'auto',
                    textTransform: "none",
                    width: { xs: "100%", md: "auto" }, 
                    "&:hover": {
                        backgroundColor: "#4C3EC0",
                    },
                }}
            >
                Join the Waiting List Now
            </Button>

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
                        p: { sm: 5 },
                        width: "90%",
                        maxWidth: "500px",
                        maxHeight: "90vh",
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
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
        </>
    );
};

export default JoinButton;
