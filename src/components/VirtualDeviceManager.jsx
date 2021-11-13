import React from 'react'
import { useSelector } from 'react-redux'
import "./styles/VirtualDeviceManager.css"

export default function VirtualDeviceManager() {

    const virtualDeviceManagerLink = useSelector(state => state.virtualDeviceManagerLink)

    return (
        <div id="virtual-device-frame">
            <iframe
                title="live demo"
                src={virtualDeviceManagerLink}
                height="630px"
                width="345px"
                style={{ "border-radius": "20px" }}
                class="responsive-iframe"
            />
        </div>
    )
}
