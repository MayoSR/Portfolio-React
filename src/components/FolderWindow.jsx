import React, { useState } from 'react'
import { Box, Flex, Heading, Icon, Text, Grid } from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { AiOutlineMinus, AiOutlineClose, AiOutlineFullscreen, AiFillFolder } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { openApplicationExecutable, setVirtualDeviceApp } from '../action'
import { Link } from "@chakra-ui/react"

export default function FolderWindow(props) {

    const apps = useSelector(state => state.apps)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(null)

    const openApplication = (e, id) => {
        e.stopPropagation()
        dispatch(openApplicationExecutable(id))
    }


    const setSelectedApp = (e, id) => {
        e.stopPropagation()
        setSelected(e, id)
    }

    return (

        <Box p={4} width="100%" height="100%" bg="whitesmoke">
            <Grid gridTemplateColumns="30% 15% 10% 10% 10% 10%" width="100%" columnGap="20px" pl={"40px"} pb={"20px"}>
                <Box style={{ borderRight: "1px solid black" }} pr={3}>
                    <Heading color="#828282" fontSize="md">Name</Heading>
                </Box>
                <Flex style={{ borderRight: "1px solid black" }}>
                    <Heading color="#828282" fontSize="md">Date Modified</Heading>
                </Flex>
                <Flex style={{ borderRight: "1px solid black" }}>
                    <Heading color="#828282" fontSize="md">Type</Heading>
                </Flex>
                <Flex style={{ borderRight: "1px solid black" }}>
                    <Heading color="#828282" fontSize="md">Size</Heading>
                </Flex>
                <Flex style={{ borderRight: "1px solid black" }}>
                    <Heading color="#828282" fontSize="md">Code</Heading>
                </Flex>
                <Flex justifyContent="center" style={{ borderRight: "1px solid black" }}>
                    <Heading color="#828282" fontSize="md">Live Demo</Heading>
                </Flex>
            </Grid>
            {apps.filter(app => app.folder === props.folderId).map(app => {
                return <Flex p={"5px"} borderRadius="3px" cursor="pointer" style={app.id === selected ? { background: "rgba(153, 223, 255,0.2)" } : { background: "transparent" }} width="100%" onMouseLeave={(e) => setSelected(null)} onMouseOver={(e) => setSelected(app.id)} onClick={(e) => setSelectedApp(e, app.id)} onDoubleClick={(e) => openApplication(e, app.id)}>
                    <Grid gridTemplateColumns="30% 15% 10% 10% 10% 10%" columnGap="20px" width="100%">
                        <Flex alignItems="center" width="100%">
                            <Box width="25%" w="25px" h="25px" mr={1}>
                                <img src={app.icon} alt="nav icon" />
                            </Box>
                            <Text isTruncated width="75%" color="#212121" fontSize="sm" ml={2}>{app.name}</Text>
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
                        <Flex pl={"18px"}>
                            <Link fontSize="sm" color="#212121" href={app.urlGitHub} isExternal>
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
