import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Main() {

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1, 
            transition: {}
        },
        exit: {
            x: '-100vw',
            tranistion: { ease: 'easeInOut'}
        }
    }

    return (
        <motion.div className="main container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <Link to="/">
            Home
            </Link>
        </motion.div>
    )
}
