import React from 'react'
import './styles/StoryGenerator.css'
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"

export default function StoryGenerator() {
    return (
        <Flex>
            <Box p={"40px"} color="black" flex="0.4">
                <Heading fontSize="56px" mb={"20px"}>Story book generator using LSTM/GRU cells and a Bi-Directional RNN</Heading>
                <Box>
                    <Heading fontSize="2xl" mb={"20px"}>About</Heading>
                    <Text>
                        Given a story, this project attempts to create a new chapter from the data provided. For this, we used Harry Potter as a base example. The report goes into more technical detail and examples elucidating how it works and the results
                    </Text>
                </Box>
            </Box>
            <Box flex="0.6" height="90vh" p={"40px"}>

                <embed
                    src={"/apps/story/story.pdf#view=FitH"}
                    type="application/pdf"
                    height="100%"
                    width="100%"
                />
            </Box>
        </Flex >
    )
}
