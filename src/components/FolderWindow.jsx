import React, { useState } from 'react'
import { Box, Flex, Heading, Icon, Text, Grid } from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { AiOutlineMinus, AiOutlineClose, AiOutlineFullscreen, AiFillFolder } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { openApplicationExecutable, setVirtualDeviceApp } from '../action'
import classes from './styles/FolderWindow.module.css'
import { Link } from "@chakra-ui/react"

export default function FolderWindow(props) {

    const apps = useSelector(state => state.apps)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(null)

    const openApplication = (id) => {
        dispatch(openApplicationExecutable(id))
    }

    return (

        <Box className={classes.fontCompensator} p={4} maxW={"1000px"}>
            <Grid gridTemplateColumns="23% 22% 12% 13% 15% 15%" width="100%" pl={"40px"} pb={"20px"}>
                <Box width="30%">
                    <Heading color="#828282" fontSize="md">Name</Heading>
                </Box>
                <Flex>
                    <Heading color="#828282" fontSize="md">Date Modified</Heading>
                </Flex>
                <Flex>
                    <Heading color="#828282" fontSize="md">Type</Heading>
                </Flex>
                <Flex>
                    <Heading color="#828282" fontSize="md">Size</Heading>
                </Flex>
                <Flex>
                    <Heading color="#828282" fontSize="md">View on GitHub</Heading>
                </Flex>
                <Flex justifyContent="center">
                    <Heading color="#828282" fontSize="md">Live Demo</Heading>
                </Flex>
            </Grid>
            {apps.filter(app => !app.special && app.folder === props.folderId).map(app => {
                return <Flex p={"5px"} borderRadius="3px" cursor="pointer" style={app.id === selected ? { background: "rgba(153, 223, 255,0.2)" } : { background: "transparent" }} width="100%" onMouseLeave={(e) => setSelected(null)} onMouseOver={(e) => setSelected(app.id)} onClick={(e) => setSelected(app.id)} onDoubleClick={() => openApplication(app.id)}>
                    <Grid gridTemplateColumns="23% 22% 12% 13% 15% 15%" width="100%">
                        <Flex alignItems="center" >
                            <Box w="20px" h="20px" mr={1}>
                                <img src={"/icons/cv.png"} alt="nav icon" />
                            </Box>
                            <Text color="#212121" fontSize="sm" ml={2}>{app.name}</Text>
                        </Flex>
                        <Flex >
                            <Text color="#212121" fontSize="sm" marginLeft="20px">10-20-2021 10:20</Text>
                        </Flex>
                        <Flex >
                            <Text color="#212121" fontSize="sm" marginLeft="20px">Executable</Text>
                        </Flex>
                        <Flex >
                            <Text color="#212121" fontSize="sm" marginLeft="20px">1,592KB</Text>
                        </Flex>
                        <Flex justifyContent="center">
                            <Link fontSize="sm" color="#212121">
                                View <Icon as={BiLinkExternal} mx="2px" />
                            </Link>
                        </Flex>
                        <Flex justifyContent="center">
                            <Link fontSize="sm" color="#212121" onClick={() => dispatch(setVirtualDeviceApp(app.link))}>
                                View <Icon as={BiLinkExternal} mx="2px" />
                            </Link>
                        </Flex>

                    </Grid>

                </Flex>
            })}
        </Box>

    )
}
