import React from 'react'
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"

export default function ProgrammingLanguageAnalysis() {
    return (
        <Flex>
            <Box p={"40px"} color="black" flex="0.4">
                <Heading fontSize="6xl" mb={"20px"}>Programming language analysis and teammate recommender using Social Networks from Stackoverflow data</Heading>
                <Box>
                    <Heading fontSize="2xl" mb={"20px"}>About</Heading>
                    <Text fontSize="xl">This was a multi faceted project which consisted of two parts. 
                    </Text>
                    <Heading fontSize="xl" mb={"20px"}>Part 1 : Programming language recommender</Heading>
                    <Text fontSize="xl" mb={3}>
                        A common problem which I noticed while browsing beginner programming forums, was that many users did not know what programming language to pickup once they had mastered one or two programming languages. For example, a user who picked up C++, would naturally be a little stuck when trying to pick what they could work on or study next, since they would have no prior industrial experience or guidance. However, if I could construct a language dependency matrix, which would represent the relationship of one programming language with every other programming language, I could possibly recommend another programming language to this user.
                    </Text>
                    <Text fontSize="xl" mb={3}>First, I had to build a language dependency matrix. This was achieved by going through every single profile of every user on Stackoverflow, and parsing out the programming languages that commonly occured together. The reasoning was simple, if you are a web developer, chances are your profile will contain Python,HTML,CSS, JavaScript and similar web scripting or frontend languages and frame works. Logically speaking, your proficieny or main interests are tied together by the languages that you use. A C++ dev will frequently have Java in as well, since the skills translate naturally between languages. An iOS dev will have Swift, Objective-C and C in their profile. While not a fool-proof method, I decided that it was worth examining.
                    
                    </Text>
                    <Text fontSize="xl" mb={3}>
                        So I got to work. 

                    </Text>
                    <Text fontSize="xl" mb={3}>
                        First, the dataset was enormous. Infact, even with a fairly high-end laptop, the matrix took several hours to construct. The languages I shortlisted were the top ~80% of languages on Stackoverflow, and this was because if I tried indexing everything, I would not be able to build a matrix at all.


                    </Text>
                    <Text fontSize="xl" mb={3}>
                        Second was to parse out all of the languages and their occurences within each bio. This also was fairly time consuming (O(n^2)) since I first had to parse the sentence, and then search for each language within it. Some of this could also be gimmicky due to C and R being single letters, but generally speaking, it was fair to say that C and R would normally occur with spaces on either side, so I used this fact to our advantage.

                    </Text>
                    <Text fontSize="xl" mb={3}>
                         Finally, I built a large dependency matrix of each language vs every other language. Each language would be normalized to their percentage frequency, just for easier reading. Now, if a user entered their bio, or their interests, I would be able to parse out the relevant programming languages from it, and recommend similar languages. An example in the PDF shows how due to our accumulated data, if someone is an expert at C++, they would also naturally be likely to specialise in Java or Python. Similarly, Cocoa and Swift would return Objective-C as another recommendation worth picking up.

                    </Text>
                    <Text fontSize="xl" mb={3}>
                         Of course, while not fool-proof either, it was an interesting step to build a recommendation system that was not powered by an ML model, but was just the result of some simple Social Network analysis.
                    </Text>
                    <Heading fontSize="xl" mb={"20px"}>Part 2 : Teammate recommender</Heading>
                    <Text fontSize="xl" mb={3}>
                        Another problem in a similar domain, was finding similarly technically skilled users to collaborate with over a project. This was just meant to be an extra simple task, and was mentioned in the project requirements from the professor.
                    </Text>
                    <Text fontSize="xl" mb={3}>
                        To do this, most of the steps from above were followed. Initially, I used a simple approach of using simple Jaccard similarity with bigrams from each users profile to get an idea of which users would be most similar. This is nothing special and a little too brute force a comparison, so I came up with another method, integrating the first part of our project.
                    
                    </Text>
                    <Text fontSize="xl" mb={3}>
                        Using the programming language dependency matrix, I could parse out the relevant languages from each users bio, and from there I could use our matrix to figure out which users had languages that were highly scored within the language matrix. A Swift user would benefit from someone who could code in Objective-C, or at the very least the skills would be transferrable to a degree. However, this in and of itself could be its own project, and so I've kept it as an extension for a future endeavour.
                    </Text>
                </Box>
            </Box>
            <Box flex="0.6" height="90vh" p={"40px"}>

                <embed
                    src={"/apps/programming/analysis.pdf#view=FitH"}
                    type="application/pdf"
                    height="100%"
                    width="100%"
                />
            </Box>
        </Flex >
    )
}
