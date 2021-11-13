import React, { useEffect, useState } from 'react'
import TestApp from "../components/apps/TestApp"
import AppWindow from '../components/AppWindow'
import FolderWindow from '../components/FolderWindow'
import VirtualDeviceManager from '../components/VirtualDeviceManager'

let appIconRoute = "icons/"


function getAppIconPath(icon) {
    return appIconRoute + icon + ".png"
}

let AVD = {
    id: 5,
    icon: getAppIconPath("avd"),
    name: "Virtual Device Manager",
    folder: 3,
    isOpen: 0,
    executable: <AppWindow appId={5} appExe={<VirtualDeviceManager />} />,
    zIndex: 10003,
    top: 100,
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
    latestWindowPositionOffset: 100,
    microWindowApp: null,
    microWindowPos: null,
    timeoutID: null,
    selectedIcon: null,
    virtualDeviceManagerLink: null,
    mainWindowStatus: 0,
    apps: [
        {
            id: 1,
            icon: getAppIconPath("suitcase"),
            name: "Job Tracker App",
            folder: 100,
            isOpen: 0,
            executable: <AppWindow appId={1} appExe={<TestApp />} />,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
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
            executable: <AppWindow appId={2} appExe={<TestApp />} />,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
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
            executable: <AppWindow appId={3} appExe={<TestApp />} />,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
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
            executable: <AppWindow appId={4} appExe={<TestApp />} />,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
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
            executable: <AppWindow appId={5} appExe={<TestApp />} />,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
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
            executable: <AppWindow appId={6} appExe={<TestApp />} />,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
            urlGitHub: "https://github.com/MayoSR/connect4",
            onDesktop: false,
        },
        {
            id: 7,
            icon: getAppIconPath("wireframe"),
            name: "HTML Wireframe Converter",
            folder: 101,
            isOpen: 0,
            executable: <AppWindow appId={7} appExe={<TestApp />} />,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
            urlGitHub: "https://github.com/MayoSR/HTML-Template-to-Website-converter/tree/master/8thSemProject",
            onDesktop: false,
        },
        {
            id: 8,
            icon: getAppIconPath("farming"),
            name: "Crop Analysis",
            folder: 101,
            isOpen: 0,
            executable: <AppWindow appId={8} appExe={<TestApp />} />,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
            urlGitHub: "https://github.com/MayoSR/connect4",
            onDesktop: false,
        },
        {
            id: 9,
            icon: getAppIconPath("networking"),
            name: "Programming language analysis from Stackoverflow Users",
            folder: 102,
            isOpen: 0,
            executable: <AppWindow appId={9} appExe={<TestApp />} />,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
            urlGitHub: "https://github.com/MayoSR/HTML-Template-to-Website-converter/tree/master/8thSemProject",
            onDesktop: false,
        },
        {
            id: 10,
            icon: getAppIconPath("fairytale"),
            name: "Story generator from books",
            folder: 101,
            isOpen: 0,
            executable: <AppWindow appId={10} appExe={<TestApp />} />,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
            urlGitHub: "https://github.com/MayoSR/HTML-Template-to-Website-converter/tree/master/8thSemProject",
            onDesktop: false,
        },
        {
            id: 100,
            name: "UI Projects",
            icon: getAppIconPath("folder"),
            executable: <AppWindow appId={100} appExe={<FolderWindow folderId={100} />} />,
            type: "FOLDER",
            isOpen: 0,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
            onDesktop: true,
        },
        {
            id: 101,
            name: "Machine Learning and Data Science",
            icon: getAppIconPath("folder"),
            executable: <AppWindow appId={101} appExe={<FolderWindow folderId={101} />} />,
            type: "FOLDER",
            isOpen: 0,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
            onDesktop: true,
        },
        {
            id: 102,
            name: "Misc Projects",
            icon: getAppIconPath("folder"),
            executable: <AppWindow appId={102} appExe={<FolderWindow folderId={102} />} />,
            type: "FOLDER",
            isOpen: 0,
            zIndex: 1000,
            top: 100,
            left: 100,
            height: 500,
            width: 50,
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
            if (action.selectedAppId === 5) {
                state = { ...state, apps: [...state.apps.filter(app => app.id !== 5)] }
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
            state = { ...state, virtualDeviceManagerLink: action.link, apps: [...state.apps.filter(app => app.id !== 5), { ...AVD, isOpen: 1 }] }
            return state
        case "MAIN_WINDOW_TOGGLE":
            state = { ...state, mainWindowStatus: action.toggle }
            return state

        default:
            return state
    }
}