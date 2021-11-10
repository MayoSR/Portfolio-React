import React, { useEffect, useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import DesktopIcon from './DesktopIcon'
import { useSelector } from 'react-redux'
import AppWindow from './AppWindow'
import MicroWindow from './MicroWindow'
import { setSelectedIcon } from '../action'
import { useDispatch } from 'react-redux'

export default function Desktop() {
    let apps = useSelector(state => state.apps)
    let microWindowAppID = useSelector(state => state.microWindowApp)
    let microWindowAppPos = useSelector(state => state.microWindowPos)

    const dispatch = useDispatch()

    return (
        <Box pt={5} bg="url('/static/windowsbg.jpg')" overflow="hidden" position="absolute" top="0" bottom="60px" left="0" right="0" w="100vw" h="100vh" onClick={() => dispatch(setSelectedIcon(null))}>
            {apps.sort(function (app1, app2) { return app1.id - app2.id }).filter(app => !app.special).map(app => { return <DesktopIcon appData={app} /> })}
            {apps.filter(app => app.isOpen).map((app, ind) => { return app.executable })}
            {microWindowAppID !== null ? <MicroWindow app={apps.filter(app => app.id === microWindowAppID)[0]} pos={microWindowAppPos} /> : <></>}
        </Box>
    )
}
