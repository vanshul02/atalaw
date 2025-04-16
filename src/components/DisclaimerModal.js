// src/components/DisclaimerModal.js
import React from "react";

const DisclaimerModal = ({ onAgree, onDisagree }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-full sm:max-w-2xl text-center">
                <h2 className="text-2xl font-semibold text-accent mb-4">Disclaimer</h2>
                <p className="text-gray-700 mb-6 text-justify">
                    As per the rules of the Bar Council of India, law firms are not permitted to solicit work and advertise. By clicking on the “I AGREE” button below, user acknowledges the following:
                    <br />There has been no advertisements, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website; user wishes to gain more information about ATA Law Partners and Associates or its attorneys for his/her own information and use.
                    <br />The information about us is provided to the user on his/her specific request and any information obtained or materials downloaded from this website is completely at their own volition and any transmission.
                    <br />We are not responsible for any reliance that a user places on such information and shall not be liable for any loss or damage.
                    However, the user is advised to confirm the veracity of the same from independent and expert sources."
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg"
                        onClick={onAgree}
                    >
                        Agree
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg"
                        onClick={onDisagree}
                    >
                        Disagree
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerModal;
