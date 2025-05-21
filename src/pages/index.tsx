import Features from "@/components/Features";
import FAQAndFooter from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWork";
import Solution from "@/components/Solutions";
import React from "react";
import { Box } from "@mui/material";

const index = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Solution />
            <Box id="features-section">
                <Features />
            </Box>
            <Box id="how-it-works-section">
                <HowItWorksSection />
            </Box>
            <Box id="faq-section">
                <FAQAndFooter />
            </Box>
        </>
    );
};

export default index;
