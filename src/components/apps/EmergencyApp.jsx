import React from 'react'
import { Box, Flex,Heading,Text } from "@chakra-ui/react"
import './styles/EmergencyApp.css'

export default function EmergencyApp() {
    return (
        <Flex>
            <Box p={"40px"} color="black" flex="0.4">
                <Heading fontSize="72px" mb={"20px"}>Emergency App</Heading>
                <Heading fontSize="72px" mb={"20px"}>Gan Eagla</Heading>
                <Box>
                    <Heading fontSize="2xl" mb={"20px"}>About</Heading>
                    <Text fontSize="xl">This app was built as a request from my friend who is doing his Masters in management. For a particular demonstration, he wanted an app to show off some of the features and talking points that he had discussed in his presentation; but felt that having an actual app would be far more beneficial and insightful for the purposes of a demo. 

                    </Text>
                    <br />
                    <Text fontSize="xl">
                        On the right, was the prototype design that he provided as a template. The rest was up to me.

                    </Text>
                    <br />
                    <Text fontSize="xl"> 
                        He contacted me about 1-2 days before his demonstration, so I built the app as quickly as I could, and this is the result of the app. If you would like to see the live demo, you can click the live demo option in the folder directory.
                    </Text>
                </Box>
            </Box>
            <Box flex="0.6" height="90vh" p={"40px"}>

                <embed
                    src={"/apps/emergency/appdoc.pdf#view=FitH"}
                    type="application/pdf"
                    height="100%"
                    width="100%"
                />
            </Box>
        </Flex >
    )
}
