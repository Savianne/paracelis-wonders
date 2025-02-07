"use client"
import React from "react"
import { Gallery } from "next-gallery"
import styled from "styled-components"
import axios from "axios"
import Loading from "./Loading"
import { RESOURCES_SERVER_URL } from "../resource-server-url"
import { IStyledFC } from "../types/IStyledFC"

interface IGallery extends IStyledFC {
    placeUID: string;
    src: string[];
} 

const PlaceGalleryFC:React.FC<IGallery> = ({className, src, placeUID}) => {
    const [selectedFiles, setSelectedFiles] = React.useState<({img: HTMLImageElement, uid: string})[] | null>(null);
    const [onFullScreenImage, setOnFullScreenImage] = React.useState<{img: HTMLImageElement, uid: string} | null>(null);
    const [showFullScreen, setShowFullScreen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        const loadedImages: ({img: HTMLImageElement, uid: string})[] = [];
        src.forEach(item => {
            const img = new Image();
            img.src = `${RESOURCES_SERVER_URL}/images/gallery/${item}`
            img.onload = () => {
                loadedImages.push({img, uid: item});

                // When all images are loaded, update state
                if (loadedImages.length === src.length) {
                    setSelectedFiles([...loadedImages]);
                }
            }
        })
    }, [src]);

    return(
        <div className={className}>
            {
                selectedFiles? 
                <Gallery 
                widths={[500, 1000, 1600]}
                ratios={[2.2, 4, 6, 8]}
                lastRowBehavior="fill"
                threshold={0}
                images={selectedFiles.map(img => ({
                src: img.img.src,
                aspect_ratio:  img.img.naturalWidth / img.img.naturalHeight
                }))}
                overlay={(i) => {
                    return(<Overlay src={selectedFiles[i].img.src} onClick={() => {
                        setOnFullScreenImage(selectedFiles[i]);
                        setShowFullScreen(true)
                    }} />)
                }}
                /> : ""
            }
            {
                showFullScreen && onFullScreenImage? 
                <FullScreenView src={onFullScreenImage.img.src} 
                onExitFullScreen={() => setShowFullScreen(false)} /> : ""
            }
            {
                isLoading? <Loading /> : ""
            }
        </div>
    )
}

interface IFullScreenView extends IStyledFC {
    src: string;
    onExitFullScreen: () => void;
}

const FullScreenViewFC: React.FC<IFullScreenView> = ({className, src, onExitFullScreen}) => {
    const elementRef = React.useRef<HTMLDivElement | null>(null);

    return(
        <div className={className} ref={elementRef}>
            <div className="action-toogle-container">
                <div className="action-btn" onClick={() => {
                    onExitFullScreen()
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    <p>Exit</p>
                </div>
            </div>
            <div className="img-container">
                <img src={src} />
            </div>
            
        </div>
    )
}
 
const FullScreenView = styled(FullScreenViewFC)`
    position: fixed;
    z-index: 5000;
    display: flex;
    width: 100%;
    height: 100vh;
    position: fixed;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    background-color: #121212ef;
    backdrop-filter: blur(5px);
    align-items: center;
    justify-content: center;

    && .img-container {
        position: absolute;
        bottom: 0;
        display: flex;
        flex: 0 1 100%;
        height: 85%;
    }

    && > .action-toogle-container {
        display: flex;
        position: absolute;
        top: 0;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 15%;
    
        /* background-color: #06064849; */

        > .action-btn {
            display: flex;
            align-items: center;
            padding: 15px;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            font-size: 12px;
            
            > svg {
                width: 15px;
                margin-right: 10px;
                fill: white;
            }
        }

        > .action-btn:hover {
            background-color: #385e7643;
        }

    }

    && > .confirm-overlay {
        display: flex;
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
       
        > .confirm-delete, > .confirm-change {
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
            flex-direction: column;
            background-color: white;
            border-radius: 5px;

            > h1 {
                font-size: 14px;
            }

            > .actions {
                display: flex;
                margin-top: 25px;
                gap: 10px;
                justify-content: flex-end;

                > span {
                    padding: 8px;
                    border-radius: 5px;
                    cursor: pointer;
                    color: white;
                    font-size: 13px;
                }

                > .confirm {
                    background-color: #00b3ff;
                }

                > .cancel {
                    background-color: #ffa71a;
                }
            }
        }
    }
`;

interface IOverlay extends IStyledFC {
    src: string;
    onClick: () => void
}

const OverlayFC: React.FC<IOverlay> = ({className, src, onClick}) => {
    return(
        <div className={className} onClick={onClick}>
            <img src={src} />        
        </div>
    )
}

const Overlay = styled(OverlayFC)`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 2000;

    && > img {
        width: 100%;
        height: 100%;
    }

    && > img:hover {
        transform: scale(1.2); 
        transition: all 1s;  
    }
`

const PlaceGallery = styled(PlaceGalleryFC)`
    display: inline-block;
    width: 100%;
    z-index: 1000;
`;

export default PlaceGallery;