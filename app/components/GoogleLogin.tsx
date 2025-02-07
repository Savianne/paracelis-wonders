"use client"
import styled from "styled-components"
import React from "react"
import { IStyledFC } from "../types/IStyledFC"
import { signIn } from "next-auth/react"

const GoogleLoginFC: React.FC<IStyledFC> = ({className}) => {
    
    return(
        <div className={className} onClick={() => signIn("google")}>
            <img src="/google_logo.png" alt="Google Logo" />
            <p>Continue With Google</p>
        </div>
    )
}

const GoogleLogin = styled(GoogleLoginFC)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex: 0 1 300px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    align-items: center;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    z-index: 900;
    cursor: pointer;

    && > img {
        width: 40px;
    }

    && > p {
        font-size: 18px;
        font-family: Inter;
        margin-left: 10px;
    }
`

export default GoogleLogin
