import { ResponsiveBar, BarTooltipProps  } from '@nivo/bar'
import { Text, Box, Flex } from '@chakra-ui/react'

interface BarProps {
  phase: string;
  volts: number;
  kw: number;
}

const CustomTooltip = ({ id, value, indexValue }: BarTooltipProps) => (
    <Box bg="gray.700" p="2" borderRadius="md" boxShadow="md">
      <Text color="white"><strong>{id}</strong></Text>
      <Text color="white">{`Unidad: ${indexValue}`}</Text>
      <Text color="white">{`Valor: ${value}`}</Text>
    </Box>
  );

const PhasesResponsiveBar: React.FC<BarProps> = ({phase, volts, kw}) => {
  const data1 = [
    {
      "Unidad": "Volts",
      "Tension": volts,
      unity: "kw"
    }
  ]
  const data2 = [
    {
      "Unidad": "kW",
      "Potencia": kw,
    }
  ]
  const colorMappings: { [key: string]: string } = {
    "R": "#333333",
    "S": "#fac800",
    "T": "#e16e09",
  };
  const color = colorMappings[phase] || "#000000"
    return (
      <>
        <Flex w={"100%"} h={"100%"} gap={0} paddingLeft={5} paddingRight={5}>
          <ResponsiveBar
            data={data1}
            keys={["Tension"]}
            indexBy="Unidad"
            tooltip={CustomTooltip}
            maxValue={400}
            colors={color}
            borderRadius={3}
            margin={{ top: 50, bottom: 50, left:45}}
            padding={0.5}
            labelTextColor={"white"}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colorBy="indexValue"
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
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(0,0,0, 0.05)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "Tension",
                },
                id: "lines",
              }
            ]}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            gridYValues={13}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: `Medición ${phase}`,
              legendPosition: "middle",
              legendOffset: -40,
              truncateTickAt: 0,
              tickValues: [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400],
            }}
            labelSkipWidth={4}
            labelSkipHeight={12}
            barAriaLabel={(e) =>
              e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            }
          />
          <ResponsiveBar
            data={data2}
            keys={["Potencia"]}
            indexBy="Unidad"
            tooltip={CustomTooltip}
            margin={{ top: 50, bottom: 50, right:30}}
            padding={0.5}
            labelTextColor={"white"}
            maxValue={10}
            borderRadius={3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colorBy="indexValue"
            colors={color}
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
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(0,0,0, 0.05)",
                size: 4,
                padding: 1,
                stagger: true,
              },
            ]}
            fill={[
              {
                match: {
                  id: "Potencia",
                },
                id: `dots`,
              },
            ]}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisLeft={null}
            gridYValues={15}
            axisRight={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: -40,
              truncateTickAt: 0,
            }}
          />
        </Flex>
      </>
    );};

export default PhasesResponsiveBar