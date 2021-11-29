import React from 'react'
import './styles/Connect4.css'
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"

export default function Connect4() {
    return (
        <Flex flexDir="column">
            <Box p={"40px"} color="black">
                <Heading fontSize="72px" mb={"20px"}>Connect 4</Heading>
                <Box>
                    <Heading fontSize="2xl" mb={"20px"}>About</Heading>
                    <Text>
                        A simple Connect 4 game made using SocketIO for multiplayer.

                    </Text>
                </Box>
            </Box>
            <Box height="88vh" p={"40px"} bg="black">
                <iframe
                    src="https://www.loom.com/embed/770a43c6447b46faa188feb0d0b03cca"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    style={{ width: "100%", height: "100%" }}
                    title="wireframe video"
                />
            </Box>
        </Flex >
    )
}
