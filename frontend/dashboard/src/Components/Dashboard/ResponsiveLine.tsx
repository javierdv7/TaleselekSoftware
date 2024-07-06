import { ResponsiveLine, PointTooltipProps } from '@nivo/line'
import { Text, Box } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';

interface LineProps {
  phase: string;
  value: number;
}
const CustomTooltip  = ({ point }: PointTooltipProps) => (
  <Box bg="gray.700" p="2" borderRadius="md" boxShadow="md">
    <Text><strong>{point.serieId}</strong></Text>
    <Text>{`Hora: ${point.data.x}`}</Text>
    <Text>{`Medición: ${point.data.y}`}</Text>
  </Box>
);
const PhasesResponsiveLine: React.FC<LineProps> = ({phase, value}) => {
  const colorMappings: { [key: string]: string } = {
    "R": "#333333",
    "S": "#fac800",
    "T": "#e16e09",
  };

  const color = colorMappings[phase] || "#000000"
  const [data, setData] = useState([
    {
      id: `Voltaje ${phase}`,
      color: color,
      data: [] as { x: string; y: number }[],
    },
  ]);

  useEffect(() => {
    const newDataPoint = { x: new Date().toLocaleTimeString(), y: value };
    setData(prevData => prevData.map(series => 
      series.id === `Voltaje ${phase}` 
        ? { ...series, data: [...series.data, newDataPoint] } 
        : series
    ));
  }, [value, phase]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        setData([
          {
            id: `Voltaje ${phase}`,
            color: color,
            data: [],
          },
        ]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, color]);


    return (
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 60, bottom: 40, left: 60 }}
        yScale={{
          type: "linear",
          min: 0,
          max: 20,
          stacked: true,
          reverse: false,
        }}
        defs={[
          // using helpers
          // will inherit colors from current element
          {
            id: "gradientR",
            type: "linearGradient",
            colors: [
              { offset: 0, color: "#333333" },
              { offset: 100, color: "#fff" },
            ],
          },
          {
            id: "gradientS",
            type: "linearGradient",
            colors: [
              { offset: 0, color: "#fac800" },
              { offset: 100, color: "#fff" },
            ],
          },
          {
            id: "gradientT",
            type: "linearGradient",
            colors: [
              { offset: 0, color: "#e16e09" },
              { offset: 100, color: "#fff" },
            ],
          },
        ]}
        // 2. defining rules to apply those gradients
        fill={[
          { match: { id: 'Voltaje R' }, id: 'gradientR' },
          { match: { id: 'Voltaje S' }, id: 'gradientS' },
          { match: { id: 'Voltaje T' }, id: 'gradientT' },
        ]}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          legend: `Intensidad ${phase}`,
          legendOffset: -40,
          legendPosition: "start",
        }}
        enablePoints={false}
        pointLabel="data.yFormatted"
        enableTouchCrosshair={true}
        useMesh={true}
        tooltip={CustomTooltip}
        colors={{ datum: "data.color" }}
        lineWidth={2}
        enableArea={true}
        areaBaselineValue={0}
        areaOpacity={0.6}
      />
    );};

export default PhasesResponsiveLine