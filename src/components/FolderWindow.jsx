import React, { useState, useRef } from 'react'
import { Box, Flex, Heading, Icon, Text, Grid, Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import { AiOutlineMinus, AiOutlineClose, AiOutlineFullscreen, AiFillFolder, AiOutlinePlusCircle, AiOutlineMenu, AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch, AiFillStar } from 'react-icons/ai';
import { IoCut, IoCopyOutline, IoClipboardOutline, IoClipboard, IoRefreshOutline } from 'react-icons/io5';
import { BiSortAlt2, BiCut, BiRename, BiTrash, BiChevronRight, BiChevronDown } from 'react-icons/bi';
import { RiShareForwardBoxFill, RiMoreFill } from 'react-icons/ri';
import { MdSmartScreen } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import { openApplicationExecutable, setVirtualDeviceApp } from '../action'
import { Link } from "@chakra-ui/react"
import { IconButton } from '@chakra-ui/react'
import { openFolder, setSelectedIcon } from '../action';

export default function FolderWindow(props) {

    const apps = useSelector(state => state.apps)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(null)
    const [selectedQuickAccess, setSelectedQuickAccess] = useState(null)
    const [searchFilter, setSearchFilter] = useState("")
    const searchRef = useRef(null)

    const openApplication = (e, id) => {
        e.stopPropagation()
        dispatch(openApplicationExecutable(id))
    }

    const openFolderWindow = (id) => {
        dispatch(openFolder(id))
    }


    return (

        <Box p={4} width="100%" height="100%" bg="#212121">
            <Flex borderBottom="1px solid grey" position="absolute" left="0" top="40px" right="0" width="100%" height="50px" bg="" alignItems="center">
                <Box borderRight="1px solid grey">

                    <Button leftIcon={<Icon as={AiOutlinePlusCircle} />} variant='ghost'>
                        New
                    </Button>
                </Box>
                <Box borderRight="1px solid grey">

                    {[IoCut, IoCopyOutline, IoClipboard, BiRename, RiShareForwardBoxFill, BiTrash].map(icon => {
                        return <IconButton
                            colorScheme='blue'
                            aria-label='Search database'
                            icon={<Icon as={icon} w={6} h={6} />}
                            variant="ghost"
                        />
                    })}
                </Box>
                <Box pr={"10px"} borderRight="1px solid grey">
                    <Button leftIcon={<Icon as={BiSortAlt2} />} variant='ghost'>
                        Sort
                    </Button>
                    <Button leftIcon={<Icon as={AiOutlineMenu} />} variant='ghost'>
                        View
                    </Button>
                </Box>
                <IconButton
                    aria-label='Search database'
                    icon={<Icon as={RiMoreFill} w={6} h={6} />}
                    variant="ghost"
                />

            </Flex>
            <Flex position="absolute" left="0" top="95px" right="0" width="100%" height="50px" bg="" alignItems="center">
                {[AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineArrowLeft, AiOutlineArrowRight].map(icon => {
                    return <IconButton
                        colorScheme='blue'
                        aria-label='Search database'
                        icon={<Icon as={icon} w={5} h={5} />}
                        variant="ghost"
                    />
                })}
                <Flex alignItems="center" w="50vw">

                    <Flex border="1px solid grey" height="40px" width="60%" mr={"10px"} alignItems="center" justifyContent="space-between" p="10px">
                        <Flex alignItems="center" overflowX={"hidden"}>
                            <Icon as={AiFillFolder} color="gold" w={7} h={7} />
                            <Icon as={BiChevronRight} w={4} h={4} />
                            <Text>Desktop</Text>
                            <Icon as={BiChevronRight} w={4} h={4} />
                            <Text flexGrow={"1"} isTruncated>{props.folderName}</Text>
                        </Flex>
                        <Flex>
                            <Icon as={BiChevronDown} w={5} h={5} />
                            <Icon as={IoRefreshOutline} w={5} h={5} />
                        </Flex>
                    </Flex>
                    <InputGroup w="40%">
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Icon as={AiOutlineSearch} color='gray.300' />}
                        />
                        <Input ref={searchRef} onKeyDown={(e) => setSearchFilter(searchRef.current.value.toLowerCase())} h="40px" placeholder={`Search ${props.folderName}`} borderRadius="0" />
                    </InputGroup>
                </Flex>
            </Flex>
            <Flex>
                <Flex flex="0.1" borderRight="1px solid grey" marginTop="100px" flexDir="column" justifyContent="flex-start">
                    <Flex alignItems="center" width="100%">
                        <Icon as={BiChevronDown} w={5} h={5} />
                        <Icon as={AiFillStar} w={5} h={5} color="gold" />
                        <Text>Quick Access</Text>
                    </Flex>
                    <Flex flexDir="column" mt="10px" pl="20px" mr="10px">
                        {apps.filter(app => app.type === "FOLDER").map(folder => {
                            return <Flex p="5px" cursor="pointer" borderRadius="5px" style={folder.id === selectedQuickAccess ? { background: "rgba(153, 223, 255,0.2)" } : { background: "transparent" }} onClick={() => openFolderWindow(folder.id)} onMouseLeave={(e) => setSelectedQuickAccess(null)} onMouseOver={(e) => setSelectedQuickAccess(folder.id)} >
                                <Box w="20px" h="20px" mr={1}>
                                    <img src={folder.icon} alt="nav icon" />
                                </Box>
                                <Text fontSize="sm" width="100px" color="white" isTruncated>{folder.name}</Text>
                            </Flex>
                        })}
                    </Flex>

                </Flex>
                <Flex flex="0.9" flexDirection="column" pl={"20px"}>

                    <Grid marginTop="100px" gridTemplateColumns="30% 15% 10% 10% 10% 10%" width="100%" columnGap="20px" pl={"40px"} pb={"20px"}>
                        <Box style={{ borderRight: "1px solid grey" }} pr={3}>
                            <Heading color="#fff" fontSize="md">Name</Heading>
                        </Box>
                        <Flex style={{ borderRight: "1px solid grey" }}>
                            <Heading color="#fff" fontSize="md">Date Modified</Heading>
                        </Flex>
                        <Flex style={{ borderRight: "1px solid grey" }}>
                            <Heading color="#fff" fontSize="md">Type</Heading>
                        </Flex>
                        <Flex style={{ borderRight: "1px solid grey" }}>
                            <Heading color="#fff" fontSize="md">Size</Heading>
                        </Flex>
                        <Flex style={{ borderRight: "1px solid grey" }}>
                            <Heading color="#fff" fontSize="md">Code</Heading>
                        </Flex>
                        <Flex justifyContent="center" pr={1} style={{ borderRight: "1px solid grey" }}>
                            <Heading color="#fff" fontSize="md">Live Demo</Heading>
                        </Flex>
                    </Grid>
                    {apps.filter(app => (app.folder === props.folderId) && (app.name.toLowerCase().indexOf(searchFilter) !== -1)).map(app => {
                        return <Flex p={"5px"} borderRadius="3px" cursor="pointer" style={app.id === selected ? { background: "rgba(153, 223, 255,0.2)" } : { background: "transparent" }} width="100%" onMouseLeave={(e) => setSelected(null)} onMouseOver={(e) => setSelected(app.id)} onClick={(e) => openApplication(e, app.id)}>
                            <Grid gridTemplateColumns="30% 15% 10% 10% 10% 10%" columnGap="20px" width="100%">
                                <Flex alignItems="center" width="100%">
                                    <Box width="25%" w="25px" h="25px" mr={1}>
                                        <img src={app.icon} alt="nav icon" />
                                    </Box>
                                    <Text isTruncated width="75%" color="#fff" fontSize="sm" ml={2}>{app.name}</Text>
                                </Flex>
                                <Flex >
                                    <Text color="#fff" fontSize="sm" marginLeft="20px">10-20-2021 10:20</Text>
                                </Flex>
                                <Flex >
                                    <Text color="#fff" fontSize="sm" marginLeft="20px">Executable</Text>
                                </Flex>
                                <Flex >
                                    <Text color="#fff" fontSize="sm" marginLeft="20px">1,592KB</Text>
                                </Flex>
                                <Flex pl={"18px"}>
                                    {app.urlGitHub ? <Link fontSize="sm" color="#fff" href={app.urlGitHub} isExternal>
                                        View <Icon as={BiLinkExternal} mx="2px" />
                                    </Link> :
                                        <Box borderBottom="4px solid grey" width="10px" height="2px" color="grey" mt={"7px"} />}

                                </Flex>
                                <Flex justifyContent="center">
                                    {"link" in app ? <Link fontSize="sm" color="#fff" onClick={() => dispatch(setVirtualDeviceApp(app.link))}>
                                        View <Icon as={BiLinkExternal} mx="2px" />
                                    </Link> :
                                        <Box borderBottom="4px solid grey" width="10px" height="2px" color="grey" mt={"7px"} />}

                                </Flex>

                            </Grid>

                        </Flex>
                    })}
                </Flex>
            </Flex>
        </Box>

    )
}
