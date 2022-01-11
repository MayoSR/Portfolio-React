import React, { useEffect, useState } from 'react'
import JobPicker from "../components/apps/JobPicker"
import MoviePicker from '../components/apps/MoviePicker'
import RecipePicker from '../components/apps/RecipePicker'
import FoodOrdering from '../components/apps/FoodOrdering'
import CropAnalysis from '../components/apps/CropAnalysis'
import EmergencyApp from '../components/apps/EmergencyApp'
import ProgrammingLanguageAnalysis from '../components/apps/ProgrammingLanguageAnalysis'
import HTMLWireframe from '../components/apps/HTMLWireframe'
import AppWindow from '../components/AppWindow'
import FolderWindow from '../components/FolderWindow'
import VirtualDeviceManager from '../components/VirtualDeviceManager'
import AirDrawing from '../components/apps/AirDrawing'

import Connect4 from '../components/apps/Connect4'
import StoryGenerator from '../components/apps/StoryGenerator'
import QuestionBank from '../components/apps/QuestionBank'
import AboutMe from '../components/apps/AboutMe'
import AboutPortfolio from '../components/apps/AboutPortfolio'
import Crypto0x from '../components/apps/Crypto0x'
import Resume from '../components/apps/Resume'

let appIconRoute = "icons/"


function getAppIconPath(icon) {
    return appIconRoute + icon + ".png"
}

let AVD = {
    id: 1000,
    icon: getAppIconPath("avd"),
    name: "Virtual Device Manager",
    folder: 3,
    isOpen: 0,
    executable: <AppWindow appId={1000} appExe={<VirtualDeviceManager />} />,
    zIndex: 10003,
    top: 25,
    left: 100,
    height: 670,
    width: 355,
    constraint: 1,
    overflow: "none",
    special: true,
    onDesktop: false,
}

