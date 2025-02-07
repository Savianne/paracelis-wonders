'use client'
import styled from "styled-components"
import React from "react"
import { IStyledFC } from "../types/IStyledFC"
import Title from "../components/Title"
import CenteredContent from "../components/CenteredContent"
import DisplayPicture from "./DisplayPicture"
import TextPreset1 from "../components/TextPreset1"

const MissionFC: React.FC<IStyledFC> = ({className}) => {

    return(
        <div className={className}>
            <Title>
                MISSION
                <p className="text1">OUR MISSION</p>
                <p className="text2">OUR MISSION</p>
            </Title>
            <CenteredContent>
                <DisplayPicture src="/images/img2.jpg"/>
                <TextPreset1 textDirection="right">
                    <div className="text-content">
                        <p>
                        Our mission is to promote the rich natural beauty, cultural heritage, and diverse attractions of Paracelis, Mountain Province. We aim to provide travelers, adventurers, and culture enthusiasts with comprehensive and inspiring information about the region’s breathtaking landscapes, hidden gems, and vibrant communities. Through engaging content, stunning visuals, and authentic stories, we strive to encourage sustainable tourism that supports local communities, preserves the environment, and fosters a deeper appreciation of Paracelis as a unique and meaningful travel destination.
                        </p>
                    </div>
                </TextPreset1>
            </CenteredContent>
        </div>
    )
}

const Mission = styled(MissionFC)`
    display: flex;
    flex: 0 1 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 80px 20px;
    
    && > ${Title} {
        flex: 0 1 100%;
    }
    
    && > ${CenteredContent} {
        padding: 150px 0;
        justify-content: center;
        align-items: center;
        gap: 50px;
        
        > ${TextPreset1} {
            flex: 1;
            min-width: 300px;
            /* margin-left: 50px; */
        }
    }
`;

export default Mission;