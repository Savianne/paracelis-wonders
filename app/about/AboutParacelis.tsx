'use client'
import styled from "styled-components"
import React from "react"
import { IStyledFC } from "../types/IStyledFC"
import Title from "../components/Title"
import CenteredContent from "../components/CenteredContent"
import DisplayPicture from "./DisplayPicture"
import TextPreset1 from "../components/TextPreset1"

const AboutParacelisFC: React.FC<IStyledFC> = ({className}) => {

    return(
        <div className={className}>
            <Title>
                PARACELIS
                <p className="text1">ABOUT PARACELIS</p>
                <p className="text2">About Paracelis</p>
            </Title>
            <CenteredContent>
                <TextPreset1 textDirection="right">
                    <div className="text-content">
                        <p>
                        Paracelis, a municipality in Mountain Province, is known as the province’s agricultural frontier and a gateway to the lowlands of northern Luzon. Situated on the eastern side of the province, Paracelis is characterized by rolling hills, fertile plains, and a warmer climate compared to its neighboring highland areas. This unique geography makes it a leading producer of rice, corn, bananas, and other crops, playing a vital role in the region’s food supply.
                        </p>
                        <p>
                        The town is also celebrated for its rich cultural diversity, as it is home to various ethnic groups, including the Balangao, Kalinga, and Ilocano communities, who coexist harmoniously while preserving their distinct traditions and practices. Paracelis is gradually gaining attention for its unspoiled natural beauty, with scenic landscapes and opportunities for eco-tourism. Despite its relative isolation, it remains a vibrant and culturally rich municipality, offering a different perspective on the Mountain Province’s blend of heritage and progress.
                        </p>
                    </div>
                </TextPreset1>
                <DisplayPicture src="/images/img3.jpg"/>
            </CenteredContent>
        </div>
    )
}

const AboutParacelis = styled(AboutParacelisFC)`
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

export default AboutParacelis;