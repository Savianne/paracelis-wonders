"use client"
import styled from "styled-components"
import React from "react"
import { motion } from "motion/react"
import { IStyledFC } from "../types/IStyledFC"

interface ITextPreset1 extends IStyledFC {
    textDirection: "left" | "right";
}

const TextPreset1FC:React.FC<ITextPreset1> = ({className, textDirection, children}) => {

    return(
        <div className={className}>
            {
                children
            }
            <motion.div className="highlight"
            transition={{duration: 5, type: "spring"}}
            initial={textDirection == "left"? {right: "-30%"} : {left: "-30%"}}
            animate={textDirection == "left"? {right: 0} : {left: 0}}
            ></motion.div>
        </div>
    )
}

const TextPreset1 = styled(TextPreset1FC)`
    display: flex;
    position: relative;
    max-width: 900px;
    /* background-color: gray; */
    justify-content: ${(p) => p.textDirection == "left"? "flex-star" : "flex-end"};
    padding: 50px 0;

    && > .text-content {
        text-indent: 100px;
        text-align: justify;
        /* text-align: ${(p) => p.textDirection}; */
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        flex: 0 1 90%;
        /* background-color: pink; */
        font-family: InterRegular;
        font-size: 18px;
        line-height: 35px;
        z-index: 10;
    }

    && > .highlight {
        position: absolute;
        top: 0;
        display: flex;
        width: 75%;
        height: 100%;
        background-color: #FFF0F0;
    }
`;

export default TextPreset1;