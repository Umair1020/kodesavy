import { FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import React, { useState, useEffect } from "react";
import styles from "../../index.module.css";
import { Link, useLocation } from "react-router-dom";

import $ from 'jquery';


import "../../App.css";

window.jquery = window.$ = $

const Header = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    const handleContactClick = () => {
        setShowPopup(true);
    };
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Detect scroll direction for sticky header

    useEffect(() => {
        const handleDocumentReady = () => {
            const b = (a, c) => {
                if (a === "open") {
                    $("header").addClass("dropdown-open active");
                    $("header .geographies .dropdown-subnav").fadeOut();
                    $("header .geographies > a").removeClass("active");
                    c.find(".dropdown-subnav").fadeIn(300).css({ display: "flex" });
                } else if (a === "close") {
                    $("header").removeClass("dropdown-open active");
                    c.find(".dropdown-subnav").hide();
                }
            };

            $(".header").each(function () {
                this.style.setProperty("--initHeaderHeight", $(this).outerHeight() + "px");
            });

            $("[data-hash]").on("click", function (e) {
                if ($(window).width() <= 1024) {
                    $("header .hamburger").click();
                }

                const hash = $(this).attr("data-hash");
                if (typeof hash === "string" && hash.length > 0 && document.getElementById(hash.substring(1))) {
                    e.preventDefault();
                    const offset = $(hash).offset().top;
                    if ($("header").hasClass("navOpen")) {
                        $("header").removeClass("navOpen");
                    }
                    setTimeout(() => {
                        $("html, body").css({ overflow: "unset" }).animate({ scrollTop: offset }, 1000);
                    }, 500);
                }
            });

            if ($(window).width() <= 1024) {
                $(".navigation").slideUp();
            }

            $("header .hamburger").on("click", () => {
                if ($("body").hasClass("navOpen")) {
                    $("html, body").removeClass("hideOverflow");
                    $("body").removeClass("navOpen");
                    $("header .navigation").slideUp();
                    $("header .dropdown-subnav").hide().slideUp();
                    $(".navigation > ul > li").removeClass("active");
                } else {
                    $("html, body").addClass("hideOverflow");
                    $("body").addClass("navOpen");
                    $("header .navigation").slideDown();
                    if ($("body").hasClass("searchOpen")) {
                        $("body").removeClass("searchOpen").find("header");
                        $("header .searchPopup").css({ top: $("header").outerHeight(true) }).fadeOut();
                    }
                    const height = $(window).outerHeight() - ($("header").outerHeight() + $(".header .container .extraHeaderOptions > div.geographies").outerHeight(true));
                    $("header .navigation").css({ top: $("header").outerHeight() });
                    setTimeout(() => {
                        $("header .navigation, .header .container .geographies .dropdown-subnav").css({ height });
                        $("header .container .geographies .dropdown-subnav").css({
                            bottom: $(".header .container .extraHeaderOptions > div.geographies").outerHeight(true) + 2 + "px"
                        });
                    }, 500);
                }
            });

            $("header .navigation > ul > li > a").on("click", function () {
                if ($(window).width() <= 1024) {
                    const dropdown = $(this).siblings(".dropdown-subnav");
                    if (dropdown.length) {
                        $(this).parents("li").toggleClass("active");
                        dropdown.slideToggle();
                        $(".navigation > ul > li .dropdown-subnav").not(dropdown).slideUp();
                    }
                }
            });

            $("header .navigation > ul > li").hover(function () {
                if ($(window).width() > 1024) {
                    b("open", $(this));
                }
            }, function () {
                if ($(window).width() > 1024) {
                    b("close", $(this));
                }
            });

            $("header .geographies > a").on("click", function () {
                const subnav = $(this).siblings(".dropdown-subnav");
                if (subnav.is(":not(:hidden)")) {
                    $(this).removeClass("active").parents("header").removeClass("dropdown-open");
                    if ($(window).width() > 1024) {
                        subnav.fadeOut();
                    } else {
                        subnav.slideUp();
                        $("header .navigation").fadeIn();
                    }
                } else {
                    $(this).addClass("active").parents("header").addClass("dropdown-open");
                    if ($(window).width() > 1024) {
                        subnav.fadeIn(300).css({ display: "flex" });
                    } else {
                        subnav.slideDown();
                        $("header .navigation").fadeOut();
                    }
                }
                if ($("body").hasClass("searchOpen") && $(window).width() > 1024) {
                    $("html, body").removeClass("hideOverflow");
                    $("body").removeClass("searchOpen");
                    $("header .searchPopup").css({ top: $("header").outerHeight(true) }).fadeOut();
                }
            });

            $("header .search").on("click", function () {
                const searchPopup = $("header .searchPopup");
                searchPopup.css({ height: $(window).outerHeight(true) - $("header").outerHeight(true) });
                if ($("body").hasClass("searchOpen")) {
                    $("html, body").removeClass("hideOverflow");
                    $("body").removeClass("searchOpen");
                    $("header").removeClass("dropdown-open");
                    searchPopup.css({ top: $("header").outerHeight(true) }).fadeOut();
                } else {
                    $("html, body").addClass("hideOverflow");
                    $("body").addClass("searchOpen");
                    $("header").addClass("dropdown-open");
                    searchPopup.css({ top: $("header").outerHeight(true) }).fadeIn();
                    if ($(window).width() <= 1024) {
                        $("body").removeClass("navOpen");
                        $("header .navigation").slideUp();
                        $("header .dropdown-subnav").hide().slideUp();
                    }
                }
            });

            let lastScrollTop = 0;
            $(window).on("scroll", function () {
                const scrollTop = $(this).scrollTop();
                if (!$("body").hasClass("navOpen") && $("header").attr("data-homepage") === "true") {
                    if (scrollTop < lastScrollTop || scrollTop <= 0) {
                        $("header").css({ top: 0 });
                    } else {
                        $("header").css({ top: -$("header").outerHeight(true) });
                    }
                }
                lastScrollTop = scrollTop;
                $("header").toggleClass("scrolling", scrollTop > 0);
            });

            $(document).on("click", function (e) {
                if (!e.target.classList.contains("geo") && $(window).width() > 1024) {
                    $(".dropdown-subnav").slideUp();
                    $(".geo").removeClass("active");
                    $('header[role="header"]').removeClass("dropdown-open");
                }
            });


        };

        $(document).ready(handleDocumentReady);
        return () => {
            $(document).off("ready", handleDocumentReady);
        };
    }, []);

    const handleLinkClick = () => {
        $("html, body").removeClass("hideOverflow");
        $("body").removeClass("navOpen");
        $("header .navigation").slideUp();
        $("header .dropdown-subnav").hide().slideUp();
    };

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 801 });
        return isDesktop ? children : null;
    };

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 800 });
        return isMobile ? children : null;
    };

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
    };

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <Desktop>
                
                <div className={`desktop-header sticky-header ${isScrolled ? "scrolled" : ""}`}>


                    <div className="row d-flex justify-content-around align-items-center ">
                        <div className="custom-logo">
                            <Link to="/"><img src="/logo.png" alt="Logo" /></Link>
                        </div>
                        <div className="custom-nav">
                            <ul className={`ul ${styles.navLinksContainer}`}>
                                <li>
                                    <Link to="/" className={isActive("/") ? "active-link" : ""}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className={isActive("/about") ? "active-link" : ""}>About</Link>
                                </li>
                                {/* <li>
                                    <Link to="#" className={isActive("/services") ? "active-link" : ""}>Services</Link>
                                </li> */}
                                <li className="nav-item services-dropdown text-dark">
                                    <Link className="">Services</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/services/App-development">App Development</Link></li>
                                        <li><Link to="/services/web-development">Web Development</Link></li>
                                        <li><Link to="/services/pwa-development">PWA Development</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <Link to="/blog" className={isActive("/blog") ? "active-link" : ""}>Blog</Link>
                                </li>
                                <li>
                                    <Link to="/technology" className={isActive("/technology") ? "active-link" : ""}>Technologies</Link>
                                </li>
                            </ul>
                        </div>
                        <Link to="/contact">
                            <button className="custom-cta">Get In Touch</button>
                        </Link>
                    </div>
                </div>
            </Desktop>

            <Mobile>
                <div className="d-flex align-items-center">

                    <Link className="d-flex" to="/">
                        <div>
                            <img className="my-3 mt-3" style={{ width: "100%" }} src="/logo.png" />
                        </div>
                    </Link>
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><FaTimes /></a>
                        <div className="underline">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/technology">Technologies</Link>
                            <Link to="/portfolio">Portfolio</Link>
                            <div className="button my-5 mt-4 mx-auto">
                                <Link to="/contact">
                                    <button className="custom-cta">Get In Touch</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <span
                        className="w-25 my-3 mt-3"
                        style={{ marginLeft: "100px", fontSize: '30px', cursor: 'pointer', color: "#000" }}
                        onClick={openNav}
                    >
                        <FaBars />
                    </span>
                </div>
                {showPopup && <Popupcard />}
              
            </Mobile>
        </>
    );
};

export default Header;
