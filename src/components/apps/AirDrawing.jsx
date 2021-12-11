import React from 'react'
import './styles/AirDrawing.css'
import { Link, Box, Flex, Heading, Icon, Text, Center } from "@chakra-ui/react"

export default function AirDrawing() {
    return (
        <Box p="40px" color="black">
            <Heading mb="40px"> Converting Air Strokes into Writing</Heading>
            <Text mb="10px">This project was made to improve accessibility for professors in lecture halls. These rooms were enormous and our professor usually liked to walk between rows to assist or observe students while working. Any change or clarification that they had to make would involve them walking all the way back to the board to make even minor corrections.</Text>
            <Text mb="10px">Our solution for this was a special pen with a sharp blue LED that would be picked up by our camera attached to our raspberry Pi and would convert the air strokes in the air to strokes on a board.</Text>
            <Text mb="10px">The main selling point was that it could be setup anywhere and any device that could run Python. It was cheap, effective and could be easily extend to lights of any color.</Text>
            <Text mb="10px">No video footage exists since this was assembled within the lab and for evaluation purposes only. However the code can be viewed from the folder or the link provided below</Text>

            <Link color="blue" href="https://github.com/MayoSR/InvisiblePen/blob/master/tracker.py" isExternal>Click here to view the code </Link>
        </Box>
    )
}
