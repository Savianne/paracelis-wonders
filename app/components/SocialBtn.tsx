"use client"
import styled from "styled-components";
import React, { ReactNode } from "react";
import { IStyledFC } from "../types/IStyledFC";
import { svg } from "motion/react-client";

interface ISOcialsBtnFC extends IStyledFC {
    icon: ReactNode,
    title: string,
    url: string,
} 
const SocialsBtnFC: React.FC<ISOcialsBtnFC> = ({className, icon, title, url}) => {

    return(
        <div className={className}>
            {
                icon
            }
            <p className="title">{title}</p>
        </div>
    )
}

const SocialsBtn = styled(SocialsBtnFC)`
    display: flex;
    flex: 0 1 100%;
    margin: 4px 0;
    height: fit-content;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    && > svg {
        height: 35px;
        width: 35px;
        fill: #8AB1D0;
    }

    && > .title {
        display: flex;
        font-size: 19px;
        color: #9F9C9C;
        flex-direction: column;
        font-family: InterRegular;
        margin-left: 5px;

    }
`;

export default SocialsBtn;