import React from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { resetMicroWindowApplication, setMicroWindowApplication } from '../action'

export default function NavbarIcons(props) {

    const dispatch = useDispatch()

    const openMicroWindow = (e, id) => {
        dispatch(setMicroWindowApplication(id, { "x": e.clientX, "y": 0 }))
    }

    const closeMicroWindow = () => {
        setTimeout(() => {
            dispatch(resetMicroWindowApplication())
        }, 2000);
    }

    return (
        <Flex flexDirection="column" alignItems="center" mr={3} onMouseLeave={(e) => closeMicroWindow()} onMouseOver={(e) => openMicroWindow(e, props.appData.id)}>
            <Box w="35px" h="35px" mb={1}>
                <img src={props.appData.icon} alt="nav icon" />
            </Box>
            <Box bg="grey" borderRadius="20px" width="10px" height="5px"></Box>
        </Flex>
    )
}
