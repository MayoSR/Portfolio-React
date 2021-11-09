export function openFolder(id) {
    return { type: "OPEN_APPLICATION", selectedAppId: id }
}

export function closeWindow(id) {
    return { type: "CLOSE_WINDOW", selectedAppId: id }
}

export function openApplicationExecutable(id) {
    return { type: "OPEN_APPLICATION", selectedAppId: id }
}

export function saveApplicationWindowPosition(id, pos) {
    return { type: "APP_WINDOW_POS", selectedAppId: id, pos: pos }
}

export function bringApplicationWindowToFront(id) {
    return { type: "BRING_TO_FRONT", selectedAppId: id }
}

export function setMicroWindowApplication(id, pos) {
    return { type: "SET_MICRO_WINDOW", selectedAppId: id, pos: pos }
}

export function resetMicroWindowApplication() {
    return { type: "RESET_MICRO_WINDOW" }
}

