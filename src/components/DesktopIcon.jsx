import React from 'react'
import { Box, Flex, Text, Icon } from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { AiOutlineMinus, AiOutlineClose, AiOutlineFullscreen, AiFillFolder } from 'react-icons/ai';
import { openFolder } from '../action';

export default function DesktopIcon(props) {

    const dispatch = useDispatch()

    const openFolderWindow = (id) => {
        dispatch(openFolder(id))
    }

    return (
        <Flex flexDirection="column" alignItems="center" height="70px" width="100px" onDoubleClick={() => openFolderWindow(props.appData.id)}>
            <Box pointerEvents="none">

                <Box w="35px" h="35px" mb={1}>
                    <img src={props.appData.icon} alt="nav icon" />
                </Box>
            </Box>

            <Box pointerEvents="none">
                <Text fontSize="12px">{props.appData.name}</Text>
            </Box>
        </Flex>
    )
}
