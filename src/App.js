import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Desktop from './components/Desktop';
import { ChakraProvider } from "@chakra-ui/react"
import FolderWindow from './components/FolderWindow';
import { useDispatch, useSelector } from 'react-redux'
import AppWindow from './components/AppWindow';

function App() {
  let apps = useSelector(state => state.apps)

  return (
    <ChakraProvider>

      <Desktop />
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
