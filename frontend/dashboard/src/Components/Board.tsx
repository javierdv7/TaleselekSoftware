import { Tabs, TabList, TabPanels, Tab, TabPanel, Grid, GridItem, Box, Text, Flex } from '@chakra-ui/react'
import PhasesResponsivePie from './Dashboard/ResponsivePie';
import PhasesResponsiveLine from './Dashboard/ResponsiveLine';
import PhasesResponsiveBar from './Dashboard/ResponsiveBar';
import Consumption from './Dashboard/Consumption';
import { useState, useEffect } from 'react';

const Board = ({}) => {
    const RMin = 10
    const RAvg = 15
    const RMax = 20
    const SMin = 10
    const SAvg = 15
    const SMax = 20
    const TMin = 10
    const TAvg = 15
    const TMax = 20
  const [frequency, setFrequency] = useState(50.1);
  const [VoltsR, setVoltsR] = useState(210);
  const [VoltsS, setVoltsS] = useState(215);
  const [VoltsT, setVoltsT] = useState(222);
  const [AmpR, setAmpR] = useState(9);
  const [AmpS, setAmpS] = useState(7);
  const [AmpT, setAmpT] = useState(13);

  const getRandomValue = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFrequency(getRandomValue(49.1, 51.9));
      setVoltsR(getRandomValue(200, 220));
      setVoltsS(getRandomValue(210, 230));
      setVoltsT(getRandomValue(200, 222));
      setAmpR(getRandomValue(8, 10));
      setAmpS(getRandomValue(6, 8));
      setAmpT(getRandomValue(7, 14));
    }, 1000); // 3000 ms = 3 segundos

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

    
    const VoltsRS = parseFloat((VoltsR*Math.sqrt(3)).toFixed(1));
    const VoltsST = parseFloat((VoltsS*Math.sqrt(3)).toFixed(1));
    const VoltsTR = parseFloat((VoltsT*Math.sqrt(3)).toFixed(1));
    const kwR = parseFloat(((VoltsR * AmpR) / 1000).toFixed(1));
    const kwS = parseFloat(((VoltsS * AmpS) / 1000).toFixed(1));
    const kwT = parseFloat(((VoltsT * AmpT) / 1000).toFixed(1));
  
    return (
      <>
        <Tabs p={8} w={"100%"} h={"100%"} align="center" gap={32} isFitted>
          <TabList>
            <Tab>Medidor 1</Tab>
            <Tab isDisabled>Medidor 2</Tab>
            <Tab isDisabled>Medidor 3</Tab>
          </TabList>
          <TabPanels justifyContent={"center"} alignItems={"center"}>
            <TabPanel justifyContent={"center"} alignItems={"center"}>
              <Grid
                h={{ base: "100%", md: "91%" }}
                w={"100%"}
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                }}
                gap={4}
                justifyContent="center"
                alignItems="center"
              >
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  display={{base: "none", lg:"block"}}
                >
                  <Box
                    position="absolute"
                    top="46%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    zIndex={1}
                    pointerEvents="none"
                  >
                    <Text fontSize="13" fontWeight="bold">
                      {frequency}Hz
                    </Text>
                  </Box>
                  <PhasesResponsivePie
                    voltajeR={VoltsR}
                    voltajeS={VoltsS}
                    voltajeT={VoltsT}
                  />
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "none", lg:"block"}}
                >
                  <Flex
                    position="absolute"
                    top="96%"
                    left="50%"
                    borderBottomRightRadius={8}
                    borderBottomLeftRadius={8}
                    transform="translate(-50%, -50%)"
                    zIndex={1}
                    pointerEvents="none"
                    paddingBottom={4}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    color={"black"}
                  >
                    <Text fontSize="13" fontWeight="bold">
                      {RMin} Min
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {RAvg} Avg
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {RMax} Max
                    </Text>
                  </Flex>
                  <PhasesResponsiveLine phase="R" value={AmpR} />
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "none", lg:"block"}}
                >
                  <Flex
                    position="absolute"
                    top="96%"
                    left="50%"
                    borderBottomRightRadius={8}
                    borderBottomLeftRadius={8}
                    transform="translate(-50%, -50%)"
                    zIndex={1}
                    pointerEvents="none"
                    paddingBottom={4}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    color={"black"}
                  >
                    <Text fontSize="13" fontWeight="bold">
                      {SMin} Min
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {SAvg} Avg
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {SMax} Max
                    </Text>
                  </Flex>
                  <PhasesResponsiveLine phase="S" value={AmpS} />
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "none", lg:"block"}}
                >
                  <Flex
                    position="absolute"
                    top="96%"
                    left="50%"
                    borderBottomRightRadius={8}
                    borderBottomLeftRadius={8}
                    transform="translate(-50%, -50%)"
                    zIndex={1}
                    pointerEvents="none"
                    paddingBottom={4}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    color={"black"}
                  >
                    <Text fontSize="13" fontWeight="bold">
                      {TMin} Min
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {TAvg} Avg
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {TMax} Max
                    </Text>
                  </Flex>
                  <PhasesResponsiveLine phase="T" value={AmpT} />
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  overflow="clip"
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  borderRadius={8}
                  pointerEvents="none"
                  display={{base: "none", lg:"block"}}
                >
                  <Consumption
                    installation="Taleselek Test"
                    consumption={154}
                  ></Consumption>
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "none", lg:"block"}}
                >
                  <PhasesResponsiveBar phase='R' volts={VoltsRS} kw={kwR}/>
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "none", lg:"block"}}
                >
                  <PhasesResponsiveBar phase='S' volts={VoltsST} kw={kwS}/>
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "none", lg:"block"}}
                >
                  <PhasesResponsiveBar phase='T' volts={VoltsTR} kw={kwT}/>
                </GridItem>
                <GridItem
                  colSpan={{ base: 1, md: 2 }}
                  bg="blue"
                  maxW={{ base: "450", md: "900", lg: "910" }}
                  minH={220}
                  maxH={220}
                  display={{base: "none", lg:"block"}}
                />
                <GridItem
                  colSpan={{ base: 1, md: 2 }}
                  bg="tomato"
                  maxW={{ base: "450", md: "900", lg: "910" }}
                  minH={220}
                  maxH={220}
                  display={{base: "none", lg:"block"}}
                />



                
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  display={{base: "block", lg:"none"}}
                >
                  <Box
                    position="absolute"
                    top="46%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    zIndex={1}
                    pointerEvents="none"
                  >
                    <Text fontSize="13" fontWeight="bold">
                      {frequency}Hz
                    </Text>
                  </Box>
                  <PhasesResponsivePie
                    voltajeR={VoltsR}
                    voltajeS={VoltsS}
                    voltajeT={VoltsT}
                  />
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  overflow="clip"
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  borderRadius={8}
                  pointerEvents="none"
                  display={{base: "block", lg:"none"}}
                >
                  <Consumption
                    installation="Taleselek Test"
                    consumption={154}
                  ></Consumption>
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "block", lg:"none"}}
                >
                  <Flex
                    position="absolute"
                    top="96%"
                    left="50%"
                    borderBottomRightRadius={8}
                    borderBottomLeftRadius={8}
                    transform="translate(-50%, -50%)"
                    zIndex={1}
                    pointerEvents="none"
                    paddingBottom={4}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    color={"black"}
                  >
                    <Text fontSize="13" fontWeight="bold">
                      {RMin} Min
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {RAvg} Avg
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {RMax} Max
                    </Text>
                  </Flex>
                  <PhasesResponsiveLine phase="R" value={AmpR} />
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "block", lg:"none"}}
                >
                  <PhasesResponsiveBar phase='R' volts={VoltsRS} kw={kwR}/>
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "block", lg:"none"}}
                >
                  <Flex
                    position="absolute"
                    top="96%"
                    left="50%"
                    borderBottomRightRadius={8}
                    borderBottomLeftRadius={8}
                    transform="translate(-50%, -50%)"
                    zIndex={1}
                    pointerEvents="none"
                    paddingBottom={4}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    color={"black"}
                  >
                    <Text fontSize="13" fontWeight="bold">
                      {SMin} Min
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {SAvg} Avg
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {SMax} Max
                    </Text>
                  </Flex>
                  <PhasesResponsiveLine phase="S" value={AmpS} />
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "block", lg:"none"}}
                >
                  <PhasesResponsiveBar phase='S' volts={VoltsST} kw={kwS}/>
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "block", lg:"none"}}
                >
                  <Flex
                    position="absolute"
                    top="96%"
                    left="50%"
                    borderBottomRightRadius={8}
                    borderBottomLeftRadius={8}
                    transform="translate(-50%, -50%)"
                    zIndex={1}
                    pointerEvents="none"
                    paddingBottom={4}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    color={"black"}
                  >
                    <Text fontSize="13" fontWeight="bold">
                      {TMin} Min
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {TAvg} Avg
                    </Text>
                    <Text fontSize="13" fontWeight="bold">
                      {TMax} Max
                    </Text>
                  </Flex>
                  <PhasesResponsiveLine phase="T" value={AmpT} />
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  maxH={220}
                  maxW={{ lg: "450", md: "450", sm: "450" }}
                  minH={220}
                  p={0}
                  position={"relative"}
                  bg={"white"}
                  borderRadius={8}
                  boxShadow={"dark-lg"}
                  display={{base: "block", lg:"none"}}
                >
                  <PhasesResponsiveBar phase='T' volts={VoltsTR} kw={kwT}/>
                </GridItem>
                <GridItem
                  colSpan={{ base: 1, md: 2 }}
                  bg="blue"
                  maxW={{ base: "450", md: "900", lg: "910" }}
                  minH={220}
                  maxH={220}
                  display={{base: "block", lg:"none"}}
                />
                <GridItem
                  colSpan={{ base: 1, md: 2 }}
                  bg="tomato"
                  maxW={{ base: "450", md: "900", lg: "910" }}
                  minH={220}
                  maxH={220}
                  display={{base: "block", lg:"none"}}
                />
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </>
    );
}

export default Board