"use client"
import styled from "styled-components"
import React from "react"
import { IStyledFC } from "../types/IStyledFC"
import { signOut } from "next-auth/react"

interface IUser extends IStyledFC {
    name: string;
    email: string;
    dp?: string | null;
}

const UserFC: React.FC<IUser> = ({className, email, name}) => {

    return(
        <div className={className}>
            <div>
                <span className="avatar"></span>
                <div>
                    <p className="name">{name}</p>
                    <p className="email">{email}</p>
                </div>
            </div>
            <span id="divider"></span>
            <div className="sign-out-btn">
                <span className="sign-out" onClick={(e) => {
                        signOut()
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"/></svg>
                    Sign Out
                </span>
            </div>
        </div>
    )
}

const User = styled(UserFC)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    /* flex: 0 1 300px; */
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    align-items: center;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    z-index: 100;
    flex-wrap: wrap;
    cursor: pointer;


    && > div {
        display: flex;
        flex: 0 1 100%;
        align-items: center;
        /* justify-content: center; */

        > .avatar {
            display: flex;
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            background-image: url(${p => p.dp});
            background-repeat: no-repeat;
            background-size: cover;
        }

        > div {
            display: flex;
            flex: 0 1 100%;
            flex-direction: column;
            margin-left: 10px;
            font-size: 12px;

            > .name {
                font-weight: bold;
            }

            > .email {
                color: #767676;
            }
        }
    }

    && > div > .sign-out {
        display: flex;
        flex: 0 1 100%;
        padding: 5px 15px;
        margin-top: 10px;
        // flex-direction: column;
        align-items: center;
        justify-content: center;
        // border: 1px solid white;
        color: white;
        font-size: 13px;
        border-radius: 5px;
        background-color: rgb(0, 89, 255);
        cursor: pointer;

        > svg {
            width: 20px;
            height: 20px; 
            fill: white;
            margin-bottom: 5px;
            margin-right: 10px;
        }
    }

    && > div > .sign-out:hover {
        background-color: rgb(4, 55, 149);
        transition: background-color 300ms;
    }

    && > div > .sign-out:active {
        opacity: 0.5;
        transition: opacity 300ms;
    }

    && > #divider {
        width: 100%;
        margin-top: 10px;
        border-top: 0.5px solid #dcdcdc;
    }
    
`

export default User;