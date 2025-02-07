'use client';
import styled from "styled-components";
import React from "react";
import { IStyledFC } from "../types/IStyledFC";
import axios from "axios";
import GoogleLogin from "./GoogleLogin";

interface IComment {
    id: string;
    destinationUID: string;
    comment: string;
    date: string;
    user: {
        name: string;
        email: string;
        dp: string;
    }
}

interface IComments extends IStyledFC {
    placeUID: string;
    userEmail?: string;
    onClose: () => void
}

const CommentsFC: React.FC<IComments> = ({className, placeUID, userEmail, onClose}) => {
    const [comment, setComment] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(true);
    const [loadedComments, setLoadedComment] = React.useState<IComment[]>([]);

    React.useEffect(() => {
        axios.post('/api/get-comments', {data: {placeUID}})
        .then(data => {
            setLoadedComment(data.data.comments.map((comment: any) => ({
                ...comment,
                user: {
                    name: comment.name,
                    dp: comment.dp,
                    email: comment.email
                }
            })))
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, []);

    return(
        <div className={className}> 
            <div className="modal-head">
                <h3>Feedbacks</h3>
                <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z"/></svg>
            </div>
            <div className="scrolling-content">
                {
                    loadedComments.length? <>
                    {
                        loadedComments.map(comment => (
                            <div className="comment" key={comment.id}>
                                <img src={comment.user.dp} alt="" />
                                <div>
                                    <h5>{comment.user.name}</h5>
                                    <h6>{new Date(comment.date).toDateString()}</h6>
                                    <p>{comment.comment}</p>
                                    {
                                        userEmail && userEmail == comment.user.email? <span className="btn-delete" onClick={async () => {
                                            setIsLoading(true);
                                            try {
                                                const res = await axios.post('/api/delete-comment', {data: {commentId: comment.id}});
                                                setLoadedComment(loadedComments.filter(c => c.id !== comment.id));
                                            }
                                            catch(err) {
                                                console.log(err)
                                            }
                                            finally {
                                                setIsLoading(false)
                                            }

                                        }}>Delete</span> : ''
                                    }
                                </div>
                            </div>
                        ))
                    }
                    </> : ""
                }
                {
                    isLoading == false && loadedComments.length < 1? <h1 className="no-comments">No feedbacks yet</h1> : ""
                }
            </div>
            {
                userEmail? 
                <form onSubmit={async (e) => {
                    e.preventDefault();
                }}>
                    <textarea value={comment} onChange={(e) => setComment(e.currentTarget.value)} name="feedback" id="feedback" placeholder="Feedback"></textarea>
                    <span className="submit-btn" onClick={async (e) => {
                        if(comment) {
                            setIsLoading(true);
                            try {
                                const res = await axios.post('/api/add-comment', {data: {
                                    placeUID,
                                    userEmail,
                                    comment
                                }})
    
                                setLoadedComment([{...res.data.comment, user: {name: res.data.comment.name, email: res.data.comment.email, dp: res.data.comment.dp}}, ...loadedComments])
                                setComment('')
                            } catch (err) {
                                console.log(err)
                            }      
                            finally {
                                setIsLoading(false);
                            }          
                        }
                    }}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"/></svg> */}
                        Add feedback
                    </span>
                </form> : <GoogleLogin />
            }
            {
                isLoading?
                <div className="loading">
                    <div className="loader"></div>
                </div> : ""
            }
            
        </div>
    )
}


const Comments = styled(CommentsFC)`
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    display: flex;
    width: 400px;
    border-radius: 10px;
    background-color: white;
    flex-wrap: wrap;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    z-index: 1000;

    && > ${GoogleLogin} {
        position: static;
        flex: 0 1 100%;
    }

    && > .modal-head {
        display: flex;
        flex: 0 1 100%;
        padding: 8px;
        height: fit-content;
        border-radius: 8px;
        /* background-color: #5960ba29; */
        align-items: center;

        > h3 {
            color: #606060;
            font-size: 15px;
            /* font-weight: 500; */
        }

        > svg {
            margin-left: auto;
            width: 10px;
            cursor: pointer;
            fill: #606060;
        }
    }

    && > .scrolling-content {
        display: flex;
        flex: 0 1 100%;
        min-height: 200px;
        max-height: 60vh;
        overflow: auto;
        flex-wrap: wrap;
        gap: 20px;
        padding: 20px 0;

        > .comment {
            display: flex;
            flex: 0 1 100%;
            gap: 10px;

            > img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }

            > div {
                display: flex;
                flex-direction: column;
                gap: 5px;

                > h6 {
                    color: #ABABAB;
                }

                > p {
                    color: #585858;
                    font-size: 15px;
                    font-family:  WorkSansRegular;
                }

                > .btn-delete {
                    display: flex;
                    font-size: 11px;
                    width: fit-content;
                    border-radius: 2px;
                    padding: 8px;
                    background-color: #b1b1b187;
                    cursor: pointer;
                }
            }
        }

        > .no-comments {
            display: flex;
            height: 100%;
            width: 100%;
            align-items: center;
            justify-content: center;
            color: #9d9d9d76;
        }

    }


    && > form {
        display: flex;
        flex: 0 1 100%;
        flex-wrap: wrap;
        margin-top: 10px;
        
        > textarea {
            flex: 0 1 100%;
            border-radius: 5px; 
            outline: 0;
            border: 0;
            background-color: #eaeaea;
            min-height: 80px;
            padding: 10px 20px;
            font-family: InterRegular;
        }

        > .submit-btn {
            display: flex;
            flex: 0 1 100%;
            padding: 10px 15px;
            margin-top: 10px;
            /* height: 20px; */
            // flex-direction: column;
            align-items: center;
            justify-content: center;
            // border: 1px solid white;
            color: white;
            font-size: 13px;
            border-radius: 5px;
            background-color: rgb(0, 89, 255);
            cursor: pointer;
        }

        > .submit-btn:hover {
            background-color: rgb(4, 55, 149);
            transition: background-color 300ms;
        }

        > .submit-btn:active {
            opacity: 0.5;
            transition: opacity 300ms;
        }

    }

    && > .loading {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #05051c67;
        align-items: center;
        justify-content: center;

        .loader {
            --d:22px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            color: #2548b0;
            box-shadow: 
                calc(1*var(--d))      calc(0*var(--d))     0 0,
                calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
                calc(0*var(--d))      calc(1*var(--d))     0 2px,
                calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
                calc(-1*var(--d))     calc(0*var(--d))     0 4px,
                calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
                calc(0*var(--d))      calc(-1*var(--d))    0 6px;
            animation: l27 1s infinite steps(8);
        }
    }
    @keyframes l27 {
        100% {transform: rotate(1turn)}
    }

    @media screen and (max-width: 450px) {
        &&  {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            border-radius: 0;

            > form {
                height: fit-content;

                > .submit-btn {
                    height: 50px;
                }
            }
        }
    }
`

export default Comments;