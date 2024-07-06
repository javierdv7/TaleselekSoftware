import { ResponsivePie } from '@nivo/pie'
import { useBreakpointValue } from '@chakra-ui/react'

interface PieProps {
    voltajeR: Number;
    voltajeS: Number;
    voltajeT: Number;
}

const PhasesResponsivePie: React.FC<PieProps> = ({voltajeR, voltajeS, voltajeT}) => {
    
    const data = [
        {
          id: "R-N",
          label: "R-N",
          value: voltajeR,
          color: "#555",
        },
        {
          id: "S-N",
          label: "S-N",
          value: voltajeS,
          color: "#FAC800",
        },
        {
          id: "T-N",
          label: "T-N",
          value: voltajeT,
          color: "#E16E09",
        }]
    const arclink = useBreakpointValue({ base: true, md: false, xl: true })
    return (
    <ResponsivePie
      data={data}
      tooltip={() => null}
      innerRadius={0.5}
      padAngle={3}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={3}
      theme={{
        labels: {
          text: {
            fontWeight: 700,
            fontSize: 12 // Puedes ajustar este valor según necesites
          },
        }
      }}
      margin={{ top: 15, bottom: 35 }}
      colors={{ datum: "data.color" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      
      enableArcLinkLabels={arclink}
      arcLinkLabelsSkipAngle={10}
      arcLabel={(e) => +e.value + "V"}
      arcLinkLabelsTextColor={{ from: "color", modifiers: [["brighter", 1]] }}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color", modifiers: [["brighter", 1]] }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={"white"}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(0,0,0, 0.05)",
          size: 4,
          padding: 1,
          stagger: true,
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
            id: "R-N",
          },
          id: "dots",
        },
        {
          match: {
            id: "S-N",
          },
          id: "lines",
        },
        {
          match: {
            id: "T-N",
          },
          id: "lines",
        },
      ]}
    />
  )};

export default PhasesResponsivePie