import React, { useEffect, useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import DesktopIcon from './DesktopIcon'
import { useSelector } from 'react-redux'
import AppWindow from './AppWindow'
import MicroWindow from './MicroWindow'
import { mainWindowToggle, setSelectedIcon, wifiWindowToggle } from '../action'
import { useDispatch } from 'react-redux'
import SkillsWindow from './SkillsWindow'
import WifiButtons from './WifiButtons'

export default function Desktop() {
    let apps = useSelector(state => state.apps)
    let microWindowAppID = useSelector(state => state.microWindowApp)
    let microWindowAppPos = useSelector(state => state.microWindowPos)
    let mainWindowStatus = useSelector(state => state.mainWindowStatus)
    let wifiWindowStatus = useSelector(state => state.wifiButtonStatus)

    const dispatch = useDispatch()

    const deselectWindows = () => {
        dispatch(setSelectedIcon(null))
        dispatch(mainWindowToggle(0))
        dispatch(wifiWindowToggle(0))
        console.log("here")

    }

    return (
        <Box pt={5} bg="url('/static/windowsbg_dark.jpg')" overflow="hidden" position="absolute" top="0" bottom="60px" left="0" right="0" w="100vw" h="100vh" onMouseOver={() => dispatch(setSelectedIcon(null))} onClick={deselectWindows}>
            {apps.sort(function (app1, app2) { return app1.id - app2.id }).filter(app => app.onDesktop).map(app => { return <DesktopIcon appData={app} /> })}
            {apps.filter(app => app.isOpen).map((app, ind) => { return app.executable })}
            {microWindowAppID !== null ? <MicroWindow app={apps.filter(app => app.id === microWindowAppID)[0]} pos={microWindowAppPos} /> : <></>}
            {mainWindowStatus ? <SkillsWindow /> : <></>}
            {wifiWindowStatus ? <WifiButtons /> : <></>}
        </Box>
    )
}
