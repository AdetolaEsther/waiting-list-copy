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

const JoinButton = () => {
    const [open, setOpen] = useState(false);

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
                        p: 5,
                        width: { xs: "90%", sm: 500 },
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

                    <Typography variant="h5" fontWeight={600} mb={1}>
                        Sign Up to our waiting List
                    </Typography>
                    <Typography sx={{ color: "#666", mb: 3 }}>
                        Be the first to know when we launch.
                    </Typography>

                    <Box
                        component="form"
                        display="flex"
                        flexDirection="column"
                        gap={2}
                    >
                        <TextField
                            label="First Name"
                            placeholder="Enter first name here"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            label="Last Name"
                            placeholder="Enter last name here"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            label="Email Address"
                            placeholder="example@email.com"
                            fullWidth
                            variant="outlined"
                            type="email"
                        />

                        <Button
                            type="submit"
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
                            }}
                        >
                            Complete Sign Up
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default JoinButton;
