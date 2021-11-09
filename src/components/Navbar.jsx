import React, { useState } from 'react'
import classes from "../App.module.css"
import { useSelector } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { BiWifi, BiVolumeFull } from 'react-icons/bi';
import { AiFillFolder } from 'react-icons/ai';
import { BsBatteryCharging } from 'react-icons/bs';
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"

export default function Navbar() {

    let apps = useSelector(state => state.apps)
    let dateTodayTemp = new Date().toLocaleString().split(", ")[0].split("/");
    let dateToday =
        dateTodayTemp[1] + "-" + dateTodayTemp[0] + "-" + dateTodayTemp[2];
    const [timeNow, setTimeNow] = useState(new Date().toLocaleString().split(", ")[1].slice(0, 5))

    setInterval(() => {
        dateTodayTemp = new Date().toLocaleString().split(", ")[0].split("/");
        dateToday =
            dateTodayTemp[1] + "-" + dateTodayTemp[0] + "-" + dateTodayTemp[2];
        setTimeNow(new Date().toLocaleString().split(", ")[1].slice(0, 5))
    }, 60000);

    return (
        <Flex justifyContent="center" alignItems="center" position="fixed" zIndex="10000" bottom="0" left="0" right="0" bg="blue" w="100vw" h="60px">
            {apps.filter(app => app.isOpen).map(app => { return <NavbarIcons appData={app} /> })}
            <Flex alignItems="center" position="absolute" height="60px" right="0" >
                <Flex flexDir="column" alignItems="center" class="language" mr={4}>
                    <Text fontSize="sm">ENG</Text>
                    <Text fontSize="sm">US</Text>
                </Flex>
                <Flex alignItems="center" class="language" mr={2}>
                    <Icon as={BiWifi} w={5} h={5} mr={2} />
                    <Icon as={BiVolumeFull} w={5} h={5} mr={2} />
                    <Icon as={BsBatteryCharging} w={5} h={5} mr={2} />
                </Flex>
                <Flex flexDir="column" alignItems="flex-end" class="language" mr={8}>
                    <Text fontSize="sm">{timeNow}</Text>
                    <Text fontSize="sm">{dateToday}</Text>
                </Flex>

            </Flex>
        </Flex>
    )
}
