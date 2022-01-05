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
            <Heading fontSize="3xl" mb="20px">Tutorial</Heading>
            <iframe
                src="https://www.loom.com/embed/16193859a91f4adeb8e35c23f3970a33"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                style={{ width: "100%", height: "500px", marginBottom: "20px" }}
                title="wireframe video"
            />
            <Heading fontSize="3xl" mb="20px">Q: How does this work?</Heading>
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    Use <span style={{ fontWeight: "bold" }}>Google Chrome </span> for the best experience!
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    The <span style={{ fontWeight: "bold" }}>'M' </span> icon is the 'start' button. Click on it to view my skills and experience!
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    <span style={{ fontWeight: "bold" }}>Double clicking </span>opens applications.
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    The close buttons close the apps, either from the navbar or from the window itself.
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    The fullscreen button goes fullscreen.
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    Clicking on a window behind will bring it to the front, or clicking the corresponding navbar icon will bring it to the front as well.
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    Windows can be dragged around.
                </ListItem>
                <ListItem>
                    <ListIcon as={AiOutlineArrowRight} color='green.500' />
                    The navbar on the bottom can be used to close windows, or preview them on hover.
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
            <Text mb="20px">
                Most of the apps that have video content are because they either contain ML models that require a fairly high end backend to run, along with gigantic trained models to function properly. Some of the others are games and have SocketIO connections that won't work without a server.

            </Text>
            <Text>
                Therefore, a video of the apps'
                functioning has been provided instead. If you would still like to try them,
                most of them can be downloaded and run straight from GitHub.
            </Text>
        </Box >
    )
}
