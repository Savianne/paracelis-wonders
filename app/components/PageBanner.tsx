"use client";
import styled from "styled-components";
import React from "react";
import { IStyledFC } from "../types/IStyledFC";
import { useAnimate } from "motion/react";
import { RESOURCES_SERVER_URL } from "../resource-server-url";

const PageBannerFC: React.FC<IStyledFC> = ({className , children}) => {
    const [scope, animate] = useAnimate();

    React.useEffect(() => {
        const animationInteral = setInterval(() => {
            const randomX = Math.floor(Math.random() * 100); // Random percentage for X-axis (0% to 100%)
            const randomY = Math.floor(Math.random() * 100); // Random percentage for Y-axis (0% to 100%)
            animate(scope.current, {backgroundPosition: `${randomX}% ${randomY}%`}, { duration: 10 })
        }, 10000);

        return(() => {
            clearInterval(animationInteral)
        })
    }, [])
    return(
        <div className={className} ref={scope}>
            <div className="cover"></div>
            {
                children
            }
        </div>
    )
}

const PageBanner = styled(PageBannerFC)<{imgUrl?: string}>`
    position: relative;
    display: flex;
    flex: 0 1 100%;
    height: calc(100vh - 140px);
    background-image: url(${p => p.imgUrl? p.imgUrl : '/banner.jpg'});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 150%;
    /* background-size: 500%; */
    /* aspect-ratio: 16/9; */

    && > .cover {
        display: flex;
        width: 100%;
        height: 100%;
        opacity: 0.43;
        background-color: #231E4B;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
    }

    @media screen and (max-width: 550px) {
        && {
            /* aspect-ratio: 1; */
            background-size: 300%;
        }
    }
`;

export default PageBanner;

