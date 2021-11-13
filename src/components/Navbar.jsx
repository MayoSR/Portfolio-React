import React, { useState } from 'react'
import classes from "../App.module.css"
import { useDispatch, useSelector } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { BiWifi, BiVolumeFull } from 'react-icons/bi';
import { AiFillFolder } from 'react-icons/ai';
import { BsChevronUp } from 'react-icons/bs';
import { BsBatteryCharging } from 'react-icons/bs';
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"
import { mainWindowToggle } from '../action';

export default function Navbar() {

    let apps = useSelector(state => state.apps)
    let mainWindowStatus = useSelector(state => state.mainWindowStatus)
    let dateTodayTemp = new Date().toLocaleString().split(", ")[0].split("/");
    let dateToday =
        dateTodayTemp[1] + "-" + dateTodayTemp[0] + "-" + dateTodayTemp[2];
    const [timeNow, setTimeNow] = useState(new Date().toLocaleString().split(", ")[1].slice(0, 5))
    const dispatch = useDispatch()

    setInterval(() => {
        dateTodayTemp = new Date().toLocaleString().split(", ")[0].split("/");
        dateToday =
            dateTodayTemp[1] + "-" + dateTodayTemp[0] + "-" + dateTodayTemp[2];
        setTimeNow(new Date().toLocaleString().split(", ")[1].slice(0, 5))
    }, 60000);


    return (
        <Flex justifyContent="center" alignItems="center" position="fixed" zIndex="10000" bottom="0" left="0" right="0" bg="linear-gradient(to right top, #0c346b, #073775, #033a80, #013c8a, #013f95, #013f95, #013f95, #013f95, #013c8a, #033a80, #073775, #0c346b);" w="100vw" h="50px">
            <Flex className="icon-container" p={"2px"} px={"6px"} borderRadius="3px" flexDirection="column" alignItems="center" onClick={() => dispatch(mainWindowToggle(1 - mainWindowStatus))}>
                <Box w="35px" h="35px" mb={1}>
                    <img src={"/icons/m.png"} alt="nav icon" />
                </Box>
            </Flex>
            {apps.filter(app => app.isOpen).map(app => { return <NavbarIcons appData={app} /> })}
            <Flex alignItems="center" position="absolute" height="50px" right="0" >
                <Icon color="white" as={BsChevronUp} w={5} h={5} mr={2} />
                <Flex flexDir="column" alignItems="center" class="language" mr={4}>
                    <Text color="white" fontSize="xs">ENG</Text>
                    <Text color="white" fontSize="xs">US</Text>
                </Flex>
                <Flex alignItems="center" class="language" mr={2}>

                    <Icon color="white" as={BiWifi} w={5} h={5} mr={2} />
                    <Icon color="white" as={BiVolumeFull} w={5} h={5} mr={2} />
                    <Icon color="white" as={BsBatteryCharging} w={5} h={5} mr={2} />
                </Flex>
                <Flex flexDir="column" alignItems="flex-end" class="language" mr={4}>
                    <Text color="white" fontSize="xs">{timeNow}</Text>
                    <Text color="white" fontSize="xs">{dateToday}</Text>
                </Flex>

            </Flex>
        </Flex>
    )
}
