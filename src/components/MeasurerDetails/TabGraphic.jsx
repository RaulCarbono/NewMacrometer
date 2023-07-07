import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { GraphConsumptionDetail } from "./GraphConsumptionDetailDay";
import { GraphConsumptionDetailPerMonth } from "./GraphConsumptionDetailPerMonth";
import { GraphConsumptionDetailYear } from "./GraphConsumptionDetailYear";

export const TabGraphic = ({ serial }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "30%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Consumo por dia" value="1" />
            <Tab label="Consumo por mes" value="2" />
            <Tab label="Consumo por año" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <GraphConsumptionDetail />
        </TabPanel>
        <TabPanel value="2">
          <GraphConsumptionDetailPerMonth />
        </TabPanel>
        <TabPanel value="3">
          <GraphConsumptionDetailYear />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
