import React, { useRef, useState, useCallback } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";

import fbIcon from "../../assets/facebook.svg";
import mesIcon from "../../assets/messenger.svg";
import phIcon from "../../assets/phone.svg";
import moneyIcon from "../../assets/money.svg";
import infoIcon from "../../assets/info.svg";

import "./Dashboard.scss";
const DashboardPage = () => {
    //------------------------------------------------------------------
    //States
    //------------------------------------------------------------------
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    //------------------------------------------------------------------
    //Toggle the display of the sidebar
    //------------------------------------------------------------------
    const handleToggleSidebar = useCallback(() => {
        setIsSidebarOpen(!isSidebarOpen);
    }, [isSidebarOpen]);

    const CARD_INFO = useRef([
        {
            title: "Total Facebook Fans",
            number: "200",
            logo: fbIcon,
            id: 1
        },
        {
            title: "Total Messenger Opt-in Users",
            number: "230",
            logo: mesIcon,
            id: 2
        },
        {
            title: "Total Orders",
            number: "320",
            logo: phIcon,
            id: 3
        },
        {
            title: "Total Net Sales",
            number: "$812.14",
            logo: moneyIcon,
            id: 4
        },
        {
            title: "Average Order Value (%)",
            number: "278.42",
            logo: moneyIcon,
            id: 5
        }
    ]).current;
    return (
        <div id="dashboard-page">
            <div className="dashboard-page">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <Hamburger handleToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
                <main className="content">
                    <Navbar />
                    <div className="dashboard-details">
                        <section className="dashboard-details__date-wrapper">
                            <h4>Decembar 3, 2020 - December 9, 2020</h4>
                        </section>
                        <section className="dashboard-details__cards-wrapper">
                            {CARD_INFO.map((item) => {
                                const { title, number, logo, id } = item;
                                return (
                                    <div className="card" key={id}>
                                        <h4 className="card__title">{title}</h4>
                                        <div className="card__details">
                                            <h1>{number}</h1>
                                            <div className="logo-wrapper">
                                                <img src={logo} alt="" />
                                            </div>
                                        </div>
                                        <img src={infoIcon} alt="" className="card__info-icon" />
                                    </div>
                                );
                            })}
                        </section>
                        <section className="dashboard-details__graphs-wrapper"></section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;