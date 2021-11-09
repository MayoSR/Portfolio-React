import React, { useEffect, useState } from 'react'
import classes from "../App.module.css"
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"
import { useDispatch, useSelector, useStore } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { AiOutlineMinus, AiOutlineClose, AiOutlineFullscreen, AiFillFolder } from 'react-icons/ai';
import { bringApplicationWindowToFront, closeWindow, saveApplicationWindowPosition } from '../action'
import FolderWindow from './FolderWindow'
import Draggable from 'react-draggable';
import AppWindow from './AppWindow'

export default function MicroWindow(props) {
    return (
        <AppWindow appData={props.app} size={"sm"} pos={props.pos} />
    )
}
