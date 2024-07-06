import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Board from "./Components/Board";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';


const MotionFlex = motion(Flex);

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const isBase = useBreakpointValue({ base: true, lg: false, });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const thresholdX = 100;
    const thresholdY = 150 // Puedes ajustar esto según la sensibilidad deseada
    if (mouseX <= thresholdX && mouseY <= thresholdY && !isBase) {
      setSidebarVisible(true);
    } else {
      setSidebarVisible(false);
    }
  };
  const sidebarWidth = useBreakpointValue({base: '100%', lg:'200'}) || '15%'

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }

  
  return (
    <>
      <Flex direction="row" h="100%" w="100%">
        <AnimatePresence>
          {isSidebarVisible && (
            <MotionFlex
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: sidebarWidth, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              position="fixed"
              height="100%"
              zIndex="overlay"
            >
              <Sidebar toggleSidebar={toggleSidebar} />
            </MotionFlex>
          )}
        </AnimatePresence>
        <Flex flex="1" w="100%" onMouseMove={handleMouseMove} direction="row">
          <AnimatePresence>
            {!isSidebarVisible && (
              <MotionFlex
                initial={{ translateX: "20px", opacity: 1 }}
                animate={{ translateX: "20px", opacity: 1 }}
                exit={{ translateX: "300px", opacity: 0 }}
                transition={{ duration: 0.2 }}
                display={{ base: "none", lg: "block" }}
                position="fixed"
                left="0"
                zIndex="sticky"
                h="100vh"
              >
                <IconButton
                  colorScheme="gray"
                  variant="solid"
                  aria-label="User"
                  icon={<ChevronRightIcon />}
                  pos="absolute"
                  top="12%"
                  left="5%"
                  style={isSidebarVisible ? { opacity: 0 } : { opacity: 1 }}
                />
              </MotionFlex>
            )}
          </AnimatePresence>
          <Flex w="100%" direction={"column"} h="100%" align={"center"}>
            <Header toggleSidebar={toggleSidebar} />
            <Board />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default App
