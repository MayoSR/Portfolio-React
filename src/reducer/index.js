import React, { useEffect, useState } from 'react'
import TestApp from "../components/apps/TestApp"

let appIconRoute = "icons/"


function getAppIconPath(icon) {
    return appIconRoute + icon + ".png"
}


let initialState = {
    openWindowCount: 0,
    topZIndex: 1000,
    latestWindowPositionOffset: 100,
    microWindowApp: null,
    microWindowPos: null,
    apps: [
        {
            id: 1,
            icon: getAppIconPath("m"),
            name: "Test App",
            folder: 3,
            isOpen: 0,
            executable: <TestApp />,
            zIndex: 1000,
            top: 100,
            left: 100,
        },
        {
            id: 2,
            icon: getAppIconPath("team"),
            name: "Test App 2",
            folder: 4,
            isOpen: 0,
            executable: <TestApp />,
            zIndex: 1000,
            top: 100,
            left: 100,
        },
        {
            id: 3,
            name: "Test App",
            icon: getAppIconPath("folder"),
            type: "FOLDER",
            isOpen: 0,
            zIndex: 1000,
            top: 100,
            left: 100,
        },
        {
            id: 4,
            name: "Test App 2",
            icon: getAppIconPath("folder"),
            type: "FOLDER",
            isOpen: 0,
            zIndex: 1000,
            top: 100,
            left: 100,
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
            selectedFolder = {
                ...state.apps.filter(app => app.id === action.selectedAppId)[0], isOpen: 0
            }
            state = { ...state, apps: state.apps.map(app => { return app.id === action.selectedAppId ? { ...selectedFolder } : app }), latestWindowPositionOffset: state.latestWindowPositionOffset - 20 }
            return state
        case "APP_WINDOW_POS":
            selectedFolder = {
                ...state.apps.filter(app => app.id === action.selectedAppId)[0], top: action.pos.translateY, left: action.pos.translateX
            }
            state = { ...state, apps: state.apps.map(app => { return app.id === action.selectedAppId ? { ...selectedFolder } : app }) }
            return state
        case "SET_MICRO_WINDOW":
            state = { ...state, microWindowApp: action.selectedAppId, microWindowPos: action.pos }
            return state
        case "RESET_MICRO_WINDOW":
            state = { ...state, microWindowApp: null, microWindowPos: null }
            return state

        default:
            return state
    }
}