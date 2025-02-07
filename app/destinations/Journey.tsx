"use client";
import styled from "styled-components";
import React from "react";
import { IStyledFC } from "../types/IStyledFC"
import SearchBar from "./Search";
import DestinationGrid from "../components/DestinationGrid";

const JourneyFC: React.FC<IStyledFC> = ({className}) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
          const scrollAmount = 380; // Adjust for the scroll distance
          scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
          });
        }
      };
    return(
        <div className={className}>
            <SearchBar />
            <div className="scrollable" ref={scrollRef}>
                <DestinationGrid />
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

const Journey = styled(JourneyFC)`
    display: flex;
    width: 100vw;
    margin-bottom: 100px;
    justify-content: center;
    flex-wrap: wrap;

    && > ${SearchBar} {
        max-width: 800px;
        margin: 100px 0 50px 0;
    }
    
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

`

export default Journey;