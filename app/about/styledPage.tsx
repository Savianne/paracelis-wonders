"use client"
import styled from "styled-components"
import CenteredContent from "../components/CenteredContent";
import PageBanner from "../components/PageBanner";

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
        justify-content: center;
    }

    && > ${PageBanner} > ${CenteredContent} > h1, && > ${PageBanner} > ${CenteredContent} > p {
        flex: 0 1 100%;
        font-size: 4vw;
        color: white;
        text-align: center;
        font-weight: bolder;
    }

    && > ${PageBanner} > ${CenteredContent} > p {
        font-size: 20px;
        line-height: 30px;
        max-width: 500px;
        font-weight: 100;
        margin-top: 20px;

    }

    @media screen and (max-width: 800px) {
        && > ${PageBanner} > ${CenteredContent} > h1 {
            font-size: 40px;
        }
    }

`

export default StyledPage;