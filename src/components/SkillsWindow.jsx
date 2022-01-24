import React, { useEffect, useRef, useState } from 'react'
import { Box, Flex, Heading, Icon, Text, InputGroup, InputLeftElement, Input, Grid, Center } from "@chakra-ui/react"
import { useDispatch, useSelector, useStore } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { bringApplicationWindowToFront, closeWindow, login, saveApplicationWindowPosition } from '../action'
import FolderWindow from './FolderWindow'
import Draggable from 'react-draggable';
import AppWindow from './AppWindow'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import classes from "./styles/MainWindow.module.css"

export default function SkillsWindow() {

    const dispatch = useDispatch()

    let icons = [
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            name: "MySQL",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            name: "Firebase",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            name: "NextJs",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
            name: "Redux",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            name: "Git",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
            name: "Jenkins",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
            name: "SocketIO",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            name: "MongoDB",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
            name: "Kubernetes",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            name: "Docker",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            name: "Angular",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            name: "React",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            name: "PHP",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
            name: "C/C++",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            name: "NodeJs",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            name: "JavaScript",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            name: "Python",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            name: "Java",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
            name: "Tensorflow",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            name: "Bootstrap",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
            name: "Material UI",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            name: "Figma",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
            name: "jQuery",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            name: "Linux",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
            name: "Svelte",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            name: "Express",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
            name: "Flask",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
            name: "GraphQL",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
            name: "Spring",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
            name: "Raspberry Pi",
        },
    ].sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    const skillsFilterIp = useRef(null)
    const [filterText, setFilterText] = useState("")

    let topSkills = [
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            name: "Python",
            experience: "7 years",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
            name: "C/C++",
            experience: "5 years",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            name: "Java",
            experience: "2 years",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            name: "JavaScript (ES6+)",
            experience: "5 years",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            name: "React",
            experience: "3 years",
        },
        {
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            name: "Linux",
            experience: "4 years",
        },
    ].sort(function (a, b) {
        var textA = a.experience.toUpperCase();
        var textB = b.experience.toUpperCase();
        return textA > textB ? -1 : textA < textB ? 1 : 0;
    });

    const [selectedDot, setSelectedDot] = useState(0)

    const skillBox = useRef(null)

    const scrollSkill = (offset) => {
        skillBox.current.scrollTo({ top: 250 * offset, behavior: "smooth" })
        setSelectedDot(offset)
    }

    return (
        <Flex onClick={e => e.stopPropagation()} color="#fff" overflow="hidden" borderRadius="10px" boxShadow="-3px 10px 14px 0px rgba(0,0,0,0.45);" position="absolute" bg="#0742a3" height="720px" width="650px" zIndex="99999" left="50%" style={{ transform: 'translateX(-50%)' }} bottom="60px" flexDirection="column" alignItems="center" py="40px">
            <Box px="40px" width="100%">
                <InputGroup mb={"30px"} >
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={BiSearchAlt2} w={5} h={5} color="white" />}
                    />
                    <Input ref={skillsFilterIp} onKeyUp={(e) => setFilterText(skillsFilterIp.current.value)} borderBottom="2px solid cyan" bg="rgba(0,0,0,0.6)" color="white" type="tel" placeholder="Search skill" />
                </InputGroup>
            </Box>
            <Flex justifyContent="space-between" alignItems="center" width="100%" mb={"30px"} px="40px">
                <Heading fontSize="md">Pinned</Heading>
                <Heading fontSize="md">All Skills</Heading>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" width="100%">

                <Box overflowY="scroll" className={classes.disableScrollbar} height="218px" width="600px" ref={skillBox} pl="20px">

                    <Grid gridTemplateColumns="repeat(5,1fr)" columnGap="20px" rowGap="20px" pb="20px">
                        {
                            icons.filter(icon => icon.name.indexOf(filterText) !== -1).map(icon => {
                                return <Center flexDirection="column">
                                    <img style={{ height: "35px", width: "35px" }} src={icon.url} alt="icon" />
                                    <Text fontSize="xs">{icon.name}</Text>
                                </Center>
                            })
                        }
                    </Grid>
                </Box>
                <Flex flexDirection="column" alignItems="center" pr="10px" cursor="pointer">
                    <Box style={{ borderRadius: "50%", width: "10px", height: "10px" }} mb={1} onClick={() => scrollSkill(0)} bg={!selectedDot ? "cyan" : "lightblue"}></Box>
                    <Box style={{ borderRadius: "50%", width: "10px", height: "10px" }} onClick={() => scrollSkill(1)} bg={selectedDot ? "cyan" : "lightblue"}></Box>
                </Flex>
            </Flex>
            <Flex mt={"30px"} justifyContent="space-between" alignItems="center" width="100%" mb={"30px"} px="40px">
                <Heading fontSize="md">Top Skills</Heading>
            </Flex>
            <Grid gridTemplateColumns="repeat(2,1fr)" width="100%" px={"40px"} rowGap="20px">
                {topSkills.map(icon => {
                    return < Flex alignItems="center">
                        <img style={{ height: "40px", width: "40px" }} src={icon.url} alt="icon" />
                        <Flex flexDirection="column" ml="20px">
                            <Text fontSize="sm">{icon.name}</Text>
                            <Text fontSize="sm">{icon.experience}</Text>
                        </Flex>
                    </Flex>
                })}
            </Grid>
            <Flex alignItems="center" justifyContent="space-between" position="absolute" bottom="0" left="0" right="0" width="650px" height="80px" bg="#05327a" p="15px" px="40px">
                <Flex alignItems="center">
                    <Avatar size="md" name="Mayank Rao" src={"/static/me.jpg"} mr="10px" />
                    <Heading fontSize="md">Mayank Sailesh Rao</Heading>
                </Flex>
                <Icon cursor="pointer" as={AiOutlinePoweroff} onClick={() => dispatch(login(0))} w={6} h={6} />
            </Flex>
        </Flex >
    )
}
