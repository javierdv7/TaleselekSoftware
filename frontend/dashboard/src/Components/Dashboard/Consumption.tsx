import {Flex, Text, Box} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';

const RealTimeClock: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
    }, []);
  
    const formatTime = (date: Date) => {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    };
  
    const formatDate = (date: Date) => {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
  
    return (
      <Box marginTop={5}>
        <Text fontSize="20" fontWeight="bold">
          {formatDate(currentTime)}
        </Text>
        <Text fontSize="20" fontWeight="bold">
          {formatTime(currentTime)}
        </Text>
      </Box>
    );
  }


interface ConsumptionProps {
    consumption: number;
    installation: string;
  }

const Consumption: React.FC<ConsumptionProps> = ({consumption, installation}) => {

    return (
        <>
        <Flex   h={"100%"} w={"100%"} direction={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"white"}
                    gap={"0"}
                  >
                  <Text fontSize="18" fontWeight="bold">
                    {installation}
                  </Text>
                  <Text fontSize="18" fontWeight="bold">
                    Consumo:
                  </Text>
                  <Text fontSize="30" fontWeight="bold" marginTop={15}>
                    {consumption} kWh
                  </Text>
                <RealTimeClock /></Flex>
        
        </>
    )
}

export default Consumption;