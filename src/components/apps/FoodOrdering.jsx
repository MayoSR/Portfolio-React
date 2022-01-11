import React from 'react'
import './styles/FoodOrdering.css'
import { Box, Flex, Heading, Text } from "@chakra-ui/react"

export default function FoodOrdering() {
    return (
        <Flex>
            <Box p={"40px"} color="black" flex="0.4">
                <Heading fontSize="72px" mb={"20px"}>Food Ordering App</Heading>
                <Heading fontSize="72px" mb={"20px"}>Red Bull Basement Hackathon</Heading>
                <Box>
                    <Heading fontSize="2xl" mb={"20px"}>About</Heading>
                    <Text fontSize="xl">This was a prototype app written for our pitch in the Red Bull Basement University Hackathon. College canteens are a mess in general, so the idea was to create a scheduling and pre-order system, where students could place orders from their classroom beforehand and pick it up during the breaks or whenever was convenient to them. The benefit would be to prevent the rushing and crowds that would form during breaks, which sometimes took so much time to clear that people would end up being late to class due to inability to get food quickly.

                    </Text>
                    <br />
                    <Text fontSize="xl">
                        While we did not qualify, we came around 5th in the India for the pitch and idea. This app is just a simple ordering app of what it might have looked like had it been implemented.

                    </Text>

                </Box>
            </Box>

        </Flex >

    )
}
