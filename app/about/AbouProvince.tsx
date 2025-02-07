'use client'
import styled from "styled-components"
import React from "react"
import { IStyledFC } from "../types/IStyledFC"
import Title from "../components/Title"
import CenteredContent from "../components/CenteredContent"
import TextPreset1 from "../components/TextPreset1"

const AboutProvinceFC: React.FC<IStyledFC> = ({className}) => {

    return(
        <div className={className}>
            <Title>
                THE PROVINCE
                <p className="text1">ABOUT THE PROVINCE</p>
                <p className="text2">About The Mountain Province</p>
            </Title>
            <CenteredContent>
                <img src="/images/Mountain_province_municipalities.png" alt="Map of Mountain Province" />
                <TextPreset1 textDirection="left">
                    <div className="text-content">
                        <p>
                        Mountain Province, located in the Cordillera Administrative Region of Luzon, is a landlocked province known for its stunning landscapes and rich cultural heritage. 
                        Its capital, Bontoc, serves as the center of governance and a gateway to its natural and historical wonders. Characterized by rugged mountains, lush forests, and terraced rice fields, the province boasts a cool and temperate climate, making it a haven for nature enthusiasts. It is home to the indigenous Igorot tribes, particularly the Bontoc, Kankanaey, and Applai peoples, who have preserved their unique traditions, weaving techniques, and rituals over centuries. The province is famed for Sagada’s hanging coffins, the breathtaking Sumaguing Cave, and the serene Bomod-ok Falls. 
                        </p>
                        <p>
                        The Maligcong Rice Terraces in Bontoc are another testament to the ingenuity of its people. Agriculture remains the backbone of the economy, with rice, coffee, and root crops as staples, while traditional weaving and wood carving thrive as important livelihoods. Festivals such as the Lang-ay Festival in April and the Etag Festival celebrate the province’s vibrant culture and unique culinary traditions. Mountain Province, with its blend of natural beauty, cultural significance, and warm communities, is a must-visit destination for those exploring the Cordillera region.
                        </p>
                    </div>
                </TextPreset1>
            </CenteredContent>
        </div>
    )
}

const AboutProvince = styled(AboutProvinceFC)`
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

export default AboutProvince;