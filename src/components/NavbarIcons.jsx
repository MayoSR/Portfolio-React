import React, { useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { bringApplicationWindowToFront, resetMicroWindowApplication, setMicroWindowApplication, setMicroWindowTimer } from '../action'
import { useSelector } from 'react-redux'

export default function NavbarIcons(props) {

    const dispatch = useDispatch()
    const timeoutID = useSelector(state => state.timeoutID)

    const openMicroWindow = (e, id) => {
        e.target.closest(".icon-container").style.background = "rgba(255,255,255,0.2)"
        clearTimeout(timeoutID)
        dispatch(setMicroWindowApplication(id, { "x": e.target.closest(".icon-container").getBoundingClientRect().x, "y": 0 }))
    }

    const closeMicroWindow = (e) => {
        e.target.closest(".icon-container").style.background = "transparent"
        let timeoutID = setTimeout(() => {
            dispatch(resetMicroWindowApplication())
        }, 500)
        dispatch(setMicroWindowTimer(timeoutID))
    }

    const bringToFront = (e, id) => {
        dispatch(bringApplicationWindowToFront(id))
        e.stopPropagation()
    }

    return (
        <Flex className="icon-container" p={"2px"} px={"6px"} borderRadius="3px" flexDirection="column" alignItems="center" onMouseLeave={(e) => closeMicroWindow(e)} onMouseOver={(e) => openMicroWindow(e, props.appData.id)} onClick={(e) => bringToFront(e, props.appData.id)}>
            <Box w="30px" h="30px" mb={1}>
                <img src={props.appData.icon} alt="nav icon" style={{ height: "30px" }} />
            </Box>
            <Box bg="grey" borderRadius="20px" width="8px" height="4px" marginTop="-2px"></Box>
        </Flex>
    )
}
