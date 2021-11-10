import React, { useEffect } from 'react'
import { Box, Flex, Text, Icon } from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { AiOutlineMinus, AiOutlineClose, AiOutlineFullscreen, AiFillFolder } from 'react-icons/ai';
import { openFolder, setSelectedIcon } from '../action';
import classes from '../App.module.css'

export default function DesktopIcon(props) {

    const dispatch = useDispatch()
    const selectedIconID = useSelector(state => state.selectedIcon)

    useEffect(() => {

    }, [selectedIconID])

    const openFolderWindow = (id) => {
        dispatch(openFolder(id))
    }

    const setSelectedIconDesktop = (e) => {
        e.stopPropagation()
        dispatch(setSelectedIcon(props.appData.id))
    }

    return (
        <Flex ml={3} borderRadius="3px" mb={3} style={selectedIconID === props.appData.id ? { background: "rgba(255, 255, 255, 0.2)" } : { background: "transparent" }} userSelect="none" flexDirection="column" alignItems="center" height="70px" width="75px" onClick={(e) => setSelectedIconDesktop(e)} onDoubleClick={() => openFolderWindow(props.appData.id)}>
            <Box pointerEvents="none">

                <Box w="50px" h="50px" mb={1}>
                    <img src={props.appData.icon} alt="nav icon" />
                </Box>
            </Box>

            <Box pointerEvents="none">
                <Text color="white" fontSize="12px">{props.appData.name}</Text>
            </Box>
        </Flex>
    )
}
