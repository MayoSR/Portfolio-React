import React, { useState } from 'react'
import { Box, Flex, Heading, Icon, Text, InputGroup, InputLeftElement, Input, Grid, Center, Button } from "@chakra-ui/react"
import { login } from '../action';
import { useDispatch } from 'react-redux';

export default function LockScreen() {
    const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [weekday, setWeekday] = useState(new Date().getDay())
    const [month, setMonth] = useState(new Date().getMonth())
    const [date, setDate] = useState(new Date().getDate())
    const [hours, setHours] = useState(("0" + new Date().getHours()).slice(-2))
    const [mins, setMins] = useState(("0" + new Date().getMinutes()).slice(-2))
    const dispatch = useDispatch()

    setInterval(() => {
        setWeekday(new Date().getDay())
        setMonth(new Date().getMonth())
        setDate(new Date().getDate())
        setHours(("0" + new Date().getHours()).slice(-2))
        setMins(("0" + new Date().getMinutes()).slice(-2))
    }, 60000);

    return (
        <Box overflow={"hidden"} height="100vh" width="100vw" >
            <Box position="absolute" top="0" overflow={"hidden"} left="0" right="0" bottom="0" zIndex="200000" h="100%" w="100%" >
                <img src='/static/windowsbg_dark.jpg' style={{ height: "100%", width: "100%", transform: 'scale(1.1)', filter: 'blur(20px)' }} alt="bg" />
            </Box>
            <Flex flexDir={"column"} alignItems={"center"} position="absolute" top="0" left="0" right="0" bottom="0" zIndex="200002" p="40px" pt="80px">
                <Flex justifyContent={"center"} width="100%">
                    <Heading fontSize={"108px"}>{hours} : {mins}</Heading>
                </Flex>
                <Flex justifyContent={"center"} width="100%">
                    <Heading fontSize={"2xl"}>{dayList[weekday]}, {date} {monthList[month]}</Heading>
                </Flex>
                <Box mt="40px">

                    <img src='/static/me.jpg' style={{ height: "250px", width: "250px", borderRadius: "50%" }} />
                </Box>
                <Button onClick={() => dispatch(login(1))} mt="40px" width="250px" variant="solid" bg="#212121" color="white" borderBottom="3px solid cyan">Login</Button>
            </Flex>
        </Box>
    )
}
