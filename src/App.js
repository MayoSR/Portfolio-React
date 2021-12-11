import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Desktop from './components/Desktop';
import { ChakraProvider } from "@chakra-ui/react"
import FolderWindow from './components/FolderWindow';
import { useDispatch, useSelector } from 'react-redux'
import AppWindow from './components/AppWindow';
import LockScreen from './components/LockScreen';

function App() {
  let apps = useSelector(state => state.apps)
  let loginStatus = useSelector(state => state.loginStatus)


  return (
    <ChakraProvider>
      {loginStatus ? <><Desktop />
        <Navbar /></> : <LockScreen />}


    </ChakraProvider>
  );
}

export default App;
