import React, { useEffect, useState } from 'react'
import classes from "../App.module.css"
import { Box, Flex, Heading, Icon, Text, Center } from "@chakra-ui/react"
import { useDispatch, useSelector, useStore } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { AiOutlineMinus, AiOutlineClose, AiOutlineFullscreen, AiFillFolder } from 'react-icons/ai';
import { bringApplicationWindowToFront, closeWindow, resetMicroWindowApplication, saveApplicationWindowPosition, setMicroWindowTimer } from '../action'
import FolderWindow from './FolderWindow'
import Draggable from 'react-draggable';

export default function AppWindow(props) {

    const dispatch = useDispatch()
    const apps = useSelector(state => state.apps)
    const [width, setWidth] = useState(55)
    const [height, setHeight] = useState(500)
    const timeoutID = useSelector(state => state.timeoutID)
    const appData = apps.filter(app => app.id === props.appId)[0]


    const closeApp = (e, id) => {
        dispatch(closeWindow(id))
        dispatch(resetMicroWindowApplication())
        e.target.closest(".parent-window").style.borderRadius = "10px"
        e.target.closest(".parent-window").style.border = "1px solid lightblue"
        setHeight(500)
        setWidth(55)
    }

    const fullScreen = (e, id) => {
        setWidth(100)
        let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        setHeight(vh - 50)
        dispatch(saveApplicationWindowPosition(id, {
            translateX: 0,
            translateY: 0
        }))
        e.target.closest(".parent-window").style.borderRadius = "0px"
        e.target.closest(".parent-window").style.border = "0px"
    }

    const logWindowLocation = (e, id) => {
        let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        let vw = Math.max(document.documentElement.clientWidth || 0, window.clientWidth || 0)
        let clientX = e.clientX
        let clientY = e.clientY
        let srcEle = e.srcElement.closest(".parent-window")
        try {
            if (clientX <= 100) {
                dispatch(saveApplicationWindowPosition(id, {
                    translateX: 0,
                    translateY: 0
                }))
                setHeight(vh - 50)
            }
            else {

                const style = window.getComputedStyle(srcEle)
                const matrix = new DOMMatrixReadOnly(style.transform)
                dispatch(saveApplicationWindowPosition(id, {
                    translateX: matrix.m41,
                    translateY: matrix.m42
                }))
                setHeight(500)
                setWidth(55)
            }
            console.log("try", clientX, clientY)
        }
        catch (e) {
            console.log("except", clientX, clientY)
            if (clientX <= 100) {
                dispatch(saveApplicationWindowPosition(id, {
                    translateX: 0,
                    translateY: 0
                }))
            }
            else if ((clientX > vw - 400 || clientY > vh - 200) || (clientY < 0 && clientX > vw / 2)) {
                dispatch(saveApplicationWindowPosition(id, {
                    translateX: vw * 0.45,
                    translateY: 0
                }))
            }
            setHeight(vh - 50)

        }

    }

    const bringToFront = (e, id) => {
        dispatch(bringApplicationWindowToFront(id))
        e.stopPropagation()
    }

    const resetMicroWindowTimer = () => {
        console.log(timeoutID)
        clearTimeout(timeoutID)
        dispatch(setMicroWindowTimer(null))
    }

    const closeMicroWindow = () => {
        // let timerID = setTimeout(() => {
        //     dispatch(resetMicroWindowApplication())
        // }, 500)
        // dispatch(setMicroWindowTimer(timerID))

    }

    const hoverColor = (e, bg) => {
        e.target.closest(".icon-button").style.backgroundColor = bg
    }


    if (props.size === "sm") {
        return (

            <Box onMouseLeave={(e) => closeMicroWindow()} onMouseOver={() => resetMicroWindowTimer()} position="absolute" width={"220px"} height={"170px"} left={props.pos["x"] - 100 + "px"} top="76vh" overflow="hidden" borderRadius="10px" background="#f8f8f8" zIndex={10000}>
                <Flex justifyContent="space-between" alignItems="center" zIndex={10001} position="absolute" left="0" top="0" height="30px" width="100%" background="#e6e6e6">
                    <Flex justifyContent="space-between" alignItems="center" ml={2}>
                        <Box w="15px" h="15px" mr={1}>
                            <img src={appData.icon} alt="nav icon" />
                        </Box>
                        <Text color="#212121" fontSize="sm" width="150px" isTruncated>FolderName</Text>
                    </Flex>
                    <Center className="icon-button" onClick={(e) => closeApp(e, appData.id)} alignItems="center" height="30px" width="30px" onMouseLeave={(e) => hoverColor(e, "transparent")} onMouseOver={(e) => hoverColor(e, "red")}>
                        <Icon color="#212121" as={AiOutlineClose} w={5} h={5} />
                    </Center>
                </Flex>
                <Box height="140px" marginTop="30px" overflow="hidden" p={"10px"} bg="#e6e6e6">
                    <div style={{ zoom: "0.1", height: "100%", overflow: "hidden", borderRadius: "10px" }} >
                        {props.appExe}
                    </div>
                </Box>


            </Box>
        )
    }
    else {
        return (

            <Draggable resize="both" onMouseDown={(e) => bringToFront(e, appData.id)} position={{ x: appData.left, y: appData.top }} onStop={(e) => logWindowLocation(e, appData.id)}>

                <Box position="absolute" left="0" top="0" width={'width' in appData ? appData.width + 10 + "px" : width + "vw"} height={'height' in appData ? appData.height + 45 + "px" : height + "px"} background="#f8f8f8" zIndex={appData.zIndex} borderRadius="10px" overflow="hidden" boxShadow="-3px 10px 14px 0px rgba(0,0,0,0.45);" border="1px solid lightblue" className="parent-window">
                    <Flex justifyContent="space-between" alignItems="center" position="absolute" left="0" top="0" height="40px" width="100%" background="#e6e6e6">
                        <Flex justifyContent="space-between" alignItems="center" ml={2} pointerEvents="none">
                            <Box w="20px" h="20px" mr={1}>
                                <img src={appData.icon} alt="nav icon" />
                            </Box>
                            <Heading fontSize="lg" color="#212121">FolderName</Heading>
                        </Flex>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Center className="icon-button" alignItems="center" height="40px" width="40px" onMouseLeave={(e) => hoverColor(e, "transparent")} onMouseOver={(e) => hoverColor(e, "rgba(0,0,0,0.2)")}>
                                <Icon color="#212121" as={AiOutlineMinus} w={5} h={5} />
                            </Center>
                            <Center className="icon-button" onClick={(e) => fullScreen(e, appData.id)} alignItems="center" height="40px" width="40px" onMouseLeave={(e) => hoverColor(e, "transparent")} onMouseOver={(e) => hoverColor(e, "rgba(0,0,0,0.2)")}>

                                <Icon color="#212121" as={AiOutlineFullscreen} w={5} h={5} />
                            </Center>
                            <Center className="icon-button" onClick={(e) => closeApp(e, appData.id)} alignItems="center" height="40px" width="40px" onMouseLeave={(e) => hoverColor(e, "transparent")} onMouseOver={(e) => hoverColor(e, "red")}>
                                <Icon color="#212121" as={AiOutlineClose} w={5} h={5} />
                            </Center>

                        </Flex>
                    </Flex>
                    <Box height={Math.max(370, 'height' in appData ? appData.height + 45 : height) + "px"} paddingTop="40px" overflow={'overflow' in appData ? appData.overflow : "scroll"}>

                        {props.appExe}
                    </Box>


                </Box>
            </Draggable >
        )
    }

}
