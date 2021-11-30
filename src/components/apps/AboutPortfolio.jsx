import React from 'react'
import { Link, Box, Flex, Heading, Icon, Text, Center } from "@chakra-ui/react"
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function AboutPortfolio() {
    return (
        <Box color="black" p="40px">
            <Heading fontSize="3xl" mb="20px">Q: What is this?</Heading>
            <Text fontSize="md" mb="20px">This is my web portfolio. It is inspired by the design of Windows 11, and works similar to how an operating system works. Scroll down for some comparison pictures!</Text>
            <Heading fontSize="3xl" mb="20px">Q: How does this work?</Heading>
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    The 'M' icon is the 'start' button. Click on it to view my skills and experience!
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    Double clicking opens applications
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    The close buttons close them
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    The fullscreen button goes fullscreen.
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    Clicking on a window behind will bring it to the front.
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    Windows can be dragged around!
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    The navbar on the bottom can be used to close windows, or preview them on hover!
                </ListItem>
            </List>

            <Text my="20px">It works similar to how a real OS functions.
                There is a process queue that handles applications, which when invoked, creates
                an application window within which application specific code runs. The Apps
                all have the same window controlled by the "OS", however each App also renders
                its own component within the window.</Text>
            <Heading fontSize="3xl" mb="20px">Q: Why did you choose this design?</Heading>
            <Text mb="20px">
                Windows 11 is the latest OS from Microsoft. When it was released, I downloaded my copy instantly, and found that I really enjoyed the aesthetic of the OS. It looked very sleek while being familiar at the same time. The dark mode especially looked much better. So I decided I would try to implement Windows 11 within my browser as a simple OS project. Eventually, I figured I could be a little more creative and make it my portfolio instead.
            </Text>
            <Text mb="20px">
                Another reason was to be able to host my mobile demos. Since it's  typically inconvenient for people to view UIs on the browser, I figured I'd sandbox my apps within my portfolio, by trying to emulate the look of a mobile VM on a desktop.
            </Text>
            <Box my="20px">
                <img src={"/static/screen.png"} style={{ margin: "20px 20px 20px 0px" }} />
                <img src={"/static/navbar.png"} style={{ margin: "20px 20px 20px 0px" }} />
                <img src={"/static/folder.png"} style={{ margin: "20px 20px 20px 0px" }} />
            </Box>
            <Heading fontSize="3xl" mb="20px">Q: Why are all the apps not hosted?</Heading>
            <Text>
                While I have - to the best of my abilities
                - tried to host every app, not all of them are easy to host and many of the
                games are multiplayer or rely on socket connections. The others are Machine
                Learning related and contain models of gigantic proportions that cannot be
                feasibly hosted on a cost effective server. For these, a video of the app's
                functioning has been provided instead. If you would still like to try them,
                most of them can be downloaded and run straight from GitHub.
            </Text>
        </Box >
    )
}
