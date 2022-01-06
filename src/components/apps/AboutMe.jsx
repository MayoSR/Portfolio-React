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
        navigator.clipboard.writeText("mayankrao16university@gmail.com")
        setShowText(1)
        setTimeout(() => { setShowText(0) }, 1000)
    }

    return (
        <Flex p={"20px"}>
            <Flex>
                <Flex justifyContent="center" flexDir="column" height="100%" pr="40px" borderRight="1px solid lightgrey">
                    <Box>
                        <img src={"/static/me.jpg"} height="300px" width="300px" style={{ borderRadius: "50%" }} />
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
                        <Text fontSize="md" mb="10px">I'm an Associate Software Developer L2 currently working at Publicis Sapient</Text>
                        <Text fontSize="md" mb="10px">My passions include making accessible technology and interface design. When I'm not working, I usually spend most of my free time either honing my UI skills further, or studying about new technologies in the FullStack sphere.</Text>
                        <Text mb="10px" fontSize="md">I normally relax by reading books or articles, watching YouTube videos or Twitch streams or playing Chess, Soccer, swimming, working out or gaming</Text>
                        <Text mb="10px" fontSize="md">Mainly my hobbies consist of making small games or developing apps. While I usually mix up my schedule to avoid burn out, I spend most of my time either considering what app to make next or improvements to my existing apps.</Text>
                        <Text mb="10px" fontSize="md">When I want to do something truly challenging and outside my usual comfort zone, I like to either solve competitive coding questions or learn new tech stacks. At present, I'm working on learning Rust.</Text>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    )
}
