'use client'
import styled from "styled-components"
import React from "react"
import { IStyledFC } from "../types/IStyledFC"
import Title from "../components/Title"
import CenteredContent from "../components/CenteredContent"
import DisplayPicture from "./DisplayPicture"
import TextPreset1 from "../components/TextPreset1"

const VisionFC: React.FC<IStyledFC> = ({className}) => {

    return(
        <div className={className}>
            <Title>
                VISION
                <p className="text1">OUR VISION</p>
                <p className="text2">OUR VISION</p>
            </Title>
            <CenteredContent>
                <TextPreset1 textDirection="left">
                    <div className="text-content">
                        <p>
                        Our vision is to be the premier online platform dedicated to showcasing the wonders of Paracelis, Mountain Province. We envision a thriving tourism community where both local and international visitors are drawn to the area’s majestic mountains, serene rivers, historical landmarks, and rich cultural traditions. By highlighting the authentic experiences that Paracelis has to offer, we aim to contribute to the growth of responsible tourism that values environmental conservation, cultural preservation, and economic opportunities for local residents. Ultimately, we aspire to create a lasting impact that ensures Paracelis remains a cherished destination for generations to come. Let me know if you'd like to adjust anything or add more specific details!
                        </p>
                    </div>
                </TextPreset1>
                <DisplayPicture src="/images/img3.jpg"/>
            </CenteredContent>
        </div>
    )
}

const Vision = styled(VisionFC)`
    display: flex;
    flex: 0 1 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 20 80px 20px;
    
    && > ${Title} {
        flex: 0 1 100%;
    }
    
    && > ${CenteredContent} {
        padding: 150px 20px;
        justify-content: center;
        align-items: center;
        gap: 50px;
        
        > ${TextPreset1} {
            flex: 1;
            min-width: 300px;
            /* margin-right: 50px; */
        }
    }
`;

export default Vision;