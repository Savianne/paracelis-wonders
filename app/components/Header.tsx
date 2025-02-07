"use client"
import styled from "styled-components";
import React from "react";
import { redirect, useRouter, usePathname } from "next/navigation";
import { IStyledFC } from "../types/IStyledFC";
import CenteredContent from "./CenteredContent";

const HeadersFC:React.FC<IStyledFC> = ({className}) => {
    const router = useRouter();
    const path = usePathname();
    return(
        <header className={className}>
            <CenteredContent>
                <div className="top">
                    <img src="/wonders-of-paracelis.png" alt="site-logo" />
                    <nav>
                        <span className={`link ${path == '/'? "active-link" : ''}`}
                        onClick={(e) => {
                            router.push('/')
                        }}>HOME</span>
                        <span className={`link ${path == '/about'? "active-link" : ''}`}
                        onClick={(e) => {
                            router.push('/about')
                        }}>ABOUT</span>
                        <span className={`link ${path == '/accommodations'? "active-link" : ''}`}
                        onClick={(e) => {
                            router.push('/accommodations')
                        }}>ACCOMMODATIONS</span>
                        <span className={`link ${path == '/destinations'? "active-link" : ''}`}
                        onClick={(e) => {
                            router.push('/destinations')
                        }}>DESTINATIONS</span>
                    </nav>
                </div>
                <div className="bottom">
                    <nav>
                        <span className={`link ${path == '/'? "active-link" : ''}`}
                        onClick={(e) => {
                            router.push('/')
                        }}>HOME</span>
                        <span className={`link ${path == '/about'? "active-link" : ''}`}
                        onClick={(e) => {
                            router.push('/about')
                        }}>ABOUT</span>
                        <span className={`link ${path == '/accommodations'? "active-link" : ''}`}
                        onClick={(e) => {
                            router.push('/accommodations')
                        }}>ACCOMMODATIONS</span>
                        <span className={`link ${path == '/destinations'? "active-link" : ''}`}
                        onClick={(e) => {
                            router.push('/destinations')
                        }}>DESTINATIONS</span>
                    </nav>
                </div>
            </CenteredContent>
        </header>
    )
};

const Header = styled(HeadersFC)`
    display: flex;
    position: relative;
    flex: 0 1 100%;
    flex-wrap: wrap;
    margin-bottom: 20px;
    justify-content: center;

    && > ${CenteredContent} > div {
        display: flex;
        flex: 0 1 100%;
        height: 140px;
        padding: 10px 0;
        align-items: center;


        > img {
            height: 100%;
            pointer-events: none;
        }
    
        > nav {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            gap: 20px;
    
            > .link {
                cursor: pointer;
    
            }
    
            > .link:active {
                opacity: 0.5;
                transition: opacity 300ms;
            }
    
            > .active-link {
                color: orange;
                text-decoration: underline;
            }
        }
    }

    && > ${CenteredContent} > .bottom {
        display: none;
        height: fit-content;
        width: 100%;
        border-radius: 56px;
        padding: 20px 10px;
        background-color: white;
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
        
        > nav {
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    @media screen and (max-width: 620px) {

        /* && {
            height: 150px;
        } */

        && > ${CenteredContent} > .bottom {
            display: flex;
        }

        && > ${CenteredContent} > .top {
            justify-content: center;

            > nav {
                display: none;
            }
        }

        
    }
`;

export default Header;