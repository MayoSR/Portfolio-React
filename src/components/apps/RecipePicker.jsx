import React from 'react'
import './styles/RecipePicker.css'
import { Box, Flex, Heading, Text } from "@chakra-ui/react"

export default function RecipePicker() {
    return (
        <Flex>
            <Box p={"40px"} color="black" flex="0.4">
                <Heading fontSize="72px" mb={"20px"}>Recipe App</Heading>
                <Box>
                    <Heading fontSize="2xl" mb={"20px"}>About</Heading>
                    <Text fontSize="xl">
                        A simple recipe app that allows users to upload recipes, as well as select recipes using the ingredients in their fridge.
                    </Text>
                </Box>
            </Box>
        </Flex >

    )
}
