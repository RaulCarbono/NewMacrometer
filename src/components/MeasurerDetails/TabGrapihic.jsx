import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { GraphVoltage } from "./GraphVoltage";

export default function TabGraphicVAV({ serial }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const currentDay = new Date();

  function formatoFecha(fecha, formato) {
    const map = {
      dd: fecha.getDate(),
      mm: fecha.getMonth() + 1,
      yy: fecha.getFullYear().toString().slice(-2),
      yyyy: fecha.getFullYear(),
    };
    return formato.replace(/dd|mm|yy|yyy/gi, (matched) => map[matched]);
  }

  const currentDayToDay = formatoFecha(currentDay, "dd/mm/yy");

  return (
    <Box sx={{ width: "100%", typography: "body1", marginBottom: "5%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Voltaje" value="1" />
            <Tab label="Amperaje" value="2" />
            <Tab label="Watts" value="3" />
            {/* <Tab label="Factor de Potencia" value="4" /> */}
          </TabList>
        </Box>
        <TabPanel value="1">
          <GraphVoltage Dia={currentDayToDay} serial={serial} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
