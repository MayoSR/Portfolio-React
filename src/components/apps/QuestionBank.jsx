import React from 'react'
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"

export default function QuestionBank() {
    return (
        <Flex flexDir="column">
            <Box p={"40px"} color="black" flex="0.4">
                <Heading fontSize="6xl" mb={"20px"}>Detecting similar questions in a question bank</Heading>
                <Box>
                    <Heading fontSize="2xl" mb={"20px"}>Requirement</Heading>
                    <Text fontSize="xl" mb={3}>
                        The objective of the project was to create an algorithm that could detect similar questions and show other similar questions within the question bank.
                    </Text>
                    <Text fontSize="xl" mb={3}>
                        This is a common problem found in exam papers, wherein questions from the previous years may end up being repeated for future papers. The goal was not to minimize recurring questions, but to show similar questions in the pool of questions to professors who may be creating an exam paper. It could also be used to quickly create a sample paper using questions from past years, or for a mini assignment of some kind.
                    </Text>
                    <Text fontSize="xl" mb={3}>
                        For this, we proposed and implemented two solutions.
                    </Text>
                    <Heading fontSize="2xl" mb={"20px"}>Solution 1</Heading>
                    <Text fontSize="xl" mb={3}>
                        Google provides a reall good WordNet model. WordNet is a lexical database of semantic relations between words. WordNet links words into semantic relations including synonyms, hyponyms, and meronyms. The synonyms are grouped into synsets with short definitions and usage examples.
                    </Text>
                    <Text fontSize="xl" mb={3}>
                        Once we had this model, we wrote an iterative DBScan algorithm, that would take all the questions from the question bank, and using a strictness parameter, would cluster all similar questions together, based on their WordNet "scores". The issue was, across languages, it would require Google translate, which was not always very accurate due to varying regional dialetcs and phrasing. Especially in India, where there's hundreds of languages and varying dialects for each. So we proposed a secondary solution as well.
                    </Text>
                    <Heading fontSize="2xl" mb={"20px"}>Solution 2</Heading>
                    <Text fontSize="xl" mb={3}>
                        Using the concept of n-gram similarity, we could cluster questions using their Jaccard Similarity. Jaccard similarity takes into account similar bigrams and divides it by the total number of bigrams. The benefit of this was that it was language independent. Even text written in other languages could be clustered easily, although synonyms would slip by. That said, most exam questions generally included proper nouns in their questions, so we would definitely have some kind of match for similar questions.
                    </Text>
                    <Heading fontSize="2xl" mb={"20px"}>** Note: As of the time of re-recording this, Google has taken down its WordNet model, so no example video can be provided for that. However, the code still exists should you like to examine how it functioned.</Heading>
                </Box>
            </Box>
            <Box height="88vh" p={"40px"}>
                <iframe
                    src="https://www.loom.com/embed/5823adb834f54cb8935ddaab746ac42a"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    style={{ width: "100%", height: "100%" }}
                    title="wireframe video"
                />
            </Box>
        </Flex >
    )
}
