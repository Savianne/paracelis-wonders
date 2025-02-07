"use client";
import styled from "styled-components";
import React from "react";
import { IStyledFC } from "../types/IStyledFC"
import Title from "./Title";
import { motion, useInView } from "motion/react";
import CenteredContent from "./CenteredContent";

const OurTeamFC: React.FC<IStyledFC> = ({className}) => {

    return (
        <div className={className}>
             <Title>
                OUR TEAM
                <p className="text1">AMAZING STAFF</p>
                <p className="text2">Meet Our Team</p>
            </Title>
            <CenteredContent>
                <TeamCard 
                dp="images/founder1.jpg" name="Romy N. Yadao" text="Fueled by a passion for showcasing the hidden beauty of Paracelis, 
                Romy N. Yadao envisioned a platform that would connect locals and visitors to the town’s incredible landscapes and culture. 
                With a determined spirit and a heart for innovation, they spearheaded the creation of Paracelis Wonders, turning a vision into a 
                thriving reality." position="Founder"/>
                <TeamCard 
                dp="images/founder2.jpg" name="Alma G. Dawag" text="Alma G. Dawag shared the founder's dream of making Paracelis a destination
                 worth celebrating. With creativity and a collaborative mindset, they played a crucial role in shaping the app's features and guiding the 
                 team toward delivering an engaging platform for users." position="CO-Founder"/>
                <TeamCard 
                dp="images/founder3.jpg" name="Jessa Mae D. Cardona" text="The Paracelis Wonders team is a dynamic group of individuals passionate about 
                storytelling, exploration, and community pride. Each member contributes unique ideas and skills, helping bring the wonders of Paracelis 
                to users through inspiring content and valuable insights. They are dedicated to making every app experience memorable." position="CO-Founder" />
            </CenteredContent>
        </div>
    )
}

interface ITeam extends IStyledFC {
    dp: string;
    name: string;
    position: string;
    text: string
}

const TeamCardFC: React.FC<ITeam> = ({className, name, position, text, dp}) => {
    const ref = React.useRef<null | HTMLImageElement>(null)
    const isInView = useInView(ref);
    return (
        <motion.div className={className} ref={ref}
        transition={{duration: 1}}
        animate={isInView? {transform: "translate(0)"} : {transform: "translate(0, 30px)"}}>
            <div className="dp"></div>
            <div className="name-text">
                <strong>{name}</strong>
                <p className="position">{position}</p>
            </div>
            <p className="text">{text}</p>
        </motion.div>
    )
}

const TeamCard = styled(TeamCardFC)`
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 300px;
    justify-content: center;
    font-family: InterRegular;

    && > .dp {
        width: 300px;
        height: 300px;
        background-image: url(${p => p.dp});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    && > .name-text {
        display: flex;
        flex: 0 1 100%;
        flex-direction: column;
        align-items: center;
        margin: 20px 0;
        gap: 8px;
    }

    && > .text {
        text-align: center;
        line-height: 25px;
        color: #656565;
    }

    && > .name-text > strong, && > .name-text > p {
        width: fit-content;
        text-align: center;
    }

    && > .name-text > .position {
        color: #9F9C9C;
    }
`


const OurTeam = styled(OurTeamFC)`
    display: flex;
    flex: 0 1 100%;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 100px;

    && > ${Title} {
        flex: 0 1 100%;
    }

    && > ${CenteredContent} {
        margin-top: 80px;
        justify-content: center;
        gap: 30px;
    }
`;


export default OurTeam;