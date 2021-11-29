import React from 'react'
import './styles/JobPicker.css'
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"

export default function JobPicker() {
    return (
        <Flex>
            <Box p={"40px"} color="black" flex="0.4">
                <Heading fontSize="72px" mb={"20px"}>Job Tracker App</Heading>
                <Box>
                    <Heading fontSize="2xl" mb={"20px"}>About</Heading>
                    <Text fontSize="xl">The app is a simple job searching app. While these apps already
                    exist in some form or the other, they are usually fairly cluttered
                    or not isolated experiences. For example,LinkedIn supports job
                    postings, but because there's so many other things going on,
                    sometimes the job portion feels like an after thought. I preferred
                    the idea of an app exclusively for job postings only, where all
                    relevant job data and communication could be neatly collated in one
                    place.
                    </Text>
                </Box>
            </Box>
            <Box flex="0.6" height="90vh" p={"40px"}>

                <img src="/apps/job/banner.png" />
            </Box>
        </Flex >
    
    )
}
