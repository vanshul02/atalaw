// src/hooks/useDisclaimer.js
import { useEffect, useState } from "react";

const useDisclaimer = () => {
    const [showModal, setShowModal] = useState(true);

    //   useEffect(() => {
    //     const storedConsent = localStorage.getItem("ata-law-disclaimer-consent");
    //     if (storedConsent === "true") {
    //       setShowModal(false);
    //     }
    //   }, []);

    const handleAgree = () => {
        // localStorage.setItem("ata-law-disclaimer-consent", "true");
        setShowModal(false);
    };

    const handleDisagree = () => {
        window.location.href = "https://www.google.com";
    };

    return {
        showModal,
        handleAgree,
        handleDisagree,
    };
};

export default useDisclaimer;
