import React from 'react'
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"

export default function HTMLWireframe() {
    return (
        <Flex>
            <Flex flexDir="column" flex="0.6">
                <Box p={"40px"} color="black">
                    <Heading fontSize="72px" mb={"20px"}>HTML Wireframe to Website Converter</Heading>
                    <Box>
                        <Heading fontSize="2xl" mb={"20px"}>About</Heading>
                        <Text>
                            This project aims to convert hand-drawn wireframe images into actual websites. The report goes in detail as to the content and implementation details. Only the first 20-30 pages contain relevant information. The rest consists of code screenshots and images with examples.
                            

                        </Text>
                        <Text>
                            Below is a video showing how it works
                        
                        </Text>
                    </Box>
                </Box>
                <Box height="88vh" p={"40px"}>
                    <iframe
                        src="https://www.loom.com/embed/8c6ee684140d4613893b3b1f2bbe0fd2"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                        style={{ width: "100%", height: "100%" }}
                        title="wireframe video"
                    />
                </Box>
            </Flex >
            <Flex flex="0.4">
                <embed
                    src={"/apps/wireframe/Report.pdf#view=FitH"}
                    type="application/pdf"
                    height="100%"
                    width="100%"
                />
            </Flex>        
        </Flex>

    )
}
