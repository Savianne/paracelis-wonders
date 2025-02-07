"use client";
import styled from "styled-components";
import React from "react";
import { useInView } from "motion/react"
import { IStyledFC } from "../types/IStyledFC";
import CenteredContent from "./CenteredContent";
import Title from "./Title";
import TextPreset1 from "./TextPreset1";
import { motion } from "motion/react"

const StoryFC: React.FC<IStyledFC> = ({className}) => {
    const ref = React.useRef<null | HTMLImageElement>(null)
    const isInView = useInView(ref);
    return(
        <div className={className}>
            <CenteredContent>
                <Title>
                    STORY
                    <p className="text1">DISCOVER STORY</p>
                    <p className="text2">OUR STORY</p>
                </Title>
                <div className="left">
                    <TextPreset1 textDirection="left">
                        <div className="text-content">
                            <p>
                            Welcome to Paracelis Wonders! We are dedicated to making your discovery of Paracelis as seamless and inspiring as possible. 
                            Our app was created to connect locals and travelers with the town's breathtaking landscapes, vibrant culture, and hidden treasures. 
                            With curated information and user-friendly features, Paracelis Wonders is your trusted companion for unforgettable adventures. 
                            Whether you're planning your first visit or exploring anew, let us be your guide to the heart of Paracelis!
                            </p>
                            {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.
                            </p> */}
                        </div>
                    </TextPreset1>
                </div>
                <div className="right">
                    <div className="container">
                        <img src="/images/Tourist.png" alt="tourist" ref={ref} />
                        <div className="bg bg-1"></div>
                        <motion.div className="bg bg-2"
                        transition={{
                            type: 'spring',
                            duration: 2
                        }}
                        animate={isInView? {
                            right: "-10%",
                            bottom: '25px'
                        } : {
                            right: 0,
                            bottom: 0
                        }}></motion.div>
                        <motion.div className="bg bg-3"
                        transition={{
                            type: 'spring',
                            duration: 2
                        }}
                        animate={isInView? {
                            right: "-20%",
                            bottom: '50px'
                        } : {
                            right: 0,
                            bottom: 0
                        }}></motion.div>
                    </div>
                </div>
            </CenteredContent>
        </div>
    )
}

const Story = styled(StoryFC)`
    display: flex;
    flex: 0 1 100%;
    justify-content: center;
    padding: 80px 0 150px 0;

    && > ${CenteredContent} {
        padding-right: 100px;
        flex-wrap: wrap;
        /* height: 400px; */

        > ${Title} {
            flex: 0 1 100%;
            margin-bottom: 50px;
            justify-content: left;
        }

        > .left, > .right {
            display: flex;
            flex: 1;
        }
        
        > .left {
            flex-direction: column;

            > ${Title} {
                margin-bottom: 30px;
            }
        }

        > .right {
            max-width: 400px;

            > .container {
                position: relative;
                display: flex;
                align-items: flex-end;
                /* margin-left: 20px; */
                /* background-color: orange; */
                
                > .bg {
                    position: absolute;
                    right: 0;
                    display: flex;
                    width: 300px;
                    height: 350px;
                    border-radius: 30px 30px 0 0;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
                }

                > .bg-1 {
                    background-color: orange;
                    z-index: 3;
                    background-image: url('/images/img1.jpg');
                }

                > .bg-2 {
                    background-color: pink;
                    z-index: 2;
                    background-image: url('/images/img2.jpg');
                }

                > .bg-3 {
                    background-color: green;
                    background-image: url('/images/img3.jpg');
                    z-index: 1;
                }

                > img {
                    width: 400px;
                    z-index: 10;
                }
            }
        }
    }

    @media screen and (max-width: 920px) {
        && > ${CenteredContent} {
            padding-right: 20px;
            gap: 20px;
        }
        && > ${CenteredContent} > .left {
            order: 2;
        }

        && > ${CenteredContent} > .right {
            order: 1;
            min-width: 100%;
            height: 400px;
            justify-content: center;
            
            > .container {
                margin-right: 80px;
            }
        }
    }

    @media screen and (max-width: 485px) {

        && > ${CenteredContent} > .left > ${TextPreset1}  > .text-content {
            font-size: 15px;
        }

        && > ${CenteredContent} > .right {
            height: 300px;

            > .container {
                height: 100%;
            }
        }
        
        && > ${CenteredContent} > .right > .container > img {
            width: 250px;
        }

        && > ${CenteredContent} > .right > .container > .bg {
            position: absolute;
            right: 0;
            display: flex;
            width: 200px;
            height: 250px;
            border-radius: 30px 30px 0 0;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

`

export default Story;