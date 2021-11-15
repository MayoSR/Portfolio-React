import React, { useEffect, useRef, useState } from 'react'
import { Box, Flex, Heading, Icon, Text, InputGroup, InputLeftElement, Input, Grid, Center } from "@chakra-ui/react"
import { useDispatch, useSelector, useStore } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { BiSearchAlt2, BiVolumeFull } from 'react-icons/bi';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsBatteryFull, BsMoon, BsFillBrightnessHighFill, BsGear } from 'react-icons/bs';
import { IoAirplaneOutline, IoBluetoothOutline } from 'react-icons/io5';
import { bringApplicationWindowToFront, closeWindow, saveApplicationWindowPosition } from '../action'
import FolderWindow from './FolderWindow'
import Draggable from 'react-draggable';
import AppWindow from './AppWindow'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from "@chakra-ui/react"

export default function WifiButtons() {

    const [selectedWifiIcons, setSelectedWifiIcons] = useState([1, 1, 0, 0, 0])

    const selectedIconArray = (ind) => {

        selectedWifiIcons.splice(ind, 1, 1 - selectedWifiIcons[ind])
        setSelectedWifiIcons([...selectedWifiIcons])
    }

    return (
        <Flex overflow="hidden" borderRadius="10px" boxShadow="-3px 10px 14px 0px rgba(0,0,0,0.45);" position="absolute" bg="#0742a3" height="400px" width="365px" right="15px" bottom="60px" flexDirection="column" alignItems="center" py="20px">
            <Flex justifyContent="center" width="100%">
                <Grid gridTemplateColumns="repeat(3,1fr)" columnGap="15px" rowGap="20px">

                    {[{ icon: AiOutlineWifi, text: "Available" }, { icon: IoBluetoothOutline, text: "Not Connected" }, { icon: IoAirplaneOutline, text: "Airplane Mode" }, { icon: BsBatteryFull, text: "Battery Saver" }, { icon: BsMoon, text: "Focus Assist" },].map((icon, ind) => {
                        return <Center flexDir="column" mb={3} onClick={() => selectedIconArray(ind)}>
                            <Center border="1px solid rgba(255,255,255,0.2)" bg={selectedWifiIcons[ind] ? "#33bbff" : "rgba(255,255,255,0.1)"} borderRadius="5px" width="100px" height="50px">
                                <Icon color={selectedWifiIcons[ind] ? "black" : "white"} w={5} h={5} as={icon.icon} />
                            </Center>
                            <Text fontSize="xs" mt={1}>{icon.text}</Text>
                        </Center>
                    })}
                </Grid>

            </Flex>
            <Box width="100%" px="20px" mt={8}>
                <Flex alignItems="center">
                    <Icon color="white" w={5} h={5} mr={3} as={BsFillBrightnessHighFill} />
                    <Slider aria-label="slider-ex-1" defaultValue={30}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>
                <Flex alignItems="center" mt={10}>
                    <Icon color="white" w={5} h={5} as={BiVolumeFull} mr={3} />
                    <Slider aria-label="slider-ex-1" defaultValue={30}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Flex>
            </Box>
            <Flex justifyContent="flex-end" alignItems="center" position="absolute" bottom="0" left="0" right="0" width="365px" height="40px" bg="#05327a" pr="10px">
                <Icon as={BsGear} w={4} h={4} />
            </Flex>
        </Flex >
    )
}
