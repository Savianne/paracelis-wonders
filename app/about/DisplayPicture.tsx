"use client"
import styled from "styled-components";
import React from "react";
import { IStyledFC } from "../types/IStyledFC";
import { useInView, motion } from "motion/react";
interface IDisplayPicture extends IStyledFC {
    src: string;
}

const variants = {
    toView: (entity: "border" | "picture") => ({
        top: entity == "picture"? "-15px" : "15px",
        left: entity == "picture"? "0px" : "30px",
        opacity: 1,
        transition: { duration: 3, type: "spring" }
    }), 
    toHide: (entity: "border" | "picture") => ({
        top: "0px",
        left: "0px",
        opacity: 0,
        transition: { duration: 3, type: "spring" }
    })
}

const DisplayPictureFC: React.FC<IDisplayPicture> = ({className}) => {
    const ref = React.useRef<null | HTMLDivElement>(null)
    const isInView = useInView(ref);
    return(
        <div className={className} ref={ref}>
            <motion.div 
            className="border"
            custom={"border"}
            variants={variants}
            animate={isInView? "toView" : "toHide"}
            ></motion.div>
            <motion.div 
            className="picture"
            custom={"picture"}
            variants={variants}
            animate={isInView? "toView" : "toHide"}
            ></motion.div>
        </div>
    )
}

const DisplayPicture = styled(DisplayPictureFC)`
    position: relative;
    width: 250px;
    height: 350px;
    margin-right: 30px;

    > .picture, .border {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    > .picture {
        top: 0px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${({src}) => src});
        z-index: 6;
    }

    > .border {
        left: 0px;
        top: 0px;
        border: 5px solid rgba(210, 68, 152, 0.38);
        width: calc(100% - 10px);
        height: calc(100% - 10px);
    }
`;

export default DisplayPicture;