'use client'
import styled from "styled-components"
import React from "react"
import { IStyledFC } from "../types/IStyledFC"
import Title from "../components/Title"
import CenteredContent from "../components/CenteredContent"
import TextPreset1 from "../components/TextPreset1"

const CulturalFestivalFC: React.FC<IStyledFC> = ({className}) => {

    return(
        <div className={className}>
            <Title>
                FESTIVAL
                <p className="text1">CULTURAL FESTIVAL</p>
                <p className="text2">KAKAREFIN FESTIVAL</p>
            </Title>
            <CenteredContent>
                <img src="/images/kakarefin2.jpg" alt="kakarefin" />
                <TextPreset1 textDirection="left">
                    <div className="text-content">
                        <p>
                        The Kakarefin Festival is a vibrant annual celebration in Paracelis, Mountain Province, Philippines, symbolizing unity and cultural 
                        diversity among the town's 12 indigenous tribes. The festival's name, "Kakarefin," which translates to "holding hands together," 
                        emphasizes the spirit of solidarity among its people. First held in June 2023 during the municipality's 61st Foundation Day, the 
                        event showcases Paracelis's rich heritage through colorful street dances, ethnic fashion shows, trade fairs, literary competitions, 
                        and sports tournaments. 
                        </p>
                        <p>
                        The grand opening typically features an official festival song, captivating performances, and a parade. 
                        Beyond its festivities, the Kakarefin Festival serves as a platform for fostering community bonds and preserving indigenous traditions.
                        </p>
                    </div>
                </TextPreset1>
            </CenteredContent>
        </div>
    )
}

const CulturalFestival = styled(CulturalFestivalFC)`
    display: flex;
    flex: 0 1 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 20 80px 20px;
    
    && > ${Title} {
        flex: 0 1 100%;
    }
    
    && > ${CenteredContent} {
        flex: 0 1 100%;
        padding: 150px 20px;
        justify-content: center;
        align-items: center;
        gap: 80px;
        flex-wrap: wrap;
        
        > img {
            width: 30%;
            height: fit-content;
            min-width: 300px;
            
            /* margin-left: 30px; */
        }

        > ${TextPreset1} {
            flex: 1;
            min-width: 300px;
            
            > .text-content {
                padding-right: 20px;
                font-size: 15px;
            }
        }
    }
`;

export default CulturalFestival;