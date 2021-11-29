import React from 'react'
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"

export default function CropAnalysis() {
    return (
        <Flex>
            <Box p={"40px"} color="black">
                <Heading fontSize="72px" mb={"20px"}>Crop Analysis</Heading>
                <Box>
                    <Heading fontSize="2xl" mb={"20px"}>About</Heading>
                    <Text>
                        My first official paper that was written as part of my project in Data Science. We are asked to pick from a variety of domains, so my teammate and I decided to pick agriculture for analysis, due to the variety of parameters present in growth, sales and nurturing of crops. For this, we selected the state of Andhra Pradesh in South India where rice is grown in fairly abundant quantities, and performed analysis on it.
                    </Text>
                </Box>
            </Box>
            <Box height="88vh" width="7000px" p={"40px"}>

                <embed
                    src={"/apps/ids/CropAnalysis.pdf#view=FitH"}
                    type="application/pdf"
                    height="100%"
                    width="100%"
                />
            </Box>
        </Flex >
    )
}
