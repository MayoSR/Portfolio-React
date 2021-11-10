import React from 'react'
import { Box, Flex } from "@chakra-ui/react"
import './styles/TestApp.css'

export default function TestApp() {
    return (
        <div class="spread">
            <div class="content">
                <h1 class="h1-max">Job Tracker App</h1>
                <h3>About</h3>
                <p>
                    The app is a simple job searching app. While these apps already
                    exist in some form or the other, they are usually fairly cluttered
                    or not isolated experiences. For example,LinkedIn supports job
                    postings, but because there's so many other things going on,
                    sometimes the job portion feels like an after thought. I preferred
                    the idea of an app exclusively for job postings only, where all
                    relevant job data and communication could be neatly collated in one
                    place.
                </p>
                <h3>Made with</h3>
                <div class="frameworks">
                    <div class="framework-box">
                        <img src="/icons/chakra.png" />
                        <p>Chakra UI</p>
                    </div>
                    <div class="framework-box">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        />
                        <p>ReactJs</p>
                    </div>
                    <div class="framework-box">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                        />
                        <p>Figma</p>
                    </div>
                    <div class="framework-box">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        />
                        <p>Git</p>
                    </div>
                </div>
                <h3>Hosted on</h3>
                <div class="framework-box">
                    <img src="/icons/netlify.png" />
                    <p>Netlify</p>
                </div>
            </div>
            <img src="/apps/job/banner.png" />
        </div>

    )
}
