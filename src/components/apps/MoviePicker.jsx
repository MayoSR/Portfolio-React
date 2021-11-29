import React from 'react'
import './styles/MoviePicker.css'
import { Box, Flex,Heading,Text } from "@chakra-ui/react"

export default function MoviePicker() {
    return (
        <Flex>
            <Box p={"40px"} color="black" flex="0.4">
                <Heading fontSize="72px" mb={"20px"}>Movie Picker App</Heading>
                <Box>
                    <Heading fontSize="2xl" mb={"20px"}>About</Heading>
                    <Text fontSize="xl">Have you ever tried to find a movie you wanted to watch with
                    friends? Did you end up spending at least an hour trying to find
                    what to watch? Well this app aims to solve that problem! The app
                    allows users to create friend groups where they can add movies they
                    like into a playlist. Users within the group can then mark movies as
                    watched if they have already seen it, and when the time comes to
                    pick a movie to watch as a group, the ones that no one has viewed
                    can be chosen. This also allows you to keep track of what movies
                    your friends are watching and watch them yourself if you would like.
                    Besides that, the app offers its own details about a movie as well,
                    allowing users to get a brief idea of the movie they might want to
                    watch.
                    </Text>
                </Box>
            </Box>
            <Box flex="0.6" height="90vh" p={"40px"}>

                <img src="/apps/movie/banner.png" />
            </Box>
        </Flex >
    )
}
