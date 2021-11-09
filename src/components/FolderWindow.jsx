import React from 'react'
import classes from "../App.module.css"
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { AiOutlineMinus, AiOutlineClose, AiOutlineFullscreen, AiFillFolder } from 'react-icons/ai';
import { openApplicationExecutable } from '../action'

export default function FolderWindow(props) {

    const dispatch = useDispatch()

    const openApplication = (id) => {
        dispatch(openApplicationExecutable(id))
    }

    return (

        <Box>
            <Flex marginLeft="25px" width="100%" marginBottom="20px">
                <Box width="40%">
                    <Text>Name</Text>
                </Box>
                <Box width="30%">
                    <Text>Date Modified</Text>
                </Box>
                <Box width="15%">
                    <Text>Type</Text>
                </Box>
                <Box width="15%">
                    <Text>Size</Text>
                </Box>
            </Flex>
            {props.appList.map(app => {
                return <Flex width="100%" onClick={() => openApplication(app.id)}>
                    <Flex alignItems="center" width="40%">
                        <Icon as={AiFillFolder} w={6} h={6} />
                        <Text ml={2}>{app.name}</Text>
                    </Flex>
                    <Box width="30%">
                        <Text marginLeft="20px">10-20-2021 10:20</Text>
                    </Box>
                    <Box width="15%">
                        <Text marginLeft="20px">Executable</Text>
                    </Box>
                    <Box width="15%">
                        <Text marginLeft="20px">1,592KB</Text>
                    </Box>
                </Flex>
            })}
        </Box>

    )
}
