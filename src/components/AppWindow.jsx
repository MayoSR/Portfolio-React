import React, { useEffect, useState } from 'react'
import classes from "../App.module.css"
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"
import { useDispatch, useSelector, useStore } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { AiOutlineMinus, AiOutlineClose, AiOutlineFullscreen, AiFillFolder } from 'react-icons/ai';
import { bringApplicationWindowToFront, closeWindow, resetMicroWindowApplication, saveApplicationWindowPosition } from '../action'
import FolderWindow from './FolderWindow'
import Draggable from 'react-draggable';

export default function AppWindow(props) {

    const dispatch = useDispatch()
    const state = useSelector(state => state.apps)
    const [width, setWidth] = useState(50)
    const [height, setHeight] = useState(500)

    const closeApp = (id) => {
        dispatch(closeWindow(id))
        dispatch(resetMicroWindowApplication())
    }

    const fullScreen = (e, id) => {
        setWidth(100)
        setHeight(window.innerHeight - 60)
        dispatch(saveApplicationWindowPosition(id, {
            translateX: 0,
            translateY: 0
        }))
        e.target.closest(".parent-window").style.borderRadius = "0px"
        e.target.closest(".parent-window").style.border = "0px"
    }

    const logWindowLocation = (e, id) => {
        const style = window.getComputedStyle(e.srcElement.closest(".parent-window"))
        const matrix = new DOMMatrixReadOnly(style.transform)
        dispatch(saveApplicationWindowPosition(id, {
            translateX: matrix.m41,
            translateY: matrix.m42
        }))
    }

    const bringToFront = (id) => {
        dispatch(bringApplicationWindowToFront(id))
    }

    if (props.size === "sm") {
        return (

            <Box position="absolute" width={"200px"} height={"200px"} left={props.pos["x"] - 100 + "px"} top="71vh" overflow="hidden" borderRadius="10px" background="black" zIndex={10000}>
                <Flex justifyContent="space-between" alignItems="center" zIndex={10001} position="absolute" left="0" top="0" height="30px" width="100%" background="blue">
                    <Flex justifyContent="space-between" alignItems="center" ml={2}>
                        <Box w="15px" h="15px" mr={1}>
                            <img src={"/icons/cv.png"} alt="nav icon" />
                        </Box>
                        <Text fontSize="sm">FolderName</Text>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Icon as={AiOutlineClose} onClick={() => closeApp(props.appData.id)} w={6} h={6} mr={2} />
                    </Flex>
                </Flex>
                <Box height="170px" marginTop="30px" p={4}>
                    {props.appData.type === "FOLDER" ? <FolderWindow appList={state.filter(app => app.folder === props.appData.id)} /> : props.appData.executable}
                </Box>


            </Box>
        )
    }
    else {
        return (

            <Draggable onMouseDown={() => bringToFront(props.appData.id)} position={{ x: props.appData.left, y: props.appData.top }} onStop={(e) => logWindowLocation(e, props.appData.id)}>

                <Box position="absolute" left="0" top="0" width={width + "vw"} height={height + "px"} background="black" zIndex={props.appData.zIndex} borderRadius="10px" overflow="hidden" boxShadow="-3px 10px 14px 0px rgba(0,0,0,0.45);" border="1px solid lightblue" className="parent-window">
                    <Flex justifyContent="space-between" alignItems="center" position="absolute" left="0" top="0" height="40px" width="100%" background="blue">
                        <Flex justifyContent="space-between" alignItems="center" ml={2}>
                            <Box w="20px" h="20px" mr={1}>
                                <img src={"/icons/cv.png"} alt="nav icon" />
                            </Box>
                            <Heading fontSize="lg">FolderName</Heading>
                        </Flex>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Icon as={AiOutlineMinus} w={6} h={6} mr={2} />
                            <Icon as={AiOutlineFullscreen} w={6} h={6} mr={2} onClick={(e) => fullScreen(e, props.appData.id)} />
                            <Icon as={AiOutlineClose} onClick={() => closeApp(props.appData.id)} w={6} h={6} mr={2} />

                        </Flex>
                    </Flex>
                    <Box height="460px" marginTop="40px" >

                        {props.appData.type === "FOLDER" ? <FolderWindow appList={state.filter(app => app.folder === props.appData.id)} /> : props.appData.executable}
                    </Box>


                </Box>
            </Draggable >
        )
    }

}
