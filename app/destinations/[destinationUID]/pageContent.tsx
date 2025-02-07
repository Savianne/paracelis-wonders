"use client"
import React from "react"
import styled from "styled-components"
import { IStyledFC } from "@/app/types/IStyledFC"
import Loading from "@/app/components/Loading"
import Error404 from "@/app/components/Error404"
import { RESOURCES_SERVER_URL } from "@/app/resource-server-url"
import PageBanner from "@/app/components/PageBanner"
import CenteredContent from "@/app/components/CenteredContent"
import axios from "axios"
import Comments from "@/app/components/Comments"
import Location from "@/app/components/Location";
import PlaceGallery from "@/app/components/PlaceGallery"
import Title from "@/app/components/Title"
import YoutubeVideosEmbed from "@/app/components/YoututbeVideoEmbed"

type TDestinationData = {
    title: string,
    description: string,
    uid: string,
    totalLikes: string,
    totalHearts: string,
    totalComments: string,
    coverPhoto: string,
    location: {
        lat: number
        lang: number
    }
}

interface IPageContent extends IStyledFC {
    uid: string;
    userEmail: string;
}

const PageContentFC: React.FC<IPageContent> = ({className, uid, userEmail}) => {
    const [data, setData] = React.useState<null | TDestinationData>(null);
    const [totalHearts, setTotalHearts] = React.useState(0);
    const [userHeart, setUserHeart] = React.useState(false);
    const [heartReactLoading, setHeartReactLoading] = React.useState(false);
    const [totalLikes, setTotalLikes] = React.useState(0);
    const [userLike, setUserLike] = React.useState(false);
    const [likeReactLoading, setLikeReactLoading] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [showComments, setShowComments] = React.useState(false);
    const [gallery, setGallery] = React.useState<string[]>([]);
    const [isLoadingImages, setIsLoadingImages] = React.useState(true);
    const [YTURLs, setYTURLs] = React.useState<({id: string, url: string})[]>([]);

    React.useEffect(() => {
        (async  ()=> {
            try {
                const data =  await axios.post('/api/get-embed-urls', {data : {destinationUID: uid}})
                
                if(!data.data.success) throw Error("Failed to fetch");

                setYTURLs(data.data.result)
            } catch (err) {
                console.log(err)
            }
        })()
    }, []);

    React.useEffect(() => {
        fetch("/api/get-place-data", {
            method: "POST",
            body: JSON.stringify({ uid })
        })
        .then(res => res.json())
        .then(data => {
            if(data.status) {
                setData(data.data);
                setTotalHearts(data.data.totalHearts);
                setTotalLikes(data.data.totalLikes);
            } else throw Error("No data found in the database")
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false)
        });
    }, []);

    React.useEffect(() => {
        axios.post('/api/check-user-heart-react', {data: {placeUID: uid, userEmail}})
        .then(d => {
            if(d.data.userHeartReact == 0) {
                setUserHeart(false)
            } else {
                setUserHeart(true);
            }
        })
        .catch(err => {
            console.log(err)
        });

        axios.post('/api/check-user-like-react', {data: {placeUID: uid, userEmail}})
        .then(d => {
            if(d.data.userLikeReact == 0) {
                setUserLike(false)
            } else {
                setUserLike(true);
            }
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    React.useEffect(() => {
        if(data) {
            fetch("/api/get-place-images", {
                method: "POST",
                body: JSON.stringify({ placeUID:  uid})
            })
            .then(res => res.json())
            .then(data => setGallery(data.result.map((i:any) => i.src)))
            .finally(() => {
                setIsLoadingImages(false)
            })
        }
    }, [data]);

    return(
        <div className={className}>
            {
                data? <>
                    <PageBanner imgUrl={data.coverPhoto? `${RESOURCES_SERVER_URL}/images/gallery/${data.coverPhoto}` : undefined}>
                        <CenteredContent>
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>
                            <div className="reactions-container">
                                <div className="reaction" style={{opacity: heartReactLoading? 0.5 : 1}} onClick={async () => {
                                    if(userHeart) {
                                        if(!heartReactLoading) {
                                            setHeartReactLoading(true);
                                            try {
                                                const res = await axios.post('/api/unheart', {data: {placeUID: uid, userEmail}})
                                                if(res.data.status == 'success') {
                                                    setUserHeart(false);
                                                    setTotalHearts(totalHearts - 1);
                                                    setTimeout(() => setHeartReactLoading(false), 1000)
                                                }
                                            } catch(err) {
                                                console.log(err)
                                            }
                                            finally {
                                                setHeartReactLoading(false);
                                            }
                                        }
                                    } else {
                                        if(userEmail) {
                                            if(!heartReactLoading) {
                                                setHeartReactLoading(true);
                                                try {
                                                    const res = await axios.post('/api/heart-react', {data: {placeUID: uid, userEmail}})
                                                    if(res.data.status == 'success') {
                                                        setUserHeart(true);
                                                        setTotalHearts(totalHearts + 1);
                                                        setTimeout(() => setHeartReactLoading(false), 1000)
                                                    }
                                                } catch(err) {
                                                    console.log(err)
                                                }
                                                finally {
                                                    setHeartReactLoading(false);
                                                }
                                            }
                                        } else {
                                            alert("Please login or register to react")
                                        }
                                    }
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                    {
                                        userHeart? totalHearts == 1? <h1>You loved this place</h1> : <h1>You and {totalHearts - 1} others love this</h1> : <h1>{totalHearts}</h1>
                                    }
                                </div>
                                <div className="reaction like" style={{opacity: likeReactLoading? 0.5 : 1}} onClick={async () => {
                                    if(userLike) {
                                        if(!likeReactLoading) {
                                            setLikeReactLoading(true);
                                            try {
                                                const res = await axios.post('/api/unlike', {data: {placeUID: uid, userEmail}})
                                                if(res.data.status == 'success') {
                                                    setUserLike(false);
                                                    setTotalLikes(totalLikes - 1);
                                                    setTimeout(() => setLikeReactLoading(false), 1000)
                                                }
                                            } catch(err) {
                                                console.log(err)
                                            }
                                            finally {
                                                setLikeReactLoading(false);
                                            }
                                        }
                                    } else {
                                        if(userEmail) {
                                            if(!likeReactLoading) {
                                                setLikeReactLoading(true);
                                                try {
                                                    const res = await axios.post('/api/like-react', {data: {placeUID: uid, userEmail}})
                                                    if(res.data.status == 'success') {
                                                        setUserLike(true);
                                                        setTotalLikes(totalHearts + 1);
                                                        setTimeout(() => setLikeReactLoading(false), 1000)
                                                    }
                                                } catch(err) {
                                                    console.log(err)
                                                }
                                                finally {
                                                    setLikeReactLoading(false);
                                                }
                                            }
                                        } else {
                                            alert("Please login or register to react")
                                        }
                                    }
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z"/></svg>
                                    {
                                        userLike? totalLikes == 1? <h1>You like this place</h1> : <h1>You and {totalLikes - 1} others like this</h1> : <h1>{totalLikes}</h1>
                                    }
                                </div>
                                <div className="reaction comment" onClick={() => setShowComments(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
                                    <h1>{data.totalComments}</h1>
                                </div>
                            </div>
                        </CenteredContent>
                    </PageBanner>
                    <div className="map-container">
                        <Location initialCoords={{lat: +data.location.lat, lng: +data.location.lang }} />
                    </div>
                    <Title>
                        GALLERY
                        <p className="text1">COLLECTION</p>
                        <p className="text2">Collection Spotlight</p>
                    </Title>
                    <CenteredContent>
                        <PlaceGallery placeUID={uid} src={gallery}/>
                    </CenteredContent>
                    <Title>
                        VIDEOS
                        <p className="text1">COLLECTION</p>
                        <p className="text2">Collection Spotlight</p>
                    </Title>
                    <CenteredContent>
                        <YoutubeVideosEmbed urls={YTURLs}/>
                    </CenteredContent>
                </> : ""
            }
            {
                showComments?  <Comments onClose={() => setShowComments(false)} userEmail={userEmail} placeUID={uid} /> : ""
            }
            {
                isLoading? <Loading /> : ''
            }

            {
                (!isLoading) && data == null? <Error404 /> : ''
            }
        </div>
    )
}

const PageContent = styled(PageContentFC)`
    display: flex;
    flex: 0 1 100%;
    flex-wrap: wrap;
    justify-content: center;

    && > ${Title} {
        margin: 80px 0;
    }

    && > .map-container {
        display: flex;
        flex: 0 1 100%;
        margin: 0;
        flex-wrap: wrap;
    }
    
    && > ${PageBanner} {
        justify-content: center;
        align-items: center;
    }

    && > ${PageBanner} > ${CenteredContent} {
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

    && > ${PageBanner} > ${CenteredContent} > .reactions-container {
        display: flex;
        flex: 0 1 100%;
        justify-content: center;
        margin-top: 20px;
        gap: 10px;

        > .reaction {
            display: flex;
            padding: 10px;
            border-radius: 5px;
            color: white;
            border: 1px solid #c7c7c7;
            align-items: center;
            background-color: #0e17385f;
            cursor: pointer;

            > svg {
                width: 30px;
                fill: #f62072;
            }

            > h1 {
                font-size: 12px;
                padding: 0 0 0 10px;
            }
        }

        > .like > svg {
            fill: #23a6e3;
        }

        > .comment > svg {
            fill: #e39123;
        }

    }

    @media screen and (max-width: 800px) {
        && > ${PageBanner} > ${CenteredContent} > h1 {
            font-size: 40px;
        }
    }

`

export default PageContent