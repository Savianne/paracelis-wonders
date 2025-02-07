"use client"
import styled from "styled-components";
import React, { ReactNode } from "react";
import { IStyledFC } from "../types/IStyledFC";
import { svg } from "motion/react-client";

interface IContactBtnFC extends IStyledFC {
    icon: ReactNode,
    title: string,
    value: string,
} 
const ContactBtnFC: React.FC<IContactBtnFC> = ({className, icon, title, value}) => {

    return(
        <div className={className}>
            {
                icon
            }
            <div>
                <p className="title">{title}</p>
                <p className="value">{value}</p>
            </div>
        </div>
    )
}

const ContactBtn = styled(ContactBtnFC)`
    display: flex;
    flex: 0 1 100%;
    margin: 4px 0;
    height: fit-content;
    /* background-color: #f01c00; */
    gap: 10px;

    && > svg {
        width: 30px;
        fill: #8AB1D0;
    }

    && > div {
        display: flex;
        flex-direction: column;
        gap: 5px;

        > .title, > .value {
            color: #9F9C9C;
            font-family: InterRegular;
            font-size: 14px;
        }

        > .value {
            font-size: 12px;
            font-family: InterLight;
        }
    }
`;

export default ContactBtn;