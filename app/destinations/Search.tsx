"use client"
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/navigation";
import Spinner from "../components/Spinner";
import { RESOURCES_SERVER_URL } from "../resource-server-url";

const SearchBarFC: React.FC<{className?: string}> = ({className}) => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = React.useState("");
    const [showResult, setShowResult] = React.useState(false);
    const [result, setResult] = React.useState<({title: string, uid: string, coverPhoto: string})[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);


    async function search() {
        if(searchTerm.length) {
            setIsLoading(true)
            setShowResult(true);
            try {
                const res = await  axios.post("/api/search-place", {searchTerm});
                console.log(res.data)
                setResult(res.data.result)
            }
            catch(err) {
                console.log(err)
            }
            finally {
                setIsLoading(false)
            }
        }
    }
    return(
        <div className={className}>
            <form className="search-bar" onSubmit={(e) => {
                e.preventDefault();
                search();
                
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                <input value={searchTerm} onChange={(e) => {
                    setShowResult(false)
                    setSearchTerm(e.currentTarget.value)
                }} placeholder="Type to search" 
                onBlur={search}
                />
                {
                    searchTerm.length? 
                    <span className="clear" onClick={() => {
                        setShowResult(false)
                        setSearchTerm("")
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </span> : ''
                }
                
            </form>
            {
                showResult? 
                <div className="search-result">
                    {
                        isLoading? <Spinner /> : 
                        <>
                            <strong>Result: {result.length}</strong>
                            {
                                result.map(item => {
                                    return (
                                        <div key={item.uid} className="item" onClick={() => {
                                            router.push(`/destinations/${item.uid}`)
                                        }}>
                                            <h3>{item.title}</h3>
                                            <img src={`${RESOURCES_SERVER_URL}/images/gallery/${item.coverPhoto}`} alt="preview" />
                                        </div>
                                    )
                                })
                            }
                        </>
                    }
                    
                </div> : ""
            }
        </div>
    )
}

const SearchBar = styled(SearchBarFC)`
    display: flex;
    flex: 0 1 90%;
    flex-wrap: wrap;
    margin-top: 40px;

    && > form > svg {
        width: 30px;
        margin-left: 20px;
        fill: #56667d;
    }

    && > .search-bar {
        display: flex;
        flex: 0 1 100%;
        height: 70px;
        padding: 5px;
        border-radius: 50px;
        border: 1px solid gray;
        align-items: center;

        > .clear {
            width: fit-content;
            height: fit-content;
            cursor: pointer;
            margin-right: 10px;

            > svg {
                width: 20px;
                height: 20px;
            }
        }

        > input, && > input:active, && > input:focus {
            display: flex;
            flex: 0 1 100%;
            height: 100%;
            border: 0;
            font-size: 20px;
            border-radius: 50px;
            padding: 0 10px;
            outline: 0;
        }
        
        > .search-btn {
            display: flex;
            padding: 0 15px;
            height: 100%;
            width: 120px;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            border-radius: 50px;
            background-color: #56667d;
            cursor: pointer;
            margin-left: auto;
        }
    
        > .search-btn:hover {
            background-color:rgb(66, 80, 100);
            transition: background-color 300ms;
        }
    
        > .search-btn:active {
            opacity: 0.5;
            transition: opacity 300ms;
        }
    }

    && > .search-result {
        display: flex;
        flex: 0 1 100%;
        padding: 20px;
        /* height: 300px; */
        background-color: #f3f3f3;
        margin-top: 20px;
        flex-wrap: wrap;
        gap: 10px;

        > strong {
            font-size: 15px;
            flex: 0 1 100%;
            margin-bottom: 10px;
        }

        > .item {
            display: flex;
            flex: 0 1 100%;
            padding: 10px;
            border-left: 3px solid #bcebdd;
            cursor: pointer;
            align-items: center;

            > img {
                margin-left: auto;
                /* margin-right: 10px; */
                height: 30px;
            }

            > h3 {
                font-size: 12px;
            }
        }

        > .item:hover {
            background-color: #dbdbdb8b;
            transition: background-color 400ms;
        }

    }


`

export default SearchBar;