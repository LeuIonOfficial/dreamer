import React, { useState } from "react";
import Faq from "react-faq-component";
const FAQ = () => {

    const [data] = useState({
        rows: [
            {
                title: "Why should I use Dreamerz.net?",
                content: `Dreamerz gives you the possibility to fulfill other people’s dreams and to realize yours.`,
            },
            {
                title: "Who can see my dreams on Dreamerz platform?",
                content:
                    "All the dreams on the platform will be public for all users. It is done in order to have a greater impact on viewers and to increase the rate of dream fulfillment for the entire community.",
            },
            {
                title:
                    "I don’t want to fulfill any dream or to realize mine. Can I still use Dreamerz?",
                content: `Yes, you can use the Dreamerz platform, by watching how other users are fulfilling their dreams, but you will miss the opportunity to fulfill your dreams.`,
            },
            {
                title: "How do I make a dream?",
                content:
                    "If you already have an account, access the dream page, describe your dream clearly enter the ammount for your dream, set the photos for it, and start the fulfillment campaign.",
            },
            {
                title: "Why do I need to describe, and install photos for my dream?",
                content:
                    "You need the description and photos to make your dream more attractive to other users.",
            },
            {
                title: "How many dreams can a User have?",
                content:
                    "A user can have as many dreams as he wants though only one active is allowed. This means that to create a new dream User needs to fulfill the last one.",
            },
            {
                title: "Can a dream be deleted and a new one created?",
                content:
                    "Although the User is not allowed to delete his dream, he might edit it with admin approval.",
            },
            {
                title: "How can I get my money if my dream has been 100 % fulfilled?",
                content:
                    "When your dream is fulfilled, you will be notified that you can withdraw the funds. You can get your money by going to your profile page and clicking the cash out button. The bank account information is required for the transfer to be successful. If all details are provided, Dreamerz will transfer funds to your bank account within 3 to 7 business days.",
            },
            {
                title:
                    "What happens with collected money if I decide to leave the program? Can I donate them?",
                content:
                    "If you decide to leave the platform and you have already collected fulfilled dreams, you will have the option to donate the whole sum with Dreamerz approval.",
            },
            {
                title: "Can I donate more then 1 $tar (dollar) for a dream ?",
                content:
                    "No, you can't donate more then one $tar (dollar) for a dream. You have to donate for multiple users not only one. If the user sets another dream you will be allowed to fulfill it with another $tar.",
            },
            {
                title: "Can I get my dream fulfilled without donating any dollar?",
                content:
                    "Yes. Others can fulfill your dream, but you will not be able to cash out your dream unless you donate at least half of the amount you set aside for it.",
            },
            {
                title:
                    "What happens if my dream doesn't get enough money from the dream makers, let's say for … few months?",
                content:
                    "If you don’t have activity and your dream is not fulfilled by other users, then you can edit your dream description and photos to make it more attractive, also you can share it on other social network platforms for a bigger impact.",
            },
            {
                title: "Can I edit the dream amount after setting it?",
                content:
                    "No you can’t edit your dream amount after you have submitted the dream, you can only edit the dream description if you want to.",
            },
            {
                title:
                    "How can i see which friends or family members have already settled their dreams on the Dreamerz platform?",
                content:
                    "You can find them on the dashboard screen, though it will be easier to find them by search functionality.",
            },
            {
                title: "Can I add friends to my profile or follow other people?",
                content:
                    "No you cant add friends or follow someone on Dreamerz platform, here is all about the community and working together.",
            },
            {
                title:
                    "Why are the wings donations not collected on my profile in the fulfilled section?",
                content:
                    "Wings Donations are campaigns organized by Dreamerz with the aim of charity, and you can only collect donations that you made for other dreamers.",
            },
            {
                title:
                    "How can I get subscription packages to start fulfilling other people’s dreams?",
                content:
                    "If you already have an account created and had skipped the pricing page then you can easily find it in the User’s menu, up right corner. As well as by pressing the fulfill button on any dream you want to fulfill, the popup pricing page will be shown automatically and you can choose your best option for a subscription package.",
            },
            {
                title: "Can  I cancel my subscription package?",
                content:
                    "Yes you can cancel your subscription package by pressing cancel subscription button situated on the pricing page.",
            },
            {
                title:
                    "Is the subscription package available only once for a month or it can be refreshed whenever I want?",
                content:
                    "The subscription packages can be refreshed whenever you want by pressing the refresh button on the pricing page, or you can change it to a bigger package.",
            },
            {
                title:
                    "If I have donated accidently to a person's dream, can I cancel it?",
                content:
                    "You can’t cancel any donations even if you made them by mistake, but you will have it collected on your profile page at the fulfilled section.",
            },
            {
                title: "What are the fees for my dream cash out ?",
                content:
                    "For every dream collected and cashed out, Dreamerz will charge 10% from the whole amount.",
            },
        ],
    });

    const styles = {
        bgColor: "transparent",
        titleTextColor: "black",
        rowContentColor: "grey",
        rowTitleTextSize: "medium",
        // arrowColor: "red",
    };

    const config = {
        animate: true,
        arrowIcon: "V",
        openOnload: 0,
        expandIcon: "+",
        collapseIcon: "x",
    };

    return (
        <div>
            <div className="flex flex-col pb-[3.75rem] w-[100vw] min-h-[100vh]">
                <div className="flex justify-center items-center w-full h-[100px] mb-[25px] mt-[10px]">
                    <span className="font-['Roboto'] font-bold	leading-[47px] not-italic text-[40px] text-[#000]">FAQ</span>
                </div>
                <div className="flex flex-col min-h-[100vh] border-t-[1px] border-solid border-[#cdd6da]/[.25] mx-[230px]">
                    <Faq data={data} styles={styles} config={config} />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
