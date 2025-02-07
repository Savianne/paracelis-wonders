"use client"
import styled from "styled-components"
import React from "react"
import { motion } from "motion/react"
import { IStyledFC } from "../types/IStyledFC"  

const WatchVideoButtonFC:React.FC<IStyledFC> =({className}) => {

    return(
        <motion.div className={className}
        transition={{
            duration: 1,
        }}
        initial={{
            marginLeft: -200,
        }}
        animate={{
            marginLeft: 0,
        }}>
            <span className="play-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/></svg>
            </span>
            <motion.p
            animate={{
                marginLeft: 20,
            }}>Watch the Video</motion.p>
        </motion.div>
    )
}

const WatchVideoButton = styled(WatchVideoButtonFC)`
    display: flex;
    flex: 0 1 100%;
    height: fit-content;
    margin-top: 20px;
    align-items: center;

    && > .play-btn {
        display: flex;
        flex-shrink: 0;
        width: 70px;
        height: 70px;
        border: 1px solid white;
        border-radius: 50%;
        align-items: center;
        justify-content: center;

        > svg {
            width: 25px;
            fill: white;
            margin-left: 5px;
        }
    }

    && > p {
        font-size: 20px;
        color: white;
        font-family: "WorkSansThin";
        font-weight: lighter;
    }
`;

export default WatchVideoButton;