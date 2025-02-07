"use client"
import styled from "styled-components"
import CenteredContent from "./components/CenteredContent";
import PageBanner from "./components/PageBanner";

const StyledPage = styled.div`
    display: flex;
    flex: 0 1 100%;
    flex-wrap: wrap;

    && > ${PageBanner} {
        justify-content: center;
        align-items: center;
    }

    && > ${PageBanner} > ${CenteredContent} {
        flex-wrap: wrap;
        height: fit-content;
        z-index: 100;
    }

    && > ${PageBanner} > ${CenteredContent} > h1 {
        flex: 0 1 100%;
        font-size: 4vw;
        color: white;
    }

    @media screen and (max-width: 900px) {
        && > ${PageBanner} > ${CenteredContent} > h1 {
            font-size: 7vw;
        }
    }
`

export default StyledPage;