"use client"
import styled from "styled-components"
import React from "react"
import { YouTubeEmbed } from 'react-social-media-embed';
import { IStyledFC } from "../types/IStyledFC"

interface IYoutubeEmbed {
    id: string;
    url: string;
}

interface IYutubeVideoEmbed extends IStyledFC {
    urls: IYoutubeEmbed[];
}

const YutubeVideosEmbedFC: React.FC<IYutubeVideoEmbed> = ({className, urls}) => {

    return(
        <div className={className}> 
            {
                urls.map((url, i) => {
                    return(
                        <YoutubeVideoEmbed key={i} url={url.url} />
                    )
                })
            }
        </div>
    )
}

interface IYoutubeVideoEmbedFC extends IStyledFC {
    url: string,
}

const YoutubeVideoEmbedFC:React.FC<IYoutubeVideoEmbedFC> = ({className, url}) => {
    const YOUTUBE_DEFAULT_HEIGHT = 390;
    const [embedHeight, setEmbedHeight] = React.useState(YOUTUBE_DEFAULT_HEIGHT);
    return(
        <div className={className}>
            <YouTubeEmbed
            url={url}
            height={embedHeight}
            youTubeProps={{
                onReady: async (r) =>
                (await r.target.getIframe()).addEventListener('load', () => setEmbedHeight((height) => height + 1)),
            }}
            />
        </div>
    )
}


const YoutubeVideoEmbed = styled(YoutubeVideoEmbedFC)`
    display: flex;
    height: fit-content;
    flex-wrap: wrap;
    justify-content: center;
`;

const YoutubeVideosEmbed = styled(YutubeVideosEmbedFC)`
    display: flex;
    flex: 0 1 100%;
    flex-wrap: wrap;
    /* padding: 0 50px; */
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px; */
    margin-top: 50px;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
`

export default YoutubeVideosEmbed;