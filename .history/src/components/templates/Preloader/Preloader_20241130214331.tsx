import "./Preloader.css";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(CustomEase);

export default function Preloader() {
    const navigate = useNavigate(); // Initialize navigate hook

    useEffect(() => {
        const counter3 = document.querySelector(".counter-3");

        if (counter3) {
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 10; j++) {
                    const div = document.createElement("div");
                    div.className = "num";
                    div.textContent = j.toString();
                    counter3.appendChild(div);
                }
            }

            const finalDiv = document.createElement("div");
            finalDiv.className = "num";
            finalDiv.textContent = "0";
            counter3.appendChild(finalDiv);
        }

        function animate(counter, duration, delay = 0) {
            const numHeight = counter.querySelector(".num").clientHeight;
            const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

            gsap.to(counter, {
                y: -totalDistance,
                duration: duration,
                delay: delay,
                ease: "power2.inOut",
            });
        }

        if (counter3) animate(counter3, 5);
        animate(document.querySelector(".counter-2"), 6);
        animate(document.querySelector(".counter-1"), 2, 4);
    }, []);

    useEffect(() => {
        gsap.to(".digit", {
            top: "-9rem",
            stagger: {
                amount: 0.25,
            },
            delay: 6,
            duration: 1,
            ease: "power4.inOut",
        });

        gsap.fromTo(
            ".loader-1",
            { width: 0 },
            {
                width: "100%",
                duration: 6,
                ease: "power2.inOut",
            }
        );

        const timeline = gsap.timeline();

        timeline
            .fromTo(
                ".loader",
                { width: 0, height: "2rem" },
                {
                    width: "20vw",
                    duration: 2,
                    ease: "power4.inOut",
                }
            )
            .to(".loader", {
                height: "4rem",
                duration: 1.5,
                ease: "power4.inOut",
            })
            .to(".loader", {
                width: "100vw",
                height: "100vh",
                delay: 2.5,
                duration: 2,
                ease: CustomEase.create(
                    "custom",
                    "M0,0 C0,0 0.122,0.005 0.157,0.105 0.203,0.236 0.254,0.482 0.41,0.505 0.618,0.535 0.524,0.509 0.677,0.538 0.822,0.565 0.814,0.867 0.896,0.947 0.95,0.999 1,1 1,1 "
                ),
            });

        gsap.to(".loading-screen", {
            delay: 8.5,
            background: "none",
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
                // Navigate to App.jsx route
                navigate("/app");
            },
        });

        gsap.fromTo(
            ".loader-black",
            {
                top: "100%",
            },
            {
                top: "0%",
                delay: 6.7,
                duration: 1.5,
                ease: "power3.inOut",
            }
        );

        gsap.to(".mane", {
            yPercent: -50,
            delay: 7.2,
            duration: 1,
            ease: "power3.inOut",
        });
    }, [navigate]);

    return (
        <>
            <div className="loading-screen">
                <div className="loader">
                    <div className="loader-black"></div>
                    <div className="loader-1 bar"></div>
                </div>

                <div className="counter">
                    <div className="counter-1 digit">
                        <div className="num">0</div>
                        <div className="num num1offset1">1</div>
                    </div>
                    <div className="counter-2 digit">
                        <div className="num">0</div>
                        <div className="num num1offset2">1</div>
                        <div className="num">2</div>
                        <div className="num">3</div>
                        <div className="num">4</div>
                        <div className="num">5</div>
                        <div className="num">6</div>
                        <div className="num">7</div>
                        <div className="num">8</div>
                        <div className="num">9</div>
                        <div className="num">0</div>
                    </div>
                    <div className="counter-3 digit">
                        <div className="num">0</div>
                        <div className="num">1</div>
                        <div className="num">2</div>
                        <div className="num">3</div>
                        <div className="num">4</div>
                        <div className="num">5</div>
                        <div className="num">6</div>
                        <div className="num">7</div>
                        <div className="num">8</div>
                        <div className="num">9</div>
                    </div>
                </div>
            </div>
        </>
    );
}
