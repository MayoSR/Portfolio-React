import React, { useState } from 'react'
import { Link, Box, Flex, Heading, Icon, Text, Center } from "@chakra-ui/react"
import { AiOutlineMail } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import { mainWindowToggle } from '../../action';

export default function AboutMe() {

    const dispatch = useDispatch()
    let mainWindowStatus = useSelector(state => state.mainWindowStatus)
    const [showText, setShowText] = useState(0)

    const copyClipboard = () => {
        navigator.clipboard.writeText("myemail@gmail.com")
        setShowText(1)
        setTimeout(() => { setShowText(0) }, 1000)
    }

    return (
        <Flex p={"20px"}>
            <Flex>
                <Flex justifyContent="center" flexDir="column" height="100%" pr="40px" borderRight="1px solid lightgrey">
                    <Box>
                        <img src={"/apps/me/me.jpg"} height="300px" width="300px" style={{ borderRadius: "50%" }} />
                    </Box>
                    <Flex flexDir="row" width="300px" justifyContent="space-evenly" mt="30px">
                        <Link href="https://github.com/MayoSR" isExternal>
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="github"
                                height="50px"
                                width="50px"
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/mayank-rao-87155a223/" isExternal>
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                alt="linkedin"
                                height="50px"
                                width="50px"
                            />
                        </Link>
                        <Link href="https://www.hackerrank.com/mayankrao16?hr_r=1" isExternal>
                            <img
                                src="/apps/me/hackerrank.png"
                                alt="hackerrank"
                                height="50px"
                                width="50px"
                            />
                        </Link>
                        <Box position="relative">
                            <Icon as={AiOutlineMail} cursor="pointer" color="red" onClick={copyClipboard} w={"50px"} h={"50px"} />
                            {showText ? <Text fontSize="xs" position="absolute" color="black" width="200px">Copied to clipboard!</Text> : <></>}
                        </Box>
                        <Box cursor="pointer" onClick={(e) => { e.stopPropagation(); dispatch(mainWindowToggle(1 - mainWindowStatus)) }}>
                            <img
                                src="/icons/m.png"
                                alt="skills"
                                height="50px"
                                width="50px"
                                style={{ pointerEvents: "none" }}
                            />
                        </Box>

                    </Flex>
                </Flex>
                <Box color="black" ml="20px">
                    <Box mb="20px">
                        <Heading fontSize="5xl">Hello! I am Mayank Sailesh Rao</Heading>
                    </Box>
                    <Box>
                        <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    )
}