let initialState = {
    openWindowCount: 0,
    topZIndex: 1000,
    latestWindowPositionOffset: 45,
    microWindowApp: null,
    microWindowPos: null,
    timeoutID: null,
    selectedIcon: null,
    virtualDeviceManagerLink: null,
    mainWindowStatus: 0,
    wifiButtonStatus: 0,
    loginStatus: 0,
    apps: [
        {
            id: 1,
            icon: getAppIconPath("suitcase"),
            name: "Job Tracker App",
            folder: 100,
            isOpen: 0,
            executable: <AppWindow appId={1} appExe={<JobPicker />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            link: "https://jobpicker16.netlify.app/",
            urlGitHub: "https://github.com/MayoSR/JobTracker",
            onDesktop: false,
        },
        {
            id: 2,
            icon: getAppIconPath("cinema"),
            name: "Movie Picker App",
            folder: 100,
            isOpen: 0,
            executable: <AppWindow appId={2} appExe={<MoviePicker />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            link: "https://moviepicker16.netlify.app",
            urlGitHub: "https://github.com/MayoSR/MovieChoice",
            onDesktop: false,
        },
        {
            id: 3,
            icon: getAppIconPath("recipe"),
            name: "Recipe Picker App",
            folder: 100,
            isOpen: 0,
            executable: <AppWindow appId={3} appExe={<RecipePicker />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            link: "https://recipebook16.netlify.app",
            urlGitHub: "https://github.com/MayoSR/RecipeBook",
            onDesktop: false,
        },
        {
            id: 4,
            icon: getAppIconPath("menu"),
            name: "Food Ordering App",
            folder: 100,
            isOpen: 0,
            executable: <AppWindow appId={4} appExe={<FoodOrdering />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            link: "https://foodordering16.netlify.app/",
            urlGitHub: "https://github.com/MayoSR/FoodRepository",
            onDesktop: false,
        },
        {
            id: 5,
            icon: getAppIconPath("emergency"),
            name: "Emergency App",
            folder: 100,
            isOpen: 0,
            executable: <AppWindow appId={5} appExe={<EmergencyApp />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            link: "https://emergencyapp16.netlify.app",
            urlGitHub: "https://github.com/MayoSR/EmergencyApp",
            onDesktop: false,
        },
        {
            id: 6,
            icon: getAppIconPath("connect4"),
            name: "Connect 4",
            folder: 102,
            isOpen: 0,
            executable: <AppWindow appId={6} appExe={<Connect4 />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            urlGitHub: "https://github.com/MayoSR/connect4",
            onDesktop: false,
        },
        {
            id: 7,
            icon: getAppIconPath("wireframe"),
            name: "HTML Wireframe Converter",
            folder: 101,
            isOpen: 0,
            executable: <AppWindow appId={7} appExe={<HTMLWireframe />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            urlGitHub: "https://github.com/MayoSR/HTML-Template-to-Website-converter/tree/master/8thSemProject",
            onDesktop: false,
        },
        {
            id: 8,
            icon: getAppIconPath("farming"),
            name: "Crop Analysis",
            folder: 101,
            isOpen: 0,
            executable: <AppWindow appId={8} appExe={<CropAnalysis />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            urlGitHub: false
            onDesktop: false,
        },
        {
            id: 9,
            icon: getAppIconPath("networking"),
            name: "Programming language analysis from Stackoverflow Users",
            folder: 102,
            isOpen: 0,
            executable: <AppWindow appId={9} appExe={<ProgrammingLanguageAnalysis />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            urlGitHub: "https://github.com/MayoSR/HTML-Template-to-Website-converter/tree/master/8thSemProject",
            onDesktop: false,
        },
        {
            id: 10,
            icon: getAppIconPath("fairytale"),
            name: "Story generator from books",
            folder: 101,
            isOpen: 0,
            executable: <AppWindow appId={10} appExe={<StoryGenerator />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            urlGitHub: "https://github.com/MayoSR/HTML-Template-to-Website-converter/tree/master/8thSemProject",
            onDesktop: false,
        },
        {
            id: 11,
            icon: getAppIconPath("stylus"),
            name: "Air Drawing",
            folder: 102,
            isOpen: 0,
            executable: <AppWindow appId={11} appExe={<AirDrawing />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            urlGitHub: "https://github.com/MayoSR/HTML-Template-to-Website-converter/tree/master/8thSemProject",
            onDesktop: false,
        },
        {
            id: 12,
            icon: getAppIconPath("question"),
            name: "Similar Questions from a Question Bank",
            folder: 102,
            isOpen: 0,
            executable: <AppWindow appId={12} appExe={<QuestionBank />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            urlGitHub: "https://github.com/MayoSR/HTML-Template-to-Website-converter/tree/master/8thSemProject",
            onDesktop: false,
        },
        {
            id: 14,
            icon: getAppIconPath("team"),
            name: "About Me",
            isOpen: 0,
            executable: <AppWindow appId={14} appExe={<AboutMe />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            onDesktop: true,
        },
        {
            id: 15,
            icon: getAppIconPath("cv"),
            name: "Resume",
            isOpen: 0,
            executable: <AppWindow appId={15} appExe={<Resume />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            onDesktop: true,
        },
        {
            id: 17,
            icon: getAppIconPath("help"),
            name: "Help",
            isOpen: 1,
            executable: <AppWindow appId={17} appExe={<AboutPortfolio />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            onDesktop: true,
        },
        {
            id: 18,
            icon: getAppIconPath("crypto"),
            name: "0xCrypto",
            folder: 100,
            isOpen: 0,
            executable: <AppWindow appId={18} appExe={<Crypto0x />} />,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            link: "https://0xcrypto.netlify.app/",
            urlGitHub: "https://github.com/MayoSR/0xcrypto",
            onDesktop: false,
        },
        {
            id: 100,
            name: "UI Projects",
            icon: getAppIconPath("folder"),
            executable: <AppWindow appId={100} appExe={<FolderWindow folderId={100} folderName={"UI Projects"} />} />,
            type: "FOLDER",
            isOpen: 0,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            onDesktop: true,
        },
        {
            id: 101,
            name: "Machine Learning and Data Science",
            icon: getAppIconPath("folder"),
            executable: <AppWindow appId={101} appExe={<FolderWindow folderId={101} folderName={"Machine Learning and Data Science"} />} />,
            type: "FOLDER",
            isOpen: 0,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            onDesktop: true,
        },
        {
            id: 102,
            name: "Misc Projects",
            icon: getAppIconPath("folder"),
            executable: <AppWindow appId={102} appExe={<FolderWindow folderId={102} folderName={"Misc Projects"} />} />,
            type: "FOLDER",
            isOpen: 0,
            zIndex: 1000,
            top: 25,
            left: 100,
            height: 600,
            width: 60,
            onDesktop: true,
        },
    ]
}

let selectedFolder = null

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "OPEN_APPLICATION":
            selectedFolder = {
                ...state.apps.filter(app => app.id === action.selectedAppId)[0], isOpen: 1, zIndex: state.topZIndex + 1, top: state.latestWindowPositionOffset, left: state.latestWindowPositionOffset
            }
            state = { ...state, topZIndex: state.topZIndex + 1, apps: [...state.apps.filter(app => app.id !== action.selectedAppId), { ...selectedFolder }], latestWindowPositionOffset: state.latestWindowPositionOffset + 20 }
            return state
        case "BRING_TO_FRONT":
            selectedFolder = {
                ...state.apps.filter(app => app.id === action.selectedAppId)[0], zIndex: state.topZIndex + 1
            }
            state = { ...state, topZIndex: state.topZIndex + 1, apps: [...state.apps.filter(app => app.id !== action.selectedAppId), { ...selectedFolder }] }
            return state
        case "CLOSE_WINDOW":
            if (action.selectedAppId === 1000) {
                state = { ...state, apps: [...state.apps.filter(app => app.id !== 1000)] }
            }
            else {
                selectedFolder = {
                    ...state.apps.filter(app => app.id === action.selectedAppId)[0], isOpen: 0
                }
                state = { ...state, topZIndex: state.topZIndex + 1, apps: [...state.apps.filter(app => app.id !== action.selectedAppId), { ...selectedFolder }], latestWindowPositionOffset: state.latestWindowPositionOffset - 20 }
            }
            return state
        case "APP_WINDOW_POS":
            if (AVD.id === action.selectedAppId) {
                selectedFolder = {
                    ...state.apps.filter(app => app.id === action.selectedAppId)[0], top: action.pos.translateY, left: action.pos.translateX,
                }
            }
            else {

                selectedFolder = {
                    ...state.apps.filter(app => app.id === action.selectedAppId)[0], top: action.pos.translateY, left: action.pos.translateX,
                    height: action.pos.height, width: action.pos.width
                }
            }
            state = { ...state, apps: state.apps.map(app => { return app.id === action.selectedAppId ? { ...selectedFolder } : app }) }
            return state
        case "SET_MICRO_WINDOW":
            state = { ...state, microWindowApp: action.selectedAppId, microWindowPos: action.pos }
            return state
        case "RESET_MICRO_WINDOW":
            state = { ...state, microWindowApp: null, microWindowPos: null }
            return state
        case "SET_MICRO_WINDOW_TIMER":
            state = { ...state, timeoutID: action.timer }
            return state
        case "SELECTED_ICON":
            state = { ...state, selectedIcon: action.selectedIcon }
            return state
        case "VIRTUAL_DEVICE_LINK":
            state = { ...state, virtualDeviceManagerLink: action.link, apps: [...state.apps.filter(app => app.id !== 1000), { ...AVD, isOpen: 1 }] }
            return state
        case "MAIN_WINDOW_TOGGLE":
            state = { ...state, mainWindowStatus: action.toggle }
            return state
        case "WIFI_WINDOW_TOGGLE":
            state = { ...state, wifiButtonStatus: action.toggle }
            return state
        case "LOGIN":
            state = { ...state, loginStatus: action.status }
            return state

        default:
            return state
    }
}