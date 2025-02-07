"use client";
import styled from "styled-components";
import React from "react";
import { IStyledFC } from "../types/IStyledFC"
import Title from "./Title";
import DestinationGrid from "./DestinationGrid";

const TestimoniesFC: React.FC<IStyledFC> = ({className}) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
          const scrollAmount = 460; // Adjust for the scroll distance
          scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
          });
        }
      };
    return(
        <div className={className}>
            <Title>
                TESTIMONIALS
                <p className="text1">TESTIMONIES</p>
                <p className="text2">Happy Customers</p>
            </Title>
            <div className="scrollable" ref={scrollRef}>
                <TestimoniesCards>
                    <div className="card">
                        <div className="dp" style={{backgroundImage: "url(/images/dp5.jpg)"}}></div>
                        <div className="text-content">
                            <p>Paracelis Wonders made my trip unforgettable! The app's detailed guides led me to hidden spots I never would have found on my own. Highly recommended for anyone looking to explore the beauty of Paracelis!</p>
                            <p className="name"> — Mark B.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="dp" style={{backgroundImage: "url(/images/dp1.jpg)"}}></div>
                        <div className="text-content">
                            <p>Even as a local, I discovered places I had never visited before. Paracelis Wonders helped me see my hometown in a new light and appreciate its natural beauty even more!</p>
                            <p className="name"> — TESLYN PABLO MAGUITLING</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="dp" style={{backgroundImage: "url(/images/dp2.jpg)"}}></div>
                        <div className="text-content">
                            <p>Planning a family getaway was so easy with Paracelis Wonders. We found perfect spots for picnics and adventure, all with helpful directions and tips from the app. A fantastic resource for tourists!</p>
                            <p className="name">— ANA ROSE N. YADAO</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="dp" style={{backgroundImage: "url(/images/dp3.jpg)"}}></div>
                        <div className="text-content">
                            <p>I loved how the app highlighted not just tourist spots but also the rich culture of Paracelis. It gave me insights that made my trip more meaningful. Kudos to the team!</p>
                            <p className="name">— Ric Badongan</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="dp" style={{backgroundImage: "url(/images/dp4.jpg)"}}></div>
                        <div className="text-content">
                            <p>As a first-time traveler to Paracelis, I had no idea where to start. Paracelis Wonders was my savior! From beautiful trails to must-visit destinations, it had everything I needed.</p>
                            <p className="name">— TESLYN PABLO MAGUITLING</p>
                        </div>
                    </div>
                </TestimoniesCards>
            </div>
            <div className="scrollbtn-group">
                <span className="scroll-left" onClick={() => scroll("left")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
                    Scroll left
                </span>
                <span className="scroll-right" onClick={() => scroll("right")}>
                    Scroll right
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                </span>
            </div>
        </div>
    )
}

const TestimoniesCards = styled.div`
    display: flex;
    flex: 0 1 100%;
    gap: 10px;
    margin-top: 50px;

    && > .card {
        display: flex;
        width: 450px;
        flex-shrink: 0;
        height: 300px;
        background-color: #EFBA6C;
        overflow: hidden;
        /* flex-wrap: wrap; */
        padding: 50px 30px;

        > .dp {
            display: flex;
            width: 80px;
            height: 80px;
            flex-shrink: 0;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-size: cover;
        }

        > .text-content {
            display: flex;
            flex-direction: column;
            margin-left: 25px;
            font-family: InterRegular;
            font-size: 18px;
            line-height: 30px;
            color: #364D59;

            > .name {
                margin-top: 20px;
            }
        }
    }
`

const Tetimonies = styled(TestimoniesFC)`
    display: flex;
    width: 100vw;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px 0;
    
    && > .scrollable {
        flex: 0 1 95%;
        /* padding: 20px; */
        overflow: auto;
        scroll-behavior: smooth;
    }

    && > .scrollbtn-group {
        position: relative;
        display: flex;
        flex: 0 1 95%;
        height: 80px;
        align-items: center;
        /* background-color: orange; */

        > .scroll-left, > .scroll-right {
            position: absolute;
            display: flex;
            align-items: center;
            gap: 10px;
            color: #8eb0ff;
            padding: 10px;
            border-radius: 10px;
            cursor: pointer;

            > svg {
                height: 30px;
                fill: #8eb0ff;
            }
        }

        > .scroll-left:hover, > .scroll-right:hover {
            background-color: #c0c8d937;
            transition: background-color 300ms;
        }

        > .scroll-left {
            left: 5px;
        }

        > .scroll-right {
            right: 5px;
        }
    }

    && > .scrollable::-webkit-scrollbar {
        display: none;
    }

    /* @media screen and (max-width: 900px) {
        && > ${Title} {
            font-size: 12vw; 
        }
    } */

`

export default Tetimonies;