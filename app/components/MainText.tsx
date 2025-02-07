"use client"
import { motion } from "motion/react"

const MainText:React.FC = () => {
    return(
        <>
            <motion.h1 
            transition={{type: "spring", duration: 1}}
            initial={{marginLeft: -280, opacity: 0}}
            animate={{ marginLeft: 0,opacity: 1 }}>Let's Enjoy The</motion.h1>
            <motion.h1
            transition={{type: "spring", duration: 1, delay: 0.1}}
            initial={{marginLeft: -280, opacity: 0}}
            animate={{ marginLeft: 0, opacity: 1 }}>Wonders of Paracelis</motion.h1>
            <motion.h1
            transition={{type: "spring", duration: 1, delay: 0.3}}
            initial={{marginLeft: -280, opacity: 0}}
            animate={{ marginLeft: 0, opacity: 1 }}>Mountain Province</motion.h1>
        </>
    )
}

export default MainText;