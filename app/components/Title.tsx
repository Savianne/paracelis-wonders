"use client"
import styled from "styled-components"
import React from "react"

const Title = styled.h1`
    position: relative;
    display: flex;
    width: fit-content;
    height: fit-content;
    font-size: 7em;
    justify-content: center;
    font-family: InterExtraBold;
    color: #E5E5E5;
    z-index: 0;

    && > .text1  {
        position: absolute;
        top: 30px;
        font-size: 20px;
        color: orange;
    }

    && > .text2 {
        position: absolute;
        bottom: 20px;
        font-size: 40px;
        color: black;
        font-weight: 100;
        font-family: InterRegular;
    }

    /* @media screen and (max-width: 500px) {
        && {
            font-size: 5em;   

            > .text1 {
                top: 20px;
                font-size: 15px;
            }

            > .text2 {
                bottom: 15px;
                font-size: 30px;
            }
        }
    } */

    @media screen and (max-width: 1000px) {
        && {
            font-size: 12vw;   

            > .text1 {
                top: 2vw;
                font-size: 15px;
            }

            > .text2 {
                bottom: 1vw;
                font-size: 5vw;
            }
        }
    }


`;

export default Title;